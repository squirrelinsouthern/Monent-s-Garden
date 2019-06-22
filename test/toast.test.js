const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })

    describe('props', () => {
        it('接收 autoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: true,
                    autoTime: 3
                }
            }).$mount(div)
           setTimeout(()=>{
               expect(document.body.contains(vm.$el)).to.eq(true)
               done()
           },1200)
        })
    })

    // describe('事件', () => {
    //     const Constructor = Vue.extend(Input)
    //     let vm
    //     afterEach(() => {
    //         vm.$destroy()
    //     })
    //     it('支持 change/input/focus/blur 事件', () => {
    //         ['change', 'input', 'focus', 'blur']
    //             .forEach((eventName) => {
    //                 vm = new Constructor({}).$mount()
    //                 const callback = sinon.fake();
    //                 vm.$on(eventName, callback)
    //                 //触发input的change 事件 这个event是人工的
    //                 let event = new Event(eventName);
    //                 Object.defineProperty(
    //                     event, 'target', {
    //                         value: {value: 'hi'}, enumerable: true
    //                     }
    //                 )
    //                 let inputElement = vm.$el.querySelector('input')
    //                 inputElement.dispatchEvent(event)
    //                 expect(callback).to.have.been.calledWith('hi')
    //                 //callback里有个参数应该是event？！
    //             })
    //     })
    //})
})