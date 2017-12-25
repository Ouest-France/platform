pub struct Config {
    pub validator_endpoint: String,
}

impl Config {
    pub fn new() -> Self {
        Config { validator_endpoint: "https://validator-server.cleverapps.io/validate".into() }
    }
}

lazy_static!{
  pub static ref CONFIG: Config = {
      Config::new()
    };
}
