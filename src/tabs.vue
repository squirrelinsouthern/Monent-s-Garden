<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name:'MoTabs',
        // inject:['eventBus'],
        props:{
            selected:{
              type:String,
              required:true
            },
            tabDirection:{
                type:String,
                default:'horizontal',
                validate(value){
                    return ['horizontal','vertical'].indexOf(value) >= 0
                }
            }
        },
        data(){
            return { eventBus:new Vue() }
        },
        provide (){
            return { eventBus:this.eventBus }
        },
        mounted(){
            this.$children.forEach((vm)=>{
                if(vm.$options.name==='MoTabsNav'){
                    vm.$children.forEach((item)=>{
                        if(item.$options.name==='MoTabsItem' && item.name===this.selected){

                            this.eventBus.$emit('update:selected',this.selected,item)
                        }
                    })
                }
            })

        }
    }
</script>

<style lang="scss" scoped type="text/scss">
    .tabs{

    }

</style>