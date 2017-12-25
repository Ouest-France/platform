use reqwest;
use serde_json;
use url::Url;
use validator::{Validator, ValidationResponse};
use std::io::Error;

#[derive(Debug, Serialize, Eq, PartialEq)]
pub struct Schema {
    pub id: String,
    pub name: String,
}

impl Schema {
    fn from_raw(schema: &RawSchema) -> Schema {
        let url = Url::parse(&schema.url).unwrap();

        let segments = url.path_segments();

        let paths = segments.map(|paths| paths.last()).expect(
            "Every schema $id should have a path",
        );

        let schema_name = paths
            .map(|last_path| last_path.split(".").nth(0))
            .expect("Every schema $id should have a path")
            .unwrap();

        Schema {
            id: schema.url.clone(),
            name: schema_name.to_string(),
        }
    }

    pub fn validate(&self, url: String) -> Result<ValidationResponse, Error> {
        Validator::validate(url, self.id.clone())
    }
}


#[derive(Debug, Deserialize, Serialize, Eq, PartialEq)]
struct RawSchema {
    #[serde(rename = "$id")]
    url: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum SchemaError {
    DownloadErr(String),
    ParseErr(String),
}

impl From<serde_json::Error> for SchemaError {
    fn from(error: serde_json::Error) -> Self {
        SchemaError::ParseErr(format!("{:#?}", error))
    }
}

pub struct Schemas {}

impl Schemas {
    pub fn get() -> Result<Vec<Schema>, reqwest::Error> {
        let raw_schemas: Vec<RawSchema> = reqwest::Client::new()
            .get("https://validator-server.cleverapps.io/schemas")
            .send()?
            .json()?;

        Ok(
            raw_schemas
                .iter()
                .map(Schema::from_raw)
                .collect::<Vec<Schema>>(),
        )
    }
}


#[test]
fn schemas_get_should_yield_more_than_one_schema() {
    assert!(Schemas::get().expect("Could not download schema").len() >= 1);
}
