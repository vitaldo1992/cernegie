$(function() {
    $(".sortable").sortable({cursor: "move", delay: 150, distance: 5});
    $(".sortable").disableSelection();
});