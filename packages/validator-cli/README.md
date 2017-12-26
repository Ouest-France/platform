# Ouest-France Platform `validator-cli`

`validator-cli` helps you validate your BlockProvider interface (BlockProviderConfig and BlockJSON).


[![Build Status](https://travis-ci.org/Ouest-France/platform.svg?branch=master)](https://travis-ci.org/Ouest-France/platform) [![Build status](https://ci.appveyor.com/api/projects/status/9xsw4bboduma93tv/branch/master?svg=true)](https://ci.appveyor.com/project/Ouest-France/platform/branch/master) [![Cargo version](https://img.shields.io/crates/v/validator-cli.svg)](https://crates.io/crates/validator-cli) [![Cargo version](https://img.shields.io/crates/v/validator-cli.svg)](https://crates.io/crates/validator-cli) [![Crates.io](https://img.shields.io/crates/l/validator-cli.svg)](https://crates.io/crates/validator-cli) [![docs.rs](https://img.shields.io/badge/docs.rs-👌-4EC329.svg?)](https://docs.rs/crate/validator-cli/) [![Crates.io](https://img.shields.io/crates/d/validator-cli.svg)](https://crates.io/crates/validator-cli)


<p align="center"><img src="assets/demo.gif" /></p>

### Download binaries

- Download `validator-cli` for your OS from the [release page](https://github.com/Ouest-France/platform/releases)

### Usage (on Linux/MacOSX)

Validate a local BlockProvider service:

```shell
validator-cli.exe --url http://localhost:3000/configurations --schema BlockProviderConfig
```

### Usage (on Linux/MacOSX)

Validate a local BlockProvider service:

```shell
validator-cli --url http://localhost:3000/configurations --schema BlockProviderConfig
```

## Development

#### Generate a new release

Just push a new Git tag.

#### Run tests

```shell
cargo test
```
