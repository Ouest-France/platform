use reqwest;
use std::io::Read;
use config::CONFIG;
use std::io::{Error, ErrorKind};
use serde_json;
use serde_json::Value;
use std::collections::HashMap;

pub struct Validator {}

#[derive(Debug, Clone)]
pub struct ValidationResponse {
    pub status: reqwest::StatusCode,
    pub body: ValidationBody,
}

#[derive(Debug, Clone, Deserialize)]
pub struct ValidationBody {
    pub data: ValidationBodyData,
    #[serde(default)]
    pub errors: Vec<ValidationBodyErrorDetail>,
}

#[derive(Debug, Clone, Deserialize)]
pub struct ValidationBodyData {
    pub validation: ValidationStatus,
}

#[derive(Debug, Clone, Deserialize, PartialEq)]
#[allow(non_camel_case_types)]
pub enum ValidationStatus {
    error,
    success,
}

#[derive(Debug, Clone, Deserialize)]
#[allow(non_snake_case)]
pub struct ValidationBodyErrorDetail {
    pub data: Option<String>,
    pub dataPath: Option<String>,
    pub keyword: Option<String>,
    pub message: Option<String>,
    pub schemaPath: Option<String>,
    pub params: Option<HashMap<String, Value>>,
}


impl Validator {
    /// Validate a `url` against a `schema`
    pub fn validate(url: String, schema_url: String) -> Result<ValidationResponse, Error> {
        let mut resp = reqwest::Client::new().get(url.as_str()).send().map_err(
            |err| {
                Error::new(ErrorKind::Other, err)
            },
        )?;

        let mut content = String::new();
        resp.read_to_string(&mut content).unwrap();


        let mut response = reqwest::Client::new()
            .post(CONFIG.validator_endpoint.as_str())
            .body(
                json!({
                    "body": content,
                    "schema": schema_url
                }).to_string(),
            )
            .send()
            .map_err(|err| Error::new(ErrorKind::Other, err))?;

        let mut validator_response_content = String::new();
        response
            .read_to_string(&mut validator_response_content)
            .unwrap();

        let body: ValidationBody = serde_json::from_str(&validator_response_content).map_err(
            |err| {
                println!("{:#?}", err);
                Error::new(
                    ErrorKind::InvalidInput,
                    "Validation server did not answer with valid JSON",
                )
            },
        )?;

        Ok(ValidationResponse {
            status: response.status(),
            body: body,
        })
    }
}


#[test]
fn can_validate_sample() {
    use reqwest::StatusCode;

    let res = Validator::validate(
        "https://blockprovider-example.cleverapps.io/configurations".into(),
        "https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockProviderConfig.json".into(),
    ).unwrap();

    assert_eq!(res.status, StatusCode::Ok);
    assert_eq!(res.body.data.validation, ValidationStatus::success);
}
