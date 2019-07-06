<template>
    <div>
        <m-button @click="sendMessage1">上方弹出</m-button>
        <m-button @click="sendMessage2">中间弹出</m-button>
        <m-button @click="sendMessage3">下面弹出</m-button>
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
        methods:{
            sendMessage(position) {
                this.$toast('您收到一条消息', {
                    position:position,
                    autoTime:4,
                    closeButton:{
                        text:'知道了',
                        callback(toast){
                            console.log('用户说知道了')
                        }
                    }
                })
            },
            sendMessage1(){
                this.sendMessage('top')
            },
            sendMessage2(){
                this.sendMessage('middle')
            },
            sendMessage3(){
                this.sendMessage('bottom')
            }

        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
</style>