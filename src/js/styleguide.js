(function($){
  var $body = $('body');
  var $docs = $('#s-docs');
  var $tableOfContents = $('#table-of-contents');
  var $toc = $('#toc');

  // Add anchors
  anchors.add('.s-docs h2, .s-docs h3, .s-docs h4');

  // Popovers / Tooltips
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  // Table of Contents
  if($toc.length) {
    $toc.toc({
      content: 'body',
      headings: '#s-docs > h2, #s-docs > h3, #s-docs > h4',
    });
    // Scroll spy
    $body.scrollspy({
      target: '#table-of-contents',
      offset: 100,
    });
    $body.on('load', function() {
      $body.scrollspy('refresh');
    });
    $(window).on('resize', function() {
      $tableOfContents.affix('checkPosition');
    });
  }
})(jQuery);
