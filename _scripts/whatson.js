// Always use this in case other scrips also want to add options:
if (typeof slim_options === 'undefined' || slim_options === null) {
    var slim_options = {};
}

slim_options['whatson_filter_staff'] = {
    'placeholder': 'Filter staff ...'
};

/*
'onChange': function(selection) {
        var values = [];
        for (k in selection) {
            values.push(selection[k].value);
        }

        var filterable_input = document.getElementById('whatson_filter');
        filterable_input.value = values.join('|');
        filterable_input.dispatchEvent(new KeyboardEvent('keyup',{'key':'13'}));
    }
*/

function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


ready(function(){
    var just_me = document.getElementById('whatson_filter_only_me');

    just_me.addEventListener('click', function(e) {
        //var slims = e.target.form.slims;
        
        var new_value = this.value;


        // Not sure why 'set' doesn't trigger the change.
        /*var filterable_input = document.getElementById('whatson_filter');
        filterable_input.value = new_value;
        setTimeout(function() {
            
            var staff_select = document.getElementById('whatson_filter_staff');
            staff_select.slim.set(new_value);
        }, 1);
        */
        var staff_select = document.getElementById('whatson_filter_staff');
        staff_select.slim.set([]);
        staff_select.slim.set(new_value);
        //staff_select.slim.setData({text: new_value});
        
        //console.log(this.value);
        
        //filterable_input.dispatchEvent(new KeyboardEvent('keyup',{'key':'13'}));
    });
});
