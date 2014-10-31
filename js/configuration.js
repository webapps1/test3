
        // left Navigation


        //  Slide navigation bar
$(function() {
    var navflag=true;
    $('#drawerIcon').click(function() {
        $( '.menu' ).toggle('slide', {direction: 'left'} ,'900' );
            // To set the overlay when navigation bar opens
        if(navflag)         {
            $( '#sidebarOverlay' ).addClass('sidebarOverlay');
            //$( '.sidebarOverlay' ).css("height",$('#mobileIframe').height());
            $("html").niceScroll().hide();
            navflag=false;
        }
        else
        {
            $( '#sidebarOverlay' ).removeClass('sidebarOverlay');
           //  $( '.sidebarOverlay' ).css("height",'0px');
            $("html").niceScroll().show();
            navflag=true;
        }   
    });


    $('#screenIcon').click(function() {
        $( '.menu' ).toggle('slide', {direction: 'left'} ,'900' );
            // To set the overlay when navigation bar opens
        if(navflag)         {
            $( '#sidebarOverlay' ).addClass('sidebarOverlay');
            $("html").niceScroll().hide();
            navflag=false;
        }
        else
        {
            $( '#sidebarOverlay' ).removeClass('sidebarOverlay');
             $("html").niceScroll().show();
            navflag=true;
        }   
    });


    $('#screenName').click(function() {
        $( '.menu' ).toggle('slide', {direction: 'left'} ,'900' );
            // To set the overlay when navigation bar opens
        if(navflag)         {
            $( '#sidebarOverlay' ).addClass('sidebarOverlay');
            $("html").niceScroll().hide();
            navflag=false;
        }
        else
        {
            $( '#sidebarOverlay' ).removeClass('sidebarOverlay');
            $("html").niceScroll().show();
            navflag=true;
        }   
    });


    // to hide the sidebar when clicks on sideoverlay

    $('#sidebarOverlay').click(function() {
    
        $( '.menu' ).toggle('slide', {direction: 'left'} ,'900' );
        $( '#sidebarOverlay' ).removeClass('sidebarOverlay');
        $("html").niceScroll().show();
        navflag=true;
        
    });

});



// To set the navigation bar height
$( '#menu').css('height',$( window ).height()-48);

// To hide the navigation bar and sideoverlay by default
$( '#menu' ).hide();






// on click functions of storeDetails and mapDetails

$(function() {
    
    //storeDetails
    $('.storeName').click(function() {
        $('.storeDetails' ).toggle('slide', {direction: 'down'}, 400);
    });
   
    
    
    $('#backIcon').click(function() {
        $('.storeDetails' ).toggle('slide', {direction: 'down'}, 400);
    });
    $('#backIconText').click(function() {
        $('.storeDetails' ).toggle('slide', {direction: 'down'}, 400);
    });
    

    //mapDetails
    $('.mapLocationImage').click(function() {
    $('.mapDetails' ).toggle('slide', {direction: 'down'}, 400);
    initialize();
    });

     
    $('#mapbackIcon').click(function() {
        $('.mapDetails' ).toggle('slide', {direction: 'down'}, 400);
    });
    $('#mapbackIconText').click(function() {
        $('.mapDetails' ).toggle('slide', {direction: 'down'}, 400);
    });
    

   

});

    
// To hide the storeDetails and mapDetails by default
$( '.storeDetails' ).hide();
$( '.mapDetails' ).hide();


    //  map initialize

    //to set the height of map_canvas
    $( '.map_canvas').css('height',$( window ).height()-24);

    

      function initialize() {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
          center: new google.maps.LatLng(17.3726375,78.547917),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
      }
        



document.write('<script src="../js/jquery.nicescroll.js"></script>');
   
   // Custom Jquery Scroll bar ..
            $(document).ready(

              function() { 

              $("html").niceScroll();
              $("#menu").niceScroll();
              //  moving scroll bar index to top
                $("#ascrail2000").css('z-index',99999); 
              }

               

            );

