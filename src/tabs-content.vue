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

<style lang="scss" scoped type="scss/css">
    .tabs-content{

    }
</style>