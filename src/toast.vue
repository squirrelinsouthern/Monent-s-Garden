<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"MoToast"
    }
</script>

<style lang="scss" scoped type="text/scss">
    .toast{
        border-radius: 4px;
        background-color: rgba(23,34,59,0.7);
        color: white;
        position: fixed;
        top:0;
        left:50%;
        transform: translateX(-50%);
        transition-duration: 2s;
        padding: 8px 20px;
        font-size:15px;
        margin-top: 8px;

    }
</style>