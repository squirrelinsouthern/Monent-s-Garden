import Toast from './toast'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (msg, toastProps) {
            let Comp = Vue.extend(Toast)
            let toast = new Comp({
                propsData: toastProps
            })

            toast.$slots.default = [msg]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}