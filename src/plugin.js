import Toast from './toast'

//该文件不用import Vue就可以使用Vue的原因是当使用该插件的时候会加上一句Vue.use，vue是通过use传给install方法的

//创建一个变量，值为undefined
let currentToast


//install方法，告诉vue如何安装这个插件 里面有两个参数Vue & options
export default {
    install(Vue, options) {
        /*在vue的原型链上加上一个toast方法,第一个参数是需要弹出的内容，
       第二个参数是一个对象，对象的属性是toast组件中props对象中的属性*/
        Vue.prototype.$toast = function (msg, toastProps) {

            //如果toast已经存在，就关闭该toast
            if(currentToast){
                currentToast.close()
            }
            //解构赋值
                currentToast = createToast({
                    Vue,
                    msg,
                    propsData:toastProps,
                    onCloseCallBack(){
                        currentToast = null
                    }
                })

        }
    }
}

// 创建toast函数
function createToast({Vue,msg,propsData,onCloseCallBack}) {
    let Comp = Vue.extend(Toast)
    let toast = new Comp({
        //将用户传入的对象传到toast实例中去
        propsData:propsData
    })

    //toast的slot标签中的默认内容是传入的message参数
    toast.$slots.default = msg

    //把toast实例mount到内存中 这句是必须的，否则toast所有生命周期的钩子都不会执行
    toast.$mount()

    //订阅Close事件，如果发生了就调用onClose
    toast.$on('close',onCloseCallBack)

    //把元素放到body中
    document.body.appendChild(toast.$el)
    return toast
}
