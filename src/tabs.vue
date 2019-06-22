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
            direction:{
                type:String,
                default:'horizontal',
                validate(value){
                    return ['horizontal','vertical'].indexOf(value) >=0
                }
            }
        },
        data(){
            return { eventBus:new Vue() }
        },
        provide (){
            return { eventBus:this.eventBus }
        },
        created(){
            console.log(this);//此刻的Tab实例上有eventBus了
            // this.$emit('update:selected', 'xxx')
        }
    }
</script>

<style lang="scss" scoped type="scss/css">
    .tabs{

    }

</style>