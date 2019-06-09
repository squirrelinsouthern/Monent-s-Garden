<template>
    <button class="mo-button">默认样式</button>
</template>

<script>
    export default {

    }
</script>

<style>
    .mo-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 2em;
        color: var(--button-color-font);
        border-radius: var(--border-radius);
        background-color: var(--button-bg);
        border: 1px solid transparent;
        transition-duration: 0.4s;
        cursor: pointer;
    }
    .mo-button:hover{
         box-shadow: var(--button-shadow);
     }
    .mo-button:active{
         background:var(--button-bg-active);
     }
    .mo-button:focus{
         outline: none;
     }

</style>