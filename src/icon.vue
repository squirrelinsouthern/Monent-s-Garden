<template>
    <svg class="m-icon">
        <use :xlink:href="`#m-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        props:['name']
    }
</script>

<style>
    .m-icon {
        width: 1.2em;
        height: 1.2em;
        fill:var(--button-color-font);
    }
</style>