// Main
'use strict';
var SeedPackList = require('./components/seed-pack-list.js');
var rxs = require('./vendor/rxs');

(function($) {
  require('./utils/smoothScroll.js');

  window.SEEDDOCS = {
    components: {
      seedPackList: new SeedPackList()
    }
  };

  var $spySidebar = $('.js-spy-sidebar');
  if ($spySidebar.length) {
    var rxSidebarNavWidth = rxs('.rx-sidebar-nav-width');

    var rxsResize = function() {
      rxSidebarNavWidth.set({
        width: $spySidebar.width() + 'px',
      });
    };

    $(window).on('resize', rxsResize);

    rxsResize();
  }

})(jQuery);
