<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'MoTabsPane',
        inject: ['eventBus']

    }
</script>

<style lang="scss" scoped type="scss/css">
    .tabs-pane{

    }

</style>