#[macro_use]
extern crate lazy_static;

extern crate commander;
use commander::Commander;

#[macro_use]
extern crate serde_derive;
extern crate serde;
#[macro_use]
extern crate serde_json;
extern crate reqwest;
extern crate url;
extern crate tap;
extern crate yansi;

mod schemas;
mod config;
mod validator;

use schemas::{Schemas, Schema};
use std::process;
use std::io::{Error, ErrorKind};
use std::error::Error as Error2;
use validator::ValidationStatus;
use yansi::Paint;

fn main() {
    let schemas = Schemas::get().expect("Could not download Schemas");

    let command = Commander::new()
        .version(&env!("CARGO_PKG_VERSION").to_string())
        .usage(
            "--schema BlockProviderConfig --url http://localhost:3000/configuration",
        )
        .usage_desc(&env!("CARGO_PKG_DESCRIPTION").to_string())
        .option_str(
            "-s, --schema [value]",
            &format!("{} [{}]", "[required] Schema to validate against",
                schemas
                    .iter()
                    .map(|schema| schema.name.to_owned())
                    .collect::<Vec<String>>().join(" | "),
            ),
            None,
        )
        .option_str("-u, --url [value]", "[required] BlockProvider URL", None)
        .parse_env_or_exit();


    let schema = command.get_str("schema");
    let url = command.get_str("url");

    let run = schema
        .and_then(|schema| url.map(|url| (schema, url)))
        .ok_or(Error::new(
            ErrorKind::InvalidInput,
            "❌  Some required parameters are missing ❌",
        ))
        .and_then(|(schema_name, url)| {
            run_validator(&schemas, schema_name, url)
        });

    process::exit(match run {
        Ok(success) => {
            match success.body.data.validation {
                ValidationStatus::success => {
                    println!("✅  {}", Paint::green("Validation pass").bold());
                    0
                }
                ValidationStatus::error => {
                    let len = success.body.errors.len();
                    for (index, error) in success.body.errors.into_iter().enumerate() {
                        println!("❌  {} / {}", index + 1, len);
                        println!(
                            "{} => {:#?} {}",
                            Paint::red(error.dataPath.unwrap_or("".into())).bold(),
                            error.data.unwrap_or("".into()),
                            Paint::red(error.message.unwrap_or("".into())).bold()
                        );
                        println!("");
                        println!("schemaPath: {}", error.schemaPath.unwrap_or("".into()));
                        println!("params: {:#?}", error.params);
                    }
                    1
                }
            }
        }
        Err(err) => {
            println!("{:?} {:?}", err.kind(), err.description());
            1
        }
    });
}



fn run_validator(
    schemas: &Vec<Schema>,
    schema_name: String,
    url: String,
) -> Result<validator::ValidationResponse, std::io::Error> {
    schemas
        .iter()
        .find(|schema| schema.name == schema_name)
        .ok_or(Error::new(
            ErrorKind::InvalidInput,
            format!(
                "Could not find matching schema for '{}'",
                schema_name
            ),
        ))
        .and_then(|schema: &Schema| schema.validate(url))
}

#[test]
fn run_validator_test() {
    let schemas = Schemas::get().expect("Could not download Schemas");

    run_validator(
        &schemas,
        "BlockProviderConfig".into(),
        "https://blockprovider-example.cleverapps.io/configurations".into(),
    ).expect("Schema should be validated");
}
