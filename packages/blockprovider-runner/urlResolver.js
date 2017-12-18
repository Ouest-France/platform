const Url = require('url');
const QueryString = require('querystring');

// (Object, Object, Object) => String
module.exports = function getBlockURL(
  BlockProviderConfigEndpoint,
  BlockConfig,
  BlockJSONRequestParameters
) {
  const mergeQueryString = MergeQueryString(
    BlockConfig,
    BlockJSONRequestParameters
  );

  if (BlockConfig.endpoint.url.includes('://')) {
    return mergeQueryString(BlockConfig.endpoint.url);
  }

  return mergeQueryString(
    Url.resolve(BlockProviderConfigEndpoint, BlockConfig.endpoint.url)
  );
};

function MergeQueryString(BlockConfig, BlockJSONRequestParameters) {
  return baseUrl => {
    const urlObject = Url.parse(baseUrl);

    const userDefinedParams = QueryString.parse(
      BlockJSONRequestParameters.replace(/^\?/, '')
    );

    // filter what should be in path
    const { path, queryparams } = BlockConfig.endpoint.parameters.reduce(
      (memo, parameter) => {
        if (parameter.in === 'path') {
          memo.path.push({
            name: parameter.name,
            value: userDefinedParams[parameter.name],
          });
        }

        if (parameter.in === 'query') {
          memo.queryparams[parameter.name] = userDefinedParams[parameter.name];
        }

        return memo;
      },
      { path: [], queryparams: {} }
    );

    // filter what should be in query string
    urlObject.query = Object.assign(urlObject.query || {}, queryparams);

    const replacer = (url, kv) => {
      return url.replace(`%7B${kv.name}%7D`, kv.value);
    };

    // console.log(path.reduce, urlObject.pathname);
    urlObject.pathname = path.reduce(replacer, urlObject.pathname);

    return Url.format(urlObject);
  };
}
