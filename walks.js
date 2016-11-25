$(document).ready(function() {

  $('#mapForm').change(function() {

//SHOW WALKS ON THE MAP BASED ON SELECTED ISLAND
    var selectedIsland = $('#mapForm option:selected').val();

    if ( selectedIsland == "ALL") {
      $('a.dot').show(1000);
    } else {
      $('a.dot[island*="'+selectedIsland+'"]').show(1000);
        $('a.dot[island!="'+selectedIsland+'"]').hide(1000);
    }
  });

  //SHOW WALK INFORMATION
    $('a.dot').click(function() {
      $('a.dot').removeClass('selected');
      $(this).addClass('selected');

        //SHOW WALK INFORMATION VIA HTML/CSS CLASSES

      // var walk = '.walk_detail#'+$(this).attr('walk');
      // var htmlCode = $(walk).html();
      //
      // $('.detail_container').fadeOut(500, function(){
      //   $('.detail_container .walk_detail').html(htmlCode);
      //   $('.detail_container').fadeIn(500);


//SHOW WALKS INFO VIA JS OBJECT

      var walkArr =  [
        {
          id: "waikaremoana",
          image: "images/waikaremoana.jpg",
          alt: "waikaremoana",
          header: "Lake Waikaremoana Great Walk",
          island: "North Island",
          description: "Trace the shoreline of Lake Waikaremoana, the 'sea of rippling waters.' Pass giant podocarp trees and remote beaches, and enjoy breathtaking views from Panekire Bluff."
        },
        {
          id: "tongariro",
          image: "images/tongariro.jpg",
          header: "Tongariro Northern Circuit",
          island: "North Island",
          description: "Explore the volcanic heart of Tongariro National Park, a landscape of stark glacial contrasts and alpine views. Journey through dramatic (and active!) volcanic landscapes, glacial valleys, native beech forest, alpine meadows and emerald coloured lakes."
        },
        {
          id: "whanganui",
          image: "images/whanganui.jpg",
          header: "Whanganui Journey",
          island: "North Island",
          description: "Explore the scenic beauty paddling up the Whanganui River, a landscape of remote hills and bush clad valleys. Drift down the Wanganui River in a canoe or kayak."
        },
        {
          id: "abel-tasman",
          image: "images/abel-tasman.jpg",
          header: "Abel Tasman Coast Track",
          island: "South Island",
          description: "Blessed with a mild climate, golden beaches and lush coastal native bush, the Abel Tasman Coast Track has it all. Keep an eye out for fur seals/kekeno."
        },
        {
          id: "heaphy",
          image: "images/heaphy.jpg",
          header: "Heaphy Track",
          island: "South Island",
          description: "Travel through expansive tussock downs, lush forests and nīkau palms to the roaring seas of the West Coast. Look and listen out for great spotted kiwi/roa around Gouland Downs."
        },
        {
          id: "milford",
          image: "images/milford.jpg",
          header: "Milford Track",
          island: "South Island",
          description: "Experience 'the finest walk in the world' as you retrace the steps of early explorers on the world-renowed Milford Track. Take a journey along valleys carved by glaciers, wander through ancient rainforests and admire cascading waterfalls."
        },
        {
          id: "routeburn",
          image: "images/routeburn.jpg",
          header: "Routeburn Track",
          island: "South Island",
          description: "This is the ultimate alpine adventure, weaving through meadows, reflective tarns and alpine gardens. You'll be rewarded with spectacular vistas over vast mountain ranges and valleys."
        },
        {
          id: "kepler",
          image: "images/kepler.jpg",
          header: "Kepler Track",
          island: "South Island",
          description: "Vast tussock-covered ridgelines and spectacular alpine vistas contrast with peaceful lakeside and valley beech forest in this wilderness adventure."
        },
        {
          id: "rakiura",
          image: "images/rakiura.jpg",
          header: "Rakiura Track",
          island: "Stewart Island",
          description: "Escape on an island adventure - relax and unwind in the peaceful surroundings with the bush, birds and beach at your side. Listen out for the Rakiura tokoeka/kiwi calling or look for its footprints."
        }
    ];

var i = $(this).attr('walk');
var $div = $("<div>", {id: walkArr[i].id, class: 'walk_info'}, "</div>")
     .html("<h2>" + walkArr[i].header + "</h2>" + "<h3>" + walkArr[i].island + "</h3>" + "<p>" + walkArr[i].description + "</p>");
var $img = $("<img>", {src: walkArr[i].image, alt: walkArr[i].alt, class: 'walk_photo'});

$('.detail_container h3, h2, p, img').fadeOut(1000, function(){
    $('.detail_container').fadeIn(1000);
    $('.detail_container .walk_detail').append($img, $div);
        });
    });

//ANIMATION ON THE MAP
var mapLabel = $('p.map_label');

mapLabel.hide();
var dot = $('.dot');

dot.on('mouseenter mouseleave', function() {
    $(this).find('p').fadeToggle(600);
  });
});
