<template>
    <svg class="m-icon">
        <use :xlink:href="`#m-${icon}`"></use>
    </svg>
</template>

<script>
    import './svg.js'
    export default {
        name:"Mo-icon",
        props:['icon']
    }
</script>

<style lang="scss" scoped type="text/scss">
    .m-icon {
        width: 1.2em;
        height: 1.2em;
        fill:white;
    }
</style>