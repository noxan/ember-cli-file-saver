/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-file-saver',

  included(app) {
    this._super.included(app);

    app.import(this.treePaths.vendor + '/file-saver/FileSaver.js', {
      type: 'vendor'
    });

    app.import('vendor/jquery-ajax-arraybuffer.js', {
      type: 'vendor'
    });

    app.import('vendor/file-saver.shim.js', {
      type: 'vendor',
      exports: {
        rison: ['default']
      }
    });
  }
};
