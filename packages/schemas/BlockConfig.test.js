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
                      "enum": ["ADMIN", "WEBMASTER", "ANONYME"]
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
                      "type": "boolean",
                      "title": "Afficher",
                      "description": "Permet de controler l'affichage du block dans une page. L'utilisation d'expression permet de conditionner cet affichage, par exemple '${PAGE} <= 1'"
                    },
                    "size": {
                      "type": "string",
                      "title": "Nombre d'article",
                      "description": "Correspond au nombre d'article à aficher sur la première page d'une liste d'article",
                      "minimum": 0,
                      "maximum": 100
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

    it('throw an error if UI section has no properties', () => {

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
              ui: {
                sections: [
                  {
                    "title": "param",
                    "properties": {}
                  }
                ]
              }
            },
            templates: [],
            external: {
              parameters: [],
            },
          },
        ],
      });
      expect(isValid).toBe(false);
      expect(validate.errors).toHaveLength(1);
      expect(validate.errors[0]).toMatchObject(
        { "dataPath": ".configurations[0].endpoint.ui.sections[0].properties",
          "keyword": "minProperties",
        });
    });

    it('throw an error if UI section has unexpected property', () => {
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
              ui: {
                sections: [
                  {
                    type: "string",
                    title: "insee",
                    other: "a value"
                  }
                ]
              }
            },
            templates: [],
            external: {
              parameters: [],
              ui: []
            },
          },
        ],
      });
      expect(isValid).toBe(false);
      expect(validate.errors[0]).toMatchObject(
        { "dataPath": ".configurations[0].endpoint.ui.sections[0]",
          "keyword": "additionalProperties",
        });
    });

    it('throw an error if UI property has no title', () => {
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
              ui: {
                sections: [
                  {
                    "title": "Paramètres",
                    "properties": {
                      "inseeCode": {
                        "type": "string"
                      }
                    }
                  }
                ]
              }
            },
            templates: [],
            external: {
              parameters: [],
            },
          },
        ],
      });
      expect(isValid).toBe(false);
      expect(validate.errors).toHaveLength(1);
      expect(validate.errors[0]).toMatchObject(
        { "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['inseeCode']",
          "keyword": "required",
          "params": { "missingProperty": "title" },
        });
    });

    it('throw an error if UI property has no type', () => {
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
              ui: {
                sections: [
                  {
                    "title": "Paramètres",
                    "properties": {
                      "inseeCode": {
                        "title": "Code INSEE"
                      }
                    }
                  }
                ]
              }
            },
            templates: [],
            external: {
              parameters: []
            },
          },
        ],
      });
      expect(isValid).toBe(false);
      expect(validate.errors).toHaveLength(1);
      expect(validate.errors[0]).toMatchObject(
        { "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['inseeCode']",
          "keyword": "required",
          "params": { "missingProperty": "type" },
        });
    });

    ['array', 'object', 'null'].forEach(type => {
      it(`throw an error if UI property has type ${type}`, () => {
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
                ui: {
                  sections: [
                    {
                      "title": "Paramètres",
                      "properties": {
                        "inseeCode": {
                          "type": type,
                          "title": "Code INSEE"
                        }
                      }
                    }
                  ]
                }
              },
              templates: [],
              external: {
                parameters: []
              },
            },
          ],
        });
        expect(isValid).toBe(false);
        expect(validate.errors[0]).toMatchObject(
          { "dataPath": ".configurations[0].endpoint.ui.sections[0].properties['inseeCode'].type",
            "keyword": "enum"
          });
      });
    });
  });
});
