<template>
    <div class="tabs-pane" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoTabsPane',
        inject: ['eventBus'],
        data(){
            return {
                active:false
            }
        },
        props:{
            name:{type:String|Number, required:true}
        },
        created(){
            this.watchSelect()
        },
        methods:{
            /* active状态默认为false，监听下面的事件，当发现传入的name和该组件的name一致，
            说明当前active的tab和这个pane匹配，那么就设置active为true，并只显示active状态的pane */
            watchSelect(){
                this.eventBus.$on('update:selected',(value)=>{
                    this.active = name === this.name
                })
            }
        }

    }
</script>

<style lang="scss" scoped type="text/scss">

</style>