<template>
    <button class="m-button" :class="{[`icon-${whereIcon}`]:true}">
        <m-icon class="icon" v-if="icon" :name="icon" ></m-icon>
        <m-icon class="icon loading" v-if="icon" name="Loading" ></m-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        // props:['icon','whereIcon']
        props:{
            icon:{},
            whereIcon:{
                type:String,
                default:'left',
                validator(value){
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>

<style scoped>
    @keyframes loading{
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
    }
    .loading{
        animation: loading 1s infinite linear;
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