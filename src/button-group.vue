<template>
    <div class="m-button-group">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"Mo-buttonGroup",
        mounted (){
            for(let i of this.$el.children)
            if( i.nodeName !== 'BUTTON'){
                console.warn(`亲,你用了<${i.nodeName.toLocaleLowerCase()}>,不要添加<m-button>以外的元素`)
                }
        }
    }
</script>

<style lang="scss" scoped type="text/scss">
    .m-button-group {
        display: inline-flex;
        vertical-align: top;
        > .m-button {
            border-radius: 0;
            &:hover{z-index: 1}
            &:not(:first-child){margin-left: -1px;}
            &:first-child{ border-top-left-radius: 4px;border-bottom-left-radius: 4px;}
            &:last-child{ border-top-right-radius: 4px;border-bottom-right-radius: 4px;}
        }
    }
</style>