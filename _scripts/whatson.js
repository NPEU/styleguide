// Always use this in case other scrips also want to add options:
if (typeof slim_options === 'undefined' || slim_options === null) {
    var slim_options = {};
}

slim_options['whatson_filter_staff'] = {
    'placeholder': 'Filter staff ...'
};

function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


ready(function(){

    var filter_buttons = document.querySelectorAll('.whatson-filter-button');
    var staff_select = document.getElementById('whatson_filter_staff');

    Array.prototype.forEach.call(filter_buttons, function(filter_button, i) {

        filter_button.addEventListener('click', function(e) {

            var new_value = this.value.split('|');
            
            staff_select.slim.set([]);
            staff_select.slim.set(new_value);
        });
    });
});
