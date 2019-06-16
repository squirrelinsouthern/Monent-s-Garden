<template>
    <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
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
        created () {
            console.log(console.log(1))
        },
        mounted () {
            console.log(console.log(2))
            console.log(this.$children)
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }

    var div = document.createElement('div') // created
    var childDiv = document.createElement('div') // child created
    div.appendChild(childDiv) // child mounted
    document.body.appendChild(div) // mounted
</script>
<style scoped lang="scss" type="text/scss">
    .row{
        display: flex;
    }
</style>