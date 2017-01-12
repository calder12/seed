// Main
'use strict';

var SeedPackList = require('./components/seed-pack-list.js');

(function($) {
  window.SEEDDOCS = {
    components: {
      seedPackList: new SeedPackList()
    }
  };
})(jQuery);
