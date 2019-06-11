import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Buttongroup from './button-group'

Vue.component('m-button', Button);
Vue.component('m-icon', Icon);
Vue.component('m-button-group', Buttongroup);

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:true
    }
});