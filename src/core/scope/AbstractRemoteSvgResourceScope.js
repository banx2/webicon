'use strict';

di('AbstractRemoteSvgResourceScope', function(di) {
  var
    AbstractScope = di('AbstractScope'),
    inherit = di('inherit')
  ;

  function AbstractRemoteSvgResourceScope(id, urlConfig, svgOptions) {
    var
      parseUrlResolver = di('parseUrlResolver'),
      parseSvgOptions = di('parseSvgOptions');

    AbstractScope.call(this, id);

    this.urlResolver = parseUrlResolver(urlConfig);
    this.svgOptions = parseSvgOptions(svgOptions);
    this._cache = null;
    this._resource = null;
  }

  return inherit(AbstractRemoteSvgResourceScope, AbstractScope, {

    preLoad: function() {
      return this._getResource();
    },

    _getResource: function() {
      var
        promise,
        self = this;

      if (this._cache) {
        return this._cache;
      }
      promise = this._cache = this._loadResource();
      promise.then(null,
        function(resource) {
          self._resource = resource;
        },
        function() {
          self._cache = null;
        }
      );

      return promise;
    },

    _loadResource: function() {
      var
        Promise = di('Promise');
      return Promise.reject();
    }

  });

});