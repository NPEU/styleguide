function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


ready(function(){
    document.querySelectorAll('select').forEach(function(i){
        var showSearch = (i.length > 5);
        new SlimSelect({
            select: i,
            showSearch: showSearch
        });
    });
});