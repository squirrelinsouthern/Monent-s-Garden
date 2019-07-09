<template>
    <div class="tabs-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoTabsContent',
        inject: ['eventBus']
    }
</script>

<style lang="scss" scoped type="text/scss">
    .tabs-content{
        font-size: 16px;
        color: #6b778d;
        padding: 1em;
        background-color: rgb(227,234,251);
    }
</style>