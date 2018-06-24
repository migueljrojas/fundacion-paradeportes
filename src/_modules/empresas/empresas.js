'use strict';

// Constructor
var Empresas = function() {
    var empresas = $('.empresas');

    if (empresas) {
        var list = $('.empresas__list');
        var attachment = false, lastPosition, position, difference;
        var scroll = 0;
        var listItemLength = list.children('li').length;
        var listItemWidth = list.children('li').outerWidth();
        var listScrollWidth = listItemLength * listItemWidth;
        var listScrollLimit = (listItemLength - 1) * 220;

        var autoRotate = setInterval(function(){
            if( scroll < listScrollLimit ) {
                console.log('adentro');
                console.log('scroll', scroll);
                console.log('listScrollLimit', listScrollLimit);
                scroll = scroll > listScrollLimit - 220 ? listScrollLimit : scroll+220;
                list.animate({
                    scrollLeft:  scroll
                });
            } else {
                console.log('limit');
                scroll = 0;
                list.animate({
                    scrollLeft:  scroll
                });
            }
        }, 1000);

        list.on("mousedown mouseup mousemove",function(e){
            if( e.type == "mousedown" ){
                attachment = true, lastPosition = [e.clientX, e.clientY];
            }
            if( e.type == "mouseup" ) {
                attachment = false;
            }
            if( e.type == "mousemove" && attachment == true ){
                position = [e.clientX, e.clientY];
                difference = [ (position[0]-lastPosition[0]), (position[1]-lastPosition[1]) ];
                $(this).scrollLeft( $(this).scrollLeft() - difference[0] );
                $(this).scrollTop( $(this).scrollTop() - difference[1] );
                lastPosition = [e.clientX, e.clientY];
            }
        });

        list.on("mouseenter", function(){
            attachment = false;
            clearInterval(autoRotate);
        });

        list.on("mouseleave", function(){
            attachment = false;
            //autoRotate();
        });

        //autoRotate();
    }
};

module.exports = Empresas;
