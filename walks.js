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
          info: "<div class='walk_detail' id='waikaremoana'><img class='walk_photo' src='images/waikaremoana.jpg' alt='waikaremoana' /> <div class='walk_info'><h2>Lake Waikaremoana Great Walk</h2> <h3>North Island</h3> <p>Trace the shoreline of Lake Waikaremoana, the 'sea of rippling waters.' Pass giant podocarp trees and remote beaches, and enjoy breathtaking views from Panekire Bluff.</p></div></div>",
        },
        {
          id: "tongariro",
          info: "<div class='walk_detail' id='tongariro'><img class='walk_photo' src='images/tongariro.jpg' alt='tongariro' /> <div class='walk_info'><h2>Tongariro Northern Circuit</h2> <h3>North Island</h3> <p>Explore the volcanic heart of Tongariro National Park, a landscape of stark glacial contrasts and alpine views. Journey through dramatic (and active!) volcanic landscapes, glacial valleys, native beech forest, alpine meadows and emerald coloured lakes.</p></div></div>",
        },
        {
          id: "whanganui",
          info: "<div class='walk_detail' id='whanganui'><img class='walk_photo' src='images/whanganui.jpg' alt='whanganui' /> <div class='walk_info'><h2>Whanganui Journey</h2> <h3>North Island</h3> <p>Explore the scenic beauty paddling up the Whanganui River, a landscape of remote hills and bush clad valleys. Drift down the Wanganui River in a canoe or kayak.</p></div></div>",
        },
        {
          id: "abel-tasman",
          info: "<div class='walk_detail' id='abel-tasman'><img class='walk_photo' src='images/abel-tasman.jpg' alt='abel-tasman' /> <div class='walk_info'><h2>Abel Tasman Coast Track</h2> <h3>South Island</h3> <p>Blessed with a mild climate, golden beaches and lush coastal native bush, the Abel Tasman Coast Track has it all. Keep an eye out for fur seals/kekeno.</p></div></div>",
        },
        {
          id: "heaphy",
          info: "<div class='walk_detail' id='heaphy'><img class='walk_photo' src='images/heaphy.jpg' alt='heaphy' /> <div class='walk_info'><h2>Heaphy Track</h2> <h3>South Island</h3> <p>Travel through expansive tussock downs, lush forests and nīkau palms to the roaring seas of the West Coast. Look and listen out for great spotted kiwi/roa around Gouland Downs.</p></div></div>",
        },
        {
          id: "milford",
          info: "<div class='walk_detail' id='milford'><img class='walk_photo' src='images/milford.jpg' alt='milford' /> <div class='walk_info'><h2>Milford Track</h2> <h3>South Island</h3> <p>Experience 'the finest walk in the world' as you retrace the steps of early explorers on the world-renowed Milford Track. Take a journey along valleys carved by glaciers, wander through ancient rainforests and admire cascading waterfalls.</p></div></div>",
        },
        {
          id: "routeburn",
          info: "<div class='walk_detail' id='routeburn'><img class='walk_photo' src='images/routeburn.jpg' alt='routeburn' /> <div class='walk_info'><h2>Routeburn Track</h2> <h3>South Island</h3> <p>This is the ultimate alpine adventure, weaving through meadows, reflective tarns and alpine gardens. You'll be rewarded with spectacular vistas over vast mountain ranges and valleys.</p></div></div>",
        },
        {
          id: "kepler",
          info: "<div class='walk_detail' id='kepler'><img class='walk_photo' src='images/kepler.jpg' alt='kepler' /> <div class='walk_info'><h2>Kepler Track</h2> <h3>South Island</h3> <p>Vast tussock-covered ridgelines and spectacular alpine vistas contrast with peaceful lakeside and valley beech forest in this wilderness adventure.</p></div></div>",
        },
        {
          id: "rakiura",
          info: "<div class='walk_detail' id='rakiura'><img class='walk_photo' src='images/rakiura.jpg' alt='rakiura' /> <div class='walk_info'><h2>Rakiura Track</h2> <h3>South Island</h3> <p>Escape on an island adventure - relax and unwind in the peaceful surroundings with the bush, birds and beach at your side. Listen out for the Rakiura tokoeka/kiwi calling or look for its footprints.</p></div></div>",
        }
    ];

var walk = 'walkArr['+$(this).attr('walk')+'].info';
var htmlCode = eval(walk);

      $('.detail_container').fadeOut(500, function(){
        $('.detail_container .walk_detail').html(htmlCode);
        $('.detail_container').fadeIn(500);
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
