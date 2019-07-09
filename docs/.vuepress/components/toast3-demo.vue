<template>
    <div>
        <m-button @click="supportHTML">点我试下</m-button>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import Vue from 'vue'
    import Plugin from '../../../src/plugin'

    //通过Vue.use执行plugin里的install方法
    Vue.use(Plugin)

    export default {
        components:{'m-button': Button},
        methods: {
            supportHTML() {
                this.$toast(`<strong style="color: yellow">欢迎参观！</strong>`, {
                    enableHTML: true,
                    position: 'middle',
                    closeButton: {
                        text: '好dei',
                        callback(toast) {
                            console.log('用户说知道了')
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
</style>