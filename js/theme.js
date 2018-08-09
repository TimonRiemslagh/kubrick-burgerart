var toggleSidebar = function () {
    var sidebarTrigger = $('.js-show-sidebar');
    var sidebarEl = $(sidebarTrigger.data('target'));
    var sidebarClose = $(sidebarTrigger.data('close'));

    sidebarTrigger.on('click', function(e) {
        e.preventDefault();
        console.log('test');
        sidebarEl.removeClass('sidebar-slide-out');
        sidebarEl.addClass('sidebar-slide-in');
    });

    sidebarClose.on('click', function(e) {
        e.preventDefault();
        sidebarEl.removeClass('sidebar-slide-in');
        sidebarEl.addClass('sidebar-slide-out');
    });
};

$(document).ready(function() {
    toggleSidebar();
});