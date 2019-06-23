<template>
    <div class="tabs-item" :class="{activeStyle:active}" @click="xxx">
        <slot></slot>

    </div>
</template>

<script>
    export default {
        name:'MoTabsItem',
        inject: ['eventBus'],
        data(){
            return {
                active:false
            }
        },
        props:{
            disabled:{type:Boolean, default:false},
            name:{type:String|Number, required:true}
        },
        methods:{
            activeStyle(){
                return {
                    active:this.active
                }
            },
            xxx(){
                this.eventBus.$emit('update:selected',this.name,this);//精髓啊
            }
        },
        created(){
            this.eventBus.$on('update:selected',(value)=>{
                if(this.name === value){
                     console.log(`${this.name}--chosss`);
                   this.active = true
                 }else{
                     console.log(`${this.name}--nochosss`);
                    this.active = false
                 }
            })
        }

    }
</script>

<style lang="scss" scoped type="text/scss">
    .tabs-item{
        padding: 0  20px;
        line-height: 40px;
        /*border: 1px solid blueviolet;*/
        flex-shrink: 0;
        cursor: pointer;
    }
    .activeStyle{
        color: #75a0ff;
    }


</style>