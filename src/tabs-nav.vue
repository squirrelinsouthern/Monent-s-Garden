<template>
    <div class="tabs-nav">
        <slot></slot>
        <div class="slot-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'MoTabsNav',
        inject: ['eventBus'],
        created () {

        }
    }
</script>

<style lang="scss" scoped type="scss/css">
    .tabs-nav{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid #ff6768;
    }
    .slot-wrapper{
        margin-left: auto;
    }

</style>