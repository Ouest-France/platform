describe('BlockJSON', () => {
  it('is exposed as a validation function', () => {
    expect(
      require('.').getSchema('https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockData.json')
    ).toBeInstanceOf(Function);
  });

  it('validate a complete BlockJSON object', () => {
    const validate = require('.').getSchema(
      'https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockData.json'
    );

    const isValid = validate({
      internal: {
        data: {
          title: 'Météo à Rennes',
          city: 'Rennes',
          hour: 'à 22h',
          temp: '3°',
          link: '/meteo/bretagne/rennes-35000/',
          svg: {
            title: 'veil-of-elevated-clouds',
            width: 32,
            height: 32,
            view_box: '0 0 32 32',
            path: 'M30.938...',
          },
        },
      },
      external: {
        headers: [],
        head: {
          links: [],
          meta: [],
        },
      },
    });

    expect(validate.errors).toEqual(null);
    expect(isValid).toBe(true);
  });

  it('validate the simplest BlockJSON', () => {
    const validate = require('.').getSchema(
      'https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockData.json'
    );
    expect(validate({ internal: { data: {} }, external: {} })).toBe(true);
  });

  it('throw an error if BlockJSON is empty', () => {
    const validate = require('.').getSchema(
      'https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockData.json'
    );
    expect(validate({})).toBe(false);
  });

  it('throw an error if BlockJSON have empty internal & external object', () => {
    const validate = require('.').getSchema(
      'https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockData.json'
    );
    expect(validate({ internal: {}, external: {} })).toBe(false);
  });
});
