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
              threshold: {
                'ui:autofocus': true,
                'ui:emptyValue': '10200',
                'ui:title': 'Bitcoin threshold',
                'ui:description':
                  'At which point should the Bitcoin threshold should be defined',
              },
            },
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
            ui: {},
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
});
