<template>
    <div class="toast" :class="buttonClass">
        <div class="slot"  v-if="!enableHTML">
            <slot ></slot>
        </div>
        <div v-html="$slots.default[0]" v-else></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name:"MoToast",
        props:{
            autoClose:{type:Boolean,default:true},
            autoTime:{type:Number, default:3},
            enableHTML:{type:Boolean, default:false},
            closeButton:{type:Object,
                default(){
                    return{
                        text:'关闭',
                        callback:undefined
                    }
                }
            },
            position:{type:String,
                default:'top',
                validate(where){
                    return ['top','middle','bottom'].indexOf(where) >= 0
                }
            }
        },
        mounted(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.setTimeClose()
                }, this.autoTime * 1000)
            }
        },
        computed:{
            buttonClass(){
                return {
                    [`position-${this.position}`]:true
                }
            }
        },
        methods: {
            setTimeClose() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose(){
                this.$el.remove()
                this.$destroy()
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback(this) //测试callback加功能：this是toast实例
                }
            },
            log(){
                console.log('测试callback加功能呢')
            }
        }
    }
</script>

<style lang="scss" scoped type="text/scss">
    .toast{
        border-radius: 4px;
        background-color: rgba(23,34,59,0.7);
        color: #d8ecff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        transition-duration: 2s;
        /*width: 94%;*/
        padding: 12px 16px;
        font-size:14px;
        & .slot{
            /*border-right:1px solid white;*/
            margin-right: -4px;
        }
        & span{
            color: #ff6768;
        }
        & .close{
            flex-shrink: 0;
            display: inline;
            padding-left: 16px;
            /*border:1px solid greenyellow;*/
            height:100%;
        }
        &.position-top{
            top:12px;
            transform: translateX(-50%);
            left:50%;
        }
        &.position-bottom{
            bottom: 12px;
            transform: translateX(-50%);
            left:50%;
        }
        &.position-middle{
            transform: translate(-50%, -50%);
            top:50%;
            left:50%;
        }

    }

</style>