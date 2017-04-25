// Main
'use strict';

(function($) {
  var SeedPackList = require('./components/seed-pack-list.js');
  require('./utils/smoothScroll.js');

  window.SEEDDOCS = {
    components: {
      seedPackList: new SeedPackList()
    }
  };
})(jQuery);
