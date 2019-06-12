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



//单元测试
//querySelector返回第一个DOM元素
//getAttribute获取元素属性值
import chai from 'chai'
import spies from 'chai-spies'

const expect = chai.expect
chai.use(spies)

//icon获取是不是正确
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'aixin'
        }
    });
    button.$mount('#test')  //挂在到能内存

    let element = button.$el.querySelector("use");
    let name = element.getAttribute('xlink:href');
    expect(name).to.equal('#m-aixin')
}

//有loading时 icon获取是不是正确
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'loading',
            loading:true
        }
    });
    button.$mount()

    let element = button.$el.querySelector("use");
    let name = element.getAttribute('xlink:href');
    expect(name).to.equal('#m-loading')
    
}

//order是不是正确
{
    let div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'aixin',
            whereIcon:'right'
        }
    });

    vm.$mount(div)
console.log(vm);
console.log(vm.$el);

    let svg = vm.$el.querySelector("svg");
    let order = window.getComputedStyle(svg).order;
    expect(order).to.equal('1')
    vm.$el.remove()
    vm.$destroy()
}

//click事件是不是正确
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'kaixin',
        }
    })
    vm.$mount()
    let spy = chai.spy(function(){})

    vm.$on('change', spy)
    // 希望这个函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}