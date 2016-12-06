// Main
'use strict';

(function($) {
    var options = {
        valueNames: [
            'name',
            'section',
            'description',
            'pack',
        ]
    };

    var packs = new List('js-seed-packs', options);
    packs.sort('name', { order: "asc" });

    var $packList = $('#js-seed-pack-list');
    var $packSearch = $('#js-seed-pack-search');

    $packList.fadeIn(200);
    $packSearch.focus();
})(jQuery);
