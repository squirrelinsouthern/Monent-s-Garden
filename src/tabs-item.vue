<template>
    <div class="tabs-item" :class="activeStyle" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoTabsItem',
        //tabs组件中用provide选项提供了eventBus，其他子孙组件需要用inject注入eventBus
        inject: ['eventBus'],
        data(){
            return {
                //当前tab是否是active状态
                active:false
            }
        },
        props:{
            //是否禁用该tab选项（会呈现灰色不可点击状态）
            disabled:{type:Boolean, default:false},
            //该tab的名字
            name:{type:String|Number, required:true}
        },
        computed:{
            activeStyle(){
                return {
                    //this.active为true时，就应用active为class
                    active:this.active,
                    disabled:this.disabled
                }
            }
        },
        created(){
            // 监听update:selected事件
            this.watchSelect()
        },
        methods:{
            // 触发update:selected事件
            xxx(){
                if(this.disabled){return}
                this.eventBus.$emit('update:selected',this.name,this);//精髓啊
            },
            watchSelect(){
                this.eventBus.$on('update:selected',(value)=>{
                    //当name就是当前tab的name时，设置这个tab为active状态
                    if(this.name === value){
                        console.log(`${this.name}--choose`);
                        this.active = true
                    }else{
                        console.log(`${this.name}--nochoose`);
                        this.active = false
                    }
                })
            }

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
        color:#454b57;
        &.active{
            color: #5C8DF6;
        }
        &.disabled{
            color: gray;
            cursor: default;

        }
    }



</style>