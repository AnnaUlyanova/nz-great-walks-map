$(document).ready(function() {

  $('#mapForm').change(function() {

    var selectedIsland = $('#mapForm option:selected').val();

    if( selectedIsland == "ALL"){
      $('a.dot').show(1000);
    }else {
      $('a.dot[island*="'+selectedIsland+'"]').show(1000);
        $('a.dot[island!="'+selectedIsland+'"]').hide(1000);
    }

  });

    $('a.dot').click(function() {
      $('a.dot').removeClass('selected');
      $(this).addClass('selected');

      var walk = '.walk_detail#'+$(this).attr('walk');
      var htmlCode = $(walk).html();

      $('.detail_container').fadeOut(500, function(){
        $('.detail_container .walk_detail').html(htmlCode);
        $('.detail_container').fadeIn(500);


      });
    });

var mapLabel = $('p.map_label');

mapLabel.hide();
//mapLabel.addClass('label_hide');

var dot = $('.dot');

dot.on('mouseenter mouseleave', function() {
    $(this).find('p').fadeToggle(2000);
});

});
