<template>
    <div class="tabs-item" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoTabsItem',
        inject: ['eventBus'],
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            name:{
                type:String|Number,
                required:true
            }
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name)//触发
            }
        },
        created(){
            this.eventBus.$on('update:selected',(value)=>{
                console.log(value)
            })
        }

    }
</script>

<style lang="scss" scoped type="scss/css">
    .tabs-item{

    }

</style>