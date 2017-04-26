// Main
'use strict';
var SeedPackList = require('./components/seed-pack-list.js');

(function($) {
  require('./utils/smoothScroll.js');

  window.SEEDDOCS = {
    components: {
      seedPackList: new SeedPackList()
    }
  };
})(jQuery);
