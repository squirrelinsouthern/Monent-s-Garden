import Toast from './toast'


function createToast({Vue,msg,propsData,onCloseCallBack}) {
    let Comp = Vue.extend(Toast)
    let toast = new Comp({
        propsData:propsData
    })
    toast.$slots.default = [msg]
    toast.$mount()
    toast.$on('setTimeClose',onCloseCallBack)
    document.body.appendChild(toast.$el)
    return toast
}

let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (msg, toastProps) {
            if(currentToast){
                currentToast.setTimeClose()
            }
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

