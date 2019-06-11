<template>
    <div class="m-button-group">
       <slot></slot>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .m-button-group{
        display: inline-flex;
        vertical-align: top;
    }
    .m-button-group > .m-button{
        border-radius: 0px;
    }
    .m-button{
        margin-left: -1px;
    }
    .m-button:hover{
        z-index: 1;
    }
    .m-button:first-child{
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .m-button:last-child{
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }




</style>