'use strict';

var Home = function() {
    var context = $('.home');

    if (context) {
        var tabs = $('.home__fundacion__tabs__content');
        var tabSelector = $('.home__fundacion__tabs__selector li');

        function tabInit() {
            tabs.first().addClass('-active');
            tabSelector.first().addClass('-active');
        }

        tabSelector.on('click', function(){
            var $this = $(this);
            var target = $this.data('target');

            tabSelector.removeClass('-active');
            tabs.removeClass('-active');
            $this.addClass('-active');

            tabs.filter(function(){
                return $(this).data('tab') === target;
            }).addClass('-active');

        });

        tabInit();
    }
}

module.exports = Home;
