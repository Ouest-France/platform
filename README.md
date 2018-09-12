# Ouest-France/SIPA Platform - Developer Guide

[![Build Status](https://travis-ci.org/Ouest-France/platform.svg?branch=master)](https://travis-ci.org/Ouest-France/platform) [![Build status](https://ci.appveyor.com/api/projects/status/9xsw4bboduma93tv/branch/master?svg=true)](https://ci.appveyor.com/project/Ouest-France/platform/branch/master) [![NPM version](https://img.shields.io/npm/v/@ouest-france/schemas.svg)](https://www.npmjs.com/package/@ouest-france/schemas)
![extra](https://img.shields.io/badge/actively%20maintained-yes-ff69b4.svg?)

<!-- @todo add "get help on slack" link here -->

## Setup

```sh
git clone git@github.com:Ouest-France/platform.git
npm install
```

## Getting started


* [Sample of BlockProvider](/packages/blockprovider-example)
* [Run a BlockProvider locally](/packages/blockprovider-runner)
* **Validate your BlockProvider** [online](/packages/validator-server) or from
  your [laptop with the CLI](/packages/validator-cli)
* [Schemas documentation](/packages/documentation)


## Rules

- A block should not have it's own CSS, JS, fonts but leverage [SipaUI components](https://github.com/Ouest-France/SipaUI)

... if you really have to (and hope to pass our platform validation team)

- every CSS class names & ids must be prefixed by your block-provider name
- JavaScript code must not conflict with other code, block with global variable
- a block's JavaScript files will be concatained and loaded asynchronously
- a block-provider should respond in less XXXms

## How do I update my block ?

Block are immutable — including their parameters configuration/templates/CSS/JS/fonts assets). If you update any part of it (e.g. change a CSS, a parameter, a template) then you will have to update the version number (follow [semver](https://semver.org)) and submit again the block-provider to the platform for validation 
