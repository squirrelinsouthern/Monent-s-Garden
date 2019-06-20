import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Row from './row'
import Col from './col'
import Input from './input'
import Layout from './layout'
import Footer from './footer'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Toast from './toast'
import Plugin from './plugin'

Vue.use(Plugin)
Vue.component('m-button', Button);
Vue.component('m-icon', Icon);
Vue.component('m-button-group', ButtonGroup);
Vue.component('m-input',Input);
Vue.component('m-col',Col);
Vue.component('m-row',Row);
Vue.component('m-layout',Layout);
Vue.component('m-header',Header);
Vue.component('m-sider',Sider);
Vue.component('m-content',Content);
Vue.component('m-footer',Footer);
Vue.component('m-toast',Toast);

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:true,
        message:'你可以输入改变我'
    },
    //验证是否触发change的callback函数（是否能收到ee对象）
    //html上只留一个input
    // created(){
    //     setTimeout(()=>{
    //         let event = new Event('change');
    //         let inputElement = this.$el.querySelector('input')
    //         inputElement.dispatchEvent(event)
    //         console.log('hi')
    //     },2000)
    // },
    methods:{
        inputChange(ee){
            console.log(ee)
        },
        sendMessage(){
            this.$toast('您收到一条消息',{})
        }
    },
    created(){

    }

});








//单元测试
//querySelector返回第一个DOM元素
//getAttribute获取元素属性值
// import chai from 'chai'
// import spies from 'chai-spies'

// const expect = chai.expect
// chai.use(spies)

//icon获取是不是正确
// {
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData:{
//             icon:'aixin'
//         }
//     });
//     button.$mount('#test')  //挂在到能内存
//
//     let element = button.$el.querySelector("use");
//     let name = element.getAttribute('xlink:href');
//     expect(name).to.equal('#m-aixin')
// }
//
// //有loading时 icon获取是不是正确
// {
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData:{
//             icon:'loading',
//             loading:true
//         }
//     });
//     button.$mount()
//
//     let element = button.$el.querySelector("use");
//     let name = element.getAttribute('xlink:href');
//     expect(name).to.equal('#m-loading')
//
// }
//
// //order是不是正确
// {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:'aixin',
//             whereIcon:'right'
//         }
//     });
//
//     vm.$mount(div)
// console.log(vm);
// console.log(vm.$el);
//
//     let svg = vm.$el.querySelector("svg");
//     let order = window.getComputedStyle(svg).order;
//     expect(order).to.equal('1')
//     vm.$el.remove()
//     vm.$destroy()
// }
//
// //click事件是不是正确
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'kaixin',
//         }
//     })
//     vm.$mount()
//     let spy = chai.spy(function(){})
//
//     vm.$on('change', spy)
//     // 希望这个函数被执行
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
// }