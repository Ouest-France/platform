const t = require('chai').assert;
const urlResolver = require('./urlResolver');

describe('urlResolver', () => {
  it('should replace parameters from an absolute path', () => {
    const BlockProviderConfigEndpoint =
      'http:3dbf451e.ngrok.io/azoijd/azdqsd/qsdqsd';

    const BlockConfig = {
      version: '1.0.0',
      endpoint: {
        url: 'http://another_endpoint.com/funerals/{inseeCode}',
        method: 'GET',
        pure: false,
        parameters: [
          {
            name: 'inseeCode',
            in: 'path',
            description: 'Code INSEE de la localité',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        ],
        ui: [],
      },
      templates: [
        {
          name: 'default',
          source:
            '<style type="text/css">    .text-rubrique {        font-size: 1.4rem;    }    .txt-gris {        font-size: 1.3rem;    }</style><section class="widget-obseques">    <span class="titre-liste-rubrique">        <h2 class="titre-rubrique titre-ligne">Obsèques</h2>    </span>    <p class="text-rubrique margin-small">Avis de décès publiés à {{ city.name }}</p>    <a class="btn btn-n3 btn-petit sans-icone" href="{{ url }}" target="_blank" title="Voir tous les avis de décès"       data-trkBlocObseques="Voir tous les avis de décès">        Voir tous les avis de décès    </a>    <p class="txt-gris">Des professionnels à vos côtés</p>    <ul class="list">        {% for partner in partners %}            <li>                <a href="{{ partner.url }}" title="{{ partner.nomLegal }}" class="sans-icone" target="_blank"                   data-trkBlocObsequesPro="{{ partner.nomLegal }}">                    {{ partner.nomLegal }}                </a>                <span class="icon-chevron-droite"></span>            </li>        {% endfor %}    </ul></section>',
          assets: { js: [], css: [], fonts: [], images: [] },
        },
      ],
      external: { parameters: [], ui: [] },
    };

    const BlockJSONRequestParameters = '?inseeCode=85110';

    t.strictEqual(
      urlResolver(
        BlockProviderConfigEndpoint,
        BlockConfig,
        BlockJSONRequestParameters
      ),
      'http://another_endpoint.com/funerals/85110'
    );
  });

  it('should replace parameters from a relative path', () => {
    const BlockProviderConfigEndpoint =
      'http://3dbf451e.ngrok.io/WILL_BE_REMOVED';

    const BlockConfig = {
      version: '1.0.0',
      endpoint: {
        url: '/funerals/{inseeCode}',
        method: 'GET',
        pure: false,
        parameters: [
          {
            name: 'inseeCode',
            in: 'path',
            description: 'Code INSEE de la localité',
            required: true,
            schema: { type: 'integer', format: 'int32' },
          },
        ],
        ui: [],
      },
      templates: [
        {
          name: 'default',
          source:
            '<style type="text/css">    .text-rubrique {        font-size: 1.4rem;    }    .txt-gris {        font-size: 1.3rem;    }</style><section class="widget-obseques">    <span class="titre-liste-rubrique">        <h2 class="titre-rubrique titre-ligne">Obsèques</h2>    </span>    <p class="text-rubrique margin-small">Avis de décès publiés à {{ city.name }}</p>    <a class="btn btn-n3 btn-petit sans-icone" href="{{ url }}" target="_blank" title="Voir tous les avis de décès"       data-trkBlocObseques="Voir tous les avis de décès">        Voir tous les avis de décès    </a>    <p class="txt-gris">Des professionnels à vos côtés</p>    <ul class="list">        {% for partner in partners %}            <li>                <a href="{{ partner.url }}" title="{{ partner.nomLegal }}" class="sans-icone" target="_blank"                   data-trkBlocObsequesPro="{{ partner.nomLegal }}">                    {{ partner.nomLegal }}                </a>                <span class="icon-chevron-droite"></span>            </li>        {% endfor %}    </ul></section>',
          assets: { js: [], css: [], fonts: [], images: [] },
        },
      ],
      external: { parameters: [], ui: [] },
    };

    const BlockJSONRequestParameters = '?inseeCode=85110';

    t.strictEqual(
      urlResolver(
        BlockProviderConfigEndpoint,
        BlockConfig,
        BlockJSONRequestParameters
      ),
      'http://3dbf451e.ngrok.io/funerals/85110'
    );
  });
});
