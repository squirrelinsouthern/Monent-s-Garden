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

<style>
    .m-icon {
        width: 1.2em;
        height: 1.2em;
        fill:var(--button-color-font);
    }
</style>