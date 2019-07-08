<template>
      <!--原始写法 :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}"-->
    <div class="row" :style="rowStyle" :class="textAlign">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'mo-row',
        props:{
            gutter:{
                type:Number
            },
            align:{
                type:String,
                //justify-content:flex-start|center|flex-end
                validate(value){
                    return ['left','center','right'].indexOf(value) >= 0
                }
            }
        },
        computed:{
          rowStyle(){
              let gutter=this.gutter
              return { marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px' }
          },
          //设置内容文字对齐方式 返回[align-left,align-center,align-right]
          textAlign(){
              let {align} = this
              return [ align && `align-${align}`]
          }
        },

        //created和mounted区别
        // var Div = document.createElement('div')-----created 组件创建，但没放到页面里
        // document.body.appendChild(Div)---mounted
        // 父row created --- 子col created ---- 子col mounted --- 父row mounted
        mounted () {
            //mounted后，该组件的所有子元素也挂载完毕，可以通过this.$children 获取他们
            //vm为每个子组件，把row.gutter值传到每个子组件,不建议用props，而用data获取
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }

</script>
<style scoped lang="scss" type="text/scss">
    .row{
        display: flex;
        flex-wrap: wrap;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-center{
            justify-content: center;
        }
        &.align-right{
            justify-content: flex-end;
        }
    }
</style>