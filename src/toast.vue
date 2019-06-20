<template>
    <div class="toast">
        <!--<div v-html="$slots.default[0]"></div>-->
        <div class="slot">
            <slot></slot>
        </div>
        <span class="close" v-if="closeButton" @click="onClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name:"MoToast",
        props:{
            autoClose:{type:Boolean,default:true},
            autoTime:{type:Number, default:1000000},
            closeButton:{
                type:Object,
                default(){
                    return{
                        text:'关闭',
                        callback:function (toast) {
                            toast.setTimeClose()
                        }
                    }
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
        methods: {
            setTimeClose() {
                this.$el.remove()
                this.$destroy()
            },
            onClose(){
                this.$el.remove()
                this.$destroy()
                this.closeButton.callback()
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
        align-items: center;
        position: fixed;
        justify-content:space-between;
        top:0;
        left:50%;
        transform: translateX(-50%);
        transition-duration: 2s;
        width: 94%;
        padding: 12px 12px;
        font-size:14px;
        margin-top: 8px;
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
    }
</style>