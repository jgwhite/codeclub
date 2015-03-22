var stringUtils = require('ember-cli/lib/utilities/string');

module.exports = {
  description: 'Acceptance test',

  locals: function(options) {
    var entityName = options.entity.name;

    return {
      humanModuleName: humanize(entityName)
    };
  }
};

function humanize(string) {
  var result = string;

  result = stringUtils.dasherize(result);
  result = stringUtils.capitalize(result);
  result = result.replace(/-/g, ' ');

  return result;
}
