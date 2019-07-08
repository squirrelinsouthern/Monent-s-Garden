<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    //import vue主要是因为在该组件写事件中心时需要用到Vue
    import Vue from 'vue'


    export default {
        name:'MoTabs',

        props:{
            //当前选中的tab
            selected:{
              type:String,
              required:true
            },
            //选择当前tab的方向，效果没做
            tabDirection:{
                type:String,
                default:'horizontal',
                validate(value){
                    return ['horizontal','vertical'].indexOf(value) >= 0
                }
            }
        },
        data(){
            /*用data做‘中转’做一个eventBus，传递到provide选项中，自己便可访问到自己组件中创建的事件中心
            log出this即可在vue实例中找到eventBus该选项
            注意：log出来的有$开头的属性是我们用的，_开头的属性是vue作者自己用*/
            return {
                eventBus:new Vue()
            }
        },
        /*只要在provide中创建了事件中心，那么该组件的所有子孙都可以访问到eventBus，provide是唯一一个跨组件都可以调用
        所有子孙）的属性，其他的属性都是只能提供给子组件，不提供给孙子。只有provide是任何后代都可以访问的*/
        provide (){
            /* new Vue()是一个eventBus，就是一个vue实例。
               eventBus: new Vue()
               但是通过↑方式写的话，在自己组件中无法通过this获取到eventBus，所以我们需要用data选项做中转 */
            return { eventBus:this.eventBus }
        },
        //在mounted阶段该组件的所有子组件已经完成挂载
        mounted(){
            /* 如果用户没有在tabs组件内传入任何子组件，那么this.$children.length就是0,
            因为像div这些子元素并不会被this.$children检测到*/
            this.$children.forEach((vm)=>{
                // 如果子组件的name是v-tabs-nav，说明该组件是tabs-nav组件
                if(vm.$options.name==='MoTabsNav'){
                    vm.$children.forEach((item)=>{
                        if(item.$options.name==='MoTabsItem' && item.name===this.selected){
                            // 触发事件，传入当前active的name和tab组件实例
                            this.eventBus.$emit('update:selected',this.selected,item)
                        }
                    })
                }
            })

        }
    }
</script>

<style lang="scss" scoped type="text/scss">

</style>