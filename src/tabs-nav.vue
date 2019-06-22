<template>
    <div class="tabs-nav">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
    export default {
        name:'MoTabsNav',
        inject: ['eventBus'],
        created () {
            console.log('tab-->tab-nav')
            console.log(this.eventBus)
        }
    }
</script>

<style lang="scss" scoped type="scss/css">
    .tabs-nav{

    }

</style>