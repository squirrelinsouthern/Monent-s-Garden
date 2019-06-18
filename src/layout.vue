<template>
    <div class="layout" :class="siderClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"MoLayout",
        data(){
            return {
                siderClass:{
                    hasSider:false
                }
            }
        },
        mounted(){
            this.$children.forEach((vm)=>{
                if(vm.$options.name==="MoSider"){
                    this.siderClass.hasSider = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped type="text/scss">
    .layout{
        flex-grow: 1;
        border: 1px solid orangered;
        display: flex;
        flex-direction: column;
    }
    .hasSider{
        flex-direction: row;
    }
</style>