describe('BlockConfig', () => {
  it('is exposed as a validation function', () => {
    expect(
      require('.').getSchema(
        'https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockConfig.json'
      )
    ).toBeInstanceOf(Function);
  });

  it('validate a complete BlockConfig object', () => {
    const validate = require('.').getSchema(
      'https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockConfig.json'
    );

    const isValid = validate({
      name: 'cms-block-provider-meteo-small',
      type: 'Display',
      labels: [
        { key: 'service', value: 'météo' },
        { key: 'format', value: 'petit' },
      ],
      configurations: [
        {
          version: '1.0.0',
          endpoint: {
            url: 'http://cms-block-provider-meteo/weather-forecast/{inseeCode}',
            method: 'GET',
            pure: false,
            parameters: [
              {
                name: 'inseeCode',
                type: 'integer',
                format: 'int32',
                in: 'path',
                description: 'Code INSEE de la localité',
                required: true,
              },
            ],
            ui: {
              sections: [
                {
                  "title": "Technique",
                  "properties": {
                    "role": {
                      "description": "Role à qui reviendra la charge d'éditer ce block",
                      "type": "string",
                      "title": "Role",
                      "enum": ["ADMIN", "WEBMASTER", "ANONYME"],
                      "minLength": 0,
                      "maxLength": 10
                    }
                  },
                  required: [ 'role' ]
                },
                {
                  "title": "Paramètres",
                  "properties": {
                    "inseeCode": {
                      "type": "string",
                      "description": "code insee de la ville ciblée par le block",
                      "title": "Foo",
                      "minLength": 0,
                      "maxLength": 10,
                      "pattern": "[0-9]{5}"
                    },
                    "offset": {
                      "type": "number",
                      "description": "decalage de la liste d'article à récupérer",
                      "title": "Decalage",
                      "minimum": 0,
                      "maximum": 100
                    },
                    "isVisible": {
                      "title": "Afficher",
                      "description": "Permet de controler l'affichage du block dans une page. L'utilisation d'expression permet de conditionner cet affichage, par exemple '${PAGE} <= 1'",
                      "type": "boolean"
                    },
                    "size": {
                      "type": "string",
                      "title": "Nombre d'article",
                      "description": "Correspond au nombre d'article à aficher sur la première page d'une liste d'article",
                      "minLength": 0,
                      "maxLength": 100,
                      "x-ui-configuration": {
                        "component": {
                          "name": "slider"
                        }
                      }
                    },
                    "filter": {
                      "type": "string",
                      "title": "Filtre de récupération des articles",
                      "description": "filtre au format ui-predicate (configuration edition filter) decrivant les conditions de récupération des articles automatiques",
                      "minLength": 0,
                      "maxLength": 1000,
                      "x-ui-configuration": {
                        "widget": {
                          "name": "article-filter-ui-predicate",
                          "version": "1"
                        }
                      }
                    }
                  },
                  required: [ 'inseeCode', 'size' ]
                }
              ]
            }
          },
          templates: [
            {
              name: 'default',
              labels: [{ key: 'theme', value: 'default' }],
              engine: 'mustache',
              source:
                '<section class="sd-bloc sd-meteo widget">    <h2 class="sd-meteo-title">        {{ title }}    </h2>    <div class="wnc_encart">        <a href="{{ link }}">            <div class="wnc_encart_row">                <div class="prevision"><span class="temp">{{ temp }}</span>                    <svg class="wnc_ty1" version="1.1" xmlns="http://www.w3.org/2000/svg"                         width="{{ svg.width }}"                         height="{{ svg.height }}"                         viewBox="{{ svg.view_box }}">                        <title>{{ svg.title }}</title>                        <path d="{{ svg.path }}"></path>                    </svg>                    <span class="hour">{{ hour }}</span></div>                <div class="description">                    <p class="localite">                        {{ city }}                    </p>                    <p>La météo détaillée<br/>de votre localité<br/>heure par heure</p>                    <p class="maree">                        <span class="ico-mer"></span> {{ tide_status }} : <strong>{{ tide }}</strong>                        Coef :                        <strong>{{ tide_coefficient }}</strong>                    </p>                </div>            </div>            <p class="baseline">Prévisions à 10 jours <span class="ico-chevron_right"></span></p>        </a>    </div></section>',
              assets: {
                js: [],
                css: ['https://meteo.domain.com/of/encart.css'],
                fonts: [],
                images: [],
              },
            },
          ],
          external: {
            parameters: [],
            ui: {},
          },
        },
      ],
    });

    expect(validate.errors).toEqual(null);
    expect(isValid).toBe(true);
  });

  it('validate the simplest BlockConfig', () => {
    const validate = require('.').getSchema(
      'https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockConfig.json'
    );
    const isValid = validate({
      name: 'cms-block-provider-empty',
      type: 'Display',
      labels: [],
      configurations: [
        {
          version: '1.0.0',
          endpoint: {
            url: 'http://cms-block-provider-meteo/weather-forecast/{inseeCode}',
            method: 'GET',
            pure: false,
            parameters: [],
            ui: {},
          },
          templates: [],
          external: {
            parameters: [],
          },
        },
      ],
    });
    expect(validate.errors).toEqual(null);
    expect(isValid).toBe(true);
  });

  it('throw an error if BlockConfig is empty', () => {
    const validate = require('.').getSchema(
      'https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockConfig.json'
    );
    expect(validate({})).toBe(false);
  });

  it('throw an error if BlockConfig have empty internal & external object', () => {
    const validate = require('.').getSchema(
      'https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockConfig.json'
    );
    expect(validate({ internal: {}, external: {} })).toBe(false);
  });

  describe('throw an error if UI is invalid', () => {
    const validate = require('.').getSchema(
      'https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockConfig.json'
    );

    const configurationFactoryByUI = (ui) => ({
      name: 'cms-block-provider-empty',
        type: 'Display',
      labels: [],
      configurations: [
      {
        version: '1.0.0',
        endpoint: {
          url: 'http://cms-block-provider-meteo/weather-forecast/{inseeCode}',
          method: 'GET',
          pure: false,
          parameters: [],
          ui
        },
        templates: [],
        external: {
          parameters: [],
        },
      },
    ],
    });

    it('throw if UI has unknown properties', () => {
      const isValid = validate(configurationFactoryByUI(
        {
          "unknownProperty": false,
          sections: [
            {
              "title": "Technique",
              "properties": {
                "role": {
                  "description": "Role à qui reviendra la charge d'éditer ce block",
                  "type": "string",
                  "title": "Role",
                  "enum": ["ADMIN", "WEBMASTER", "ANONYME"],
                  "minLength": 0,
                  "maxLength": 10
                }
              },
              required: ['role']
            }
          ]
        }));

      expect(isValid).toBe(false);
      expect(validate.errors).toHaveLength(1);
      expect(validate.errors[0]).toMatchObject(
        { "dataPath": ".configurations[0].endpoint.ui",
          "keyword": "additionalProperties",
          "params": { "additionalProperty": "unknownProperty" } });
    });

    describe('throw if UI section is invalid', () => {
      it('throw if UI section has no properties', () => {
        const isValid = validate(configurationFactoryByUI(
          {
            sections: [
              {
                "title": "param",
                "properties": {}
              }
            ]
          }));

        expect(isValid).toBe(false);
        expect(validate.errors).toHaveLength(1);
        expect(validate.errors[0]).toMatchObject(
          { "dataPath": ".configurations[0].endpoint.ui.sections[0].properties",
            "keyword": "minProperties",
          });
      });

      it('throw if UI section has unknown properties', () => {
        const isValid = validate(configurationFactoryByUI(
          {
            sections: [
              {
                "title": "Technique",
                "unknownProperty": false,
                "properties": {
                  "role": {
                    "description": "Role à qui reviendra la charge d'éditer ce block",
                    "type": "string",
                    "title": "Role",
                    "enum": ["ADMIN", "WEBMASTER", "ANONYME"],
                    "minLength": 0,
                    "maxLength": 10
                  }
                },
                required: ['role']
              }
            ]
          }));

        expect(isValid).toBe(false);
        expect(validate.errors).toHaveLength(1);
        expect(validate.errors[0]).toMatchObject(
          { "dataPath": ".configurations[0].endpoint.ui.sections[0]",
            "keyword": "additionalProperties",
            "params": { "additionalProperty": "unknownProperty" } });
      });

      it('throw if UI section has unexpected property', () => {
        const isValid = validate(configurationFactoryByUI(
          {
            sections: [
              {
                type: "string",
                title: "insee",
                other: "a value"
              }
            ]
          }
        ));

        expect(isValid).toBe(false);
        expect(validate.errors[0]).toMatchObject(
          { "dataPath": ".configurations[0].endpoint.ui.sections[0]",
            "keyword": "additionalProperties",
          });
      });
    });

    const configurationFactoryByUiSectionProps = (name, props) =>
      configurationFactoryByUI(
        {
          sections: [
            {
              "title": "Technique",
              "properties": {
                [name]: props
              },
              required: [name]
            }
          ]
        }
      );

    describe('throw if UI props is invalid', () => {

      it('throw if UI props has unknown properties', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "role",
            {
              "description": "Role à qui reviendra la charge d'éditer ce block",
              "type": "string",
              "title": "Role",
              "enum": ["ADMIN", "WEBMASTER", "ANONYME"],
              "minLength": 0,
              "maxLength": 10,
              "unknownProperty": false
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toHaveLength(1);
        expect(validate.errors[0]).toMatchObject(
          { "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['role']",
            "keyword": "additionalProperties",
            "params": { "additionalProperty": "unknownProperty" } });
      });

      it('throw if UI Props has no title', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "inseeCode",
            {
              "type": "string",
              "description": "bla bla",
              "minLength": 0,
              "maxLength": 10
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toHaveLength(1);
        expect(validate.errors[0]).toMatchObject(
          {
            "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['inseeCode']",
            "keyword": "required",
            "params": {"missingProperty": "title"},
          });
      });

      it('throw if UI Props has no type', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "inseeCode",
            {
              "title": "Code INSEE",
              "description": "bla bla",
              "minLength": 0,
              "maxLength": 10
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['inseeCode']",
              "keyword": "required",
              "params": {"missingProperty": "type"},
            })
          ])
        );
      });

      it('throw if UI Props type string not contains minLength', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "inseeCode",
            {
              "type": "string",
              "title": "a title",
              "description": "bla bla",
              "maxLength": 10
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['inseeCode']",
              "keyword": "required",
              "params": {"missingProperty": "minLength"},
            })
          ])
        )
      });

      it('throw if UI Props type string not contains maxLength', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "inseeCode",
            {
              "type": "string",
              "title": "a title",
              "description": "bla bla",
              "minLength": 10
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['inseeCode']",
              "keyword": "required",
              "params": {"missingProperty": "maxLength"},
            })
          ])
        )
      });

      it('throw if UI props type number not contains minimum', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "size",
            {
              "type": "number",
              "title": "a title",
              "description": "bla bla",
              "maximum": 10
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['size']",
              "keyword": "required",
              "params": {"missingProperty": "minimum"},
            })
          ])
        )
      });

      it('throw if UI props type number not contains maximum', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "size",
            {
              "type": "number",
              "title": "a title",
              "description": "bla bla",
              "minimum": 10
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['size']",
              "keyword": "required",
              "params": {"missingProperty": "maximum"},
            })
          ])
        )
      });

      it('throw if UI props type boolean contains maximum', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "isVisible",
            {
              "type": "boolean",
              "title": "a title",
              "description": "bla bla",
              "maximum": 10
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['isVisible'].type",
              "keyword": "enum",
              "params": {"allowedValues": ["number"]},
            })
          ])
        )
      });

      it('throw if UI props type number contains maxLength', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "size",
            {
              "type": "number",
              "title": "a title",
              "description": "bla bla",
              "maximum": 10,
              "minimum": 0,
              "maxLength": 10
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['size'].type",
              "keyword": "enum",
              "params": {"allowedValues": ["string"]},
            })
          ])
        )
      });

      it('throw if UI props type string contains maximum', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "label",
            {
              "type": "string",
              "title": "a title",
              "description": "bla bla",
              "maximum": 10,
              "minLength": 0,
              "maxLength": 10,
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['label'].type",
              "keyword": "enum",
              "params": {"allowedValues": ["number"]},
            })
          ])
        )
      });

      ['array', 'object', 'null'].forEach(type => {
        it(`throw if UI props has type ${type}`, () => {
          const isValid = validate(
            configurationFactoryByUiSectionProps(
              "inseeCode",
              {
                type,
                "title": "Code INSEE"
              }
            ));

          expect(isValid).toBe(false);
          expect(validate.errors[0]).toMatchObject(
            { "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['inseeCode'].type",
              "keyword": "enum"
            });
        });
      });
    });

    describe('throw if x-ui-configuration is invalid', () => {

      it('throw if x-ui-configuration is empty', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "size", {
              "type": "number",
              "title": "a title",
              "description": "bla bla",
              "maximum": 10,
              "minimum": 0,
              "x-ui-configuration": {}
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['size']['x-ui-configuration']",
              "keyword": "minProperties"
            })
          ])
        )
      });

      it('throw if x-ui-configuration has invalid property', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "size", {
              "type": "number",
              "title": "a title",
              "description": "bla bla",
              "maximum": 10,
              "minimum": 0,
              "x-ui-configuration": {
                "invalid": "test"
              }
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['size']['x-ui-configuration']",
              "keyword": "additionalProperties",
              "params": { "additionalProperty": "invalid" }
            })
          ])
        )
      });

      it('throw if widget has no version', () => {

        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "size", {
              "type": "number",
              "title": "a title",
              "description": "bla bla",
              "maximum": 10,
              "minimum": 0,
              "x-ui-configuration": {
                "widget": {
                  "name": "test"
                }
              }
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['size']['x-ui-configuration'].widget",
              "keyword": "required",
              "params": {"missingProperty": "version"}
            })
          ])
        )
      });

      it('throw if widget has no name', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "size", {
              "type": "number",
              "title": "a title",
              "description": "bla bla",
              "maximum": 10,
              "minimum": 0,
              "x-ui-configuration": {
                "widget": {
                  "version": "test"
                }
              }
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['size']['x-ui-configuration'].widget",
              "keyword": "required",
              "params": {"missingProperty": "name"}
            })
          ])
        )
      });

      it('throw if component is empty', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "size", {
              "type": "number",
              "title": "a title",
              "description": "bla bla",
              "maximum": 10,
              "minimum": 0,
              "x-ui-configuration": {
                "component": {
                }
              }
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['size']['x-ui-configuration'].component",
              "keyword": "minProperties"
            })
          ])
        )
      });

      it('throw if component has both component and widget', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "size", {
              "type": "number",
              "title": "a title",
              "description": "bla bla",
              "maximum": 10,
              "minimum": 0,
              "x-ui-configuration": {
                "widget": {
                  "name": "my-widget",
                  "version": "1.0"
                },
                "component": {
                  "name": "slider"
                }
              }
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['size']['x-ui-configuration']",
              "keyword": "oneOf"
            })
          ])
        )
      });

      it('throw if component has invalid property', () => {
        const isValid = validate(
          configurationFactoryByUiSectionProps(
            "size", {
              "type": "number",
              "title": "a title",
              "description": "bla bla",
              "maximum": 10,
              "minimum": 0,
              "x-ui-configuration": {
                "component": {
                  "test": true
                }
              }
            }
          ));

        expect(isValid).toBe(false);
        expect(validate.errors).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['size']['x-ui-configuration'].component",
              "keyword": "additionalProperties",
              "params": { "additionalProperty": "test" }
            })
          ])
        )
      });
    });
  });
});
