<template>
    <div class="tabs-pane" :class="{activeStyle:active}" v-if="active">
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
            this.eventBus.$on('update:selected',(value)=>{
                if(this.name === value){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        }

    }
</script>

<style lang="scss" scoped type="scss/css">
    .tabs-pane{

    }
    .activeStyle{
        background-color: #2ab3e6;
    }
</style>