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
                console.log(1);
                this.eventBus.$emit('update:selected',this.name);//精髓啊
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

<style lang="scss" scoped type="scss/css">
    .tabs-item{
        padding: 0.6em 3em;
        border: 1px solid #2ab3e6;
        flex-shrink: 0;
    }
    .activeStyle{
        background-color: #2ab3e6;
    }

</style>