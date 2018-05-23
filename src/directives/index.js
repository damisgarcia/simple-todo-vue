import Vue from 'vue'
import Sortable from 'sortablejs'

Vue.directive('sortable', {
    inserted(el, binding){
        var sortable = new Sortable(el, binding.value || {})
    }
});