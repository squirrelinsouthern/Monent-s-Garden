<template>
    <div class="wrapper" :class="buttonClass">
        <div class="mo-toast" >
            <!--slot标签里传入想要弹出的内容 slot标签不能用v-html
            如果用户想让传入的内容以HTML的方式渲染，那么就传入enableHTML参数为true-->
            <div class="slot"  v-if="!enableHTML">
                <slot ></slot>
            </div>

            <!-- 如果用户想把弹出的内容以HTML方式显示就传入enableHTML:true
                在plugin.js中，用户传入的message数组被传入了toast组件的$slots.default中，所以这里当作
                HTML渲染时，值取的是this(toast组件实例)中$slots.default的内容-->
            <div v-html="$slots.default[0]" v-else></div>

            <!--关闭按钮的内容，默认是 [关闭]-->
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
            </span>
        </div>
    </div>

</template>

<script>
    /* export的对象是构造组件的选项, 相当于
            Vue.component('xxx', {
               name: 'xx'
            })
        中的第二个参数这个对象一样 */

    export default {
        name:"MoToast",
        props:{
            autoClose:{type:Boolean,default:true},
            autoTime:{type:Number, default:5},
            enableHTML:{type:Boolean, default:false},
            closeButton:{type:Object,
            /* 闭包。如果页面中多次使用该对象，那么都会'引用'同一对象，因此这里需要用一个函数返回对象*/
                default(){
                    return{
                        text:'关闭',
                        callback:undefined
                    }
                }
            },
            //显示的位置
            position:{type:String,
                default:'top',
                validate(where){
                    return ['top','middle','bottom'].indexOf(where) >= 0
                }
            }
        },
        mounted(){
            //调用自动关闭函数
            if(this.autoClose){
                setTimeout(()=>{
                    this.close()
                }, this.autoTime * 1000)
            }
        },
        computed:{
            //计算属性同步数据。返回一个class数组对象 用来给不同position的toast设置样式
            buttonClass(){
                return [`position-${this.position}`]
            }
        },
        methods: {
            //关闭函数
            close() {
                this.$el.remove()
        /* 触发beforeClose事件，plugin.js文件中会订阅该事件
       如果toast在被第二个创建前已经在页面上被关闭（不管是手动还是自动），就将plugin.js中的currentToast设置为null，
       因为plugin.js中的currentToast不会自动变成null，如果再次点击按钮创建toast的时候，
       还是会因为currentToast为true（具体看里面的if判断语句）而再次调用toast组件中的close函数，因此这么做
       是为了减少多余的函数调用 */
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