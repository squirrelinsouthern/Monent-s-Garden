<template>
    <div class="tabs-nav">
        <!--所有tabsitem出现在这里-->
        <slot></slot>
        <!--用于其他操作，如添加tab按钮-->
        <div class="slot-wrapper">
            <slot name="actions"></slot>
        </div>
        <!--active的tab显示下划线；写ref是为了方便获取到该div元素并设置width和left-->
        <div class="line" ref="line"></div>
    </div>
</template>

<script>
    export default {
        name:'MoTabsNav',
        inject: ['eventBus'],
        mounted () {
    /*订阅 update:selected事件，由于需要获取子元素，根据vue的mounted函数执行顺序（mounted函数是将所有元素挂载完毕
    后执行，因此把update:selected事件的监听写在mounted中可以保证在此阶段可以找到该组件的子元素）*/
            this.watchSelect()
        },
        methods:{
            watchSelect(){
                // 接收两个参数，itemName:当前active状态的tab组件的name属性;item:当前active状态的tab组件实例
                this.eventBus.$on('update:selected',(itemName,item)=>{
                    // getBoundingClientRect()取值为width,height,left,top
                    let {left, width} = item.$el.getBoundingClientRect()
                    let {left: left2} = this.$el.getBoundingClientRect()
                    //获取该tabs-head的left信息为left2：0
                    console.log(left);
                    this.$refs.line.style.width = `${width}px`
                    this.$refs.line.style.left = `${left-left2}px`
                })
            }
        }
    }
</script>

<style lang="scss" scoped type="text/scss">
    .tabs-nav {
        display: flex;
        height:40px;
        justify-content: flex-start;
        border-bottom: 1px solid #5C8DF6;
        position:relative;
        > .slot-wrapper{
            margin-left: auto;
            display: flex;
            align-items: center;
            padding-right: 20px;
            flex-wrap: nowrap;
            align-items: center;
        }
        > .line{
            position: absolute;
            /*width:100px;*/
            height: 2px;
            background-color: #5C8DF6;
            bottom:0px;
            transition: all 350ms;
        }
    }

</style>