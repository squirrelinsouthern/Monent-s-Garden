<template>
    <button class="m-button" :class="{[`icon-${whereIcon}`]:true}">
        <svg class="icon" v-if="icon">
            <use :xlink:href="`#m-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>

<script>
    export default {
        props:['icon','whereIcon']
    }
</script>

<style>
    .icon {
        width: 1.2em;
        height: 1.2em;

        fill:var(--button-color-font);
    }

    .m-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1.5em;
        color: var(--button-color-font);
        border-radius: var(--border-radius);
        background-color: var(--button-bg);
        border: 1px solid transparent;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        margin-right: 8px;
        transition-duration: 0.4s;
    }
    .m-button:hover{
         box-shadow: var(--button-shadow);
     }
    .m-button:active{
         background:var(--button-bg-active);
     }
    .m-button:focus{
         outline: none;
     }

    .icon-left > .icon {order:-1;margin-right: .3em;}

    .icon-right > .icon {order:1;margin-left: .3em;}

</style>