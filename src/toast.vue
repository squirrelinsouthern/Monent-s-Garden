<template>
    <div class="wrapper" :class="buttonClass">
        <div class="mo-toast" >
            <div class="slot"  v-if="!enableHTML">
                <slot ></slot>
            </div>
            <div v-html="$slots.default[0]" v-else></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
            </span>
        </div>
    </div>

</template>

<script>
    // import Button from './button'

    export default {
        name:"MoToast",
        // components:{'m-button': Button},
        props:{
            autoClose:{type:Boolean,default:true},
            autoTime:{type:Number, default:50},
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
                this.$emit('beforeClose')
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
    $animation-duration: 300ms;
    @keyframes slide-up {
        0% {opacity: 0; transform: translateY(100%);}
        100% {opacity: 1;transform: translateY(0%);}
    }
    @keyframes slide-down {
        0% {opacity: 0; transform: translateY(-100%);}
        100% {opacity: 1;transform: translateY(0%);}
    }
    @keyframes fade-in {
        0% {opacity: 0; }
        100% {opacity: 1;}
    }

    .wrapper{
        position: fixed;
        /*position: absolute;*/ //这个BUG找了好久 会移位
        transform: translateX(-50%);
        left:50%;
        z-index:99 !important;
        &.position-top{
            top:0px;
            .mo-toast{
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down $animation-duration;
            }
        }
        &.position-bottom{
            bottom: 0px;
            .mo-toast{
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up $animation-duration;
            }
        }
        &.position-middle{
            top:50%;
            transform: translate(-50%, -50%);
            .mo-toast{
                animation: fade-in $animation-duration;
            }
        }

        .mo-toast{
            border-radius: 4px;
            background-color: rgba(100,142,239,0.4);
            color: #5C8DF6;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            font-size:14px;
            & .slot{
                margin-right: -4px;
            }
            & span{
                color: #f3628d;
            }
            & .close{
                flex-shrink: 0;
                display: inline;
                padding-left: 16px;
                height:100%;
            }
        }
    }






</style>