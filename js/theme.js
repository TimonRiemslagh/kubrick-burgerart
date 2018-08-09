var toggleSidebar = function () {
    var sidebarTrigger = $('.js-show-sidebar');
    var sidebarEl = $(sidebarTrigger.data('target'));
    var sidebarBackground = $(sidebarTrigger.data('background'));
    var sidebarClose = $(sidebarTrigger.data('close'));

    sidebarTrigger.on('click', function(e) {
        e.preventDefault();
        console.log('test');
        sidebarEl.removeClass('sidebar-slide-out');
        sidebarEl.addClass('sidebar-slide-in');
        sidebarBackground.show();
    });

    sidebarClose.on('click', function(e) {
        e.preventDefault();
        sidebarEl.removeClass('sidebar-slide-in');
        sidebarEl.addClass('sidebar-slide-out');
        sidebarBackground.hide();
    });
};

$(document).ready(function() {
    toggleSidebar();
});