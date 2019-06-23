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
            this.eventBus.$emit('update:selected',this.selected)
        }
    }
</script>

<style lang="scss" scoped type="scss/css">
    .tabs{

    }

</style>