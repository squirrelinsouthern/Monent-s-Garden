<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'mo-row',
        props:{
            gutter:{
                type:Number
            }
        },
        computed:{
          rowStyle(){
              let gutter=this.gutter
              return {marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}
          }
        },
        mounted () {
            console.log(this.$children)
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
                console.log(vm.gutter)
            })
        }
    }

</script>
<style scoped lang="scss" type="text/scss">
    .row{
        display: flex;
    }
</style>