import Toast from './toast'
export default {
    install(Vue,options){
        Vue.prototype.$toast=function (msg) {
            let Comp = Vue.extend(Toast)
            let toast = new Comp ({
                propsData:{
                    closeButton:{
                        text:'知道了',
                        callback(){
                            console.log('okokokok')
                        }
                    }
                }
            })

            toast.$slots.default = [msg]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}