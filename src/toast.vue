<template>
    <div class="toast">
        <!--<div v-html="$slots.default[0]"></div>-->
        <slot></slot>
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
            autoTime:{type:Number, default:10},
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
        color: white;
        position: fixed;
        top:0;
        left:50%;
        transform: translateX(-50%);
        transition-duration: 2s;
        white-space:nowrap;
        padding: 8px 20px;
        font-size:15px;
        margin-top: 8px;
        & span{
            color: #ff6768;
        }
        & .close{
            &:before{
                content: '';
                border:1px solid transparent;
                height:90px;
                padding-left: 12px;
            }


        }
    }
</style>