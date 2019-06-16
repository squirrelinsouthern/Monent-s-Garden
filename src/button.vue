<template>
    <button class="m-button hello" :class="{[`icon-${whereIcon}`]:true}" @click="$emit('change')">
        <m-icon class="icon" v-if="icon && !loading" :icon="icon" ></m-icon>
        <m-icon class="icon spin" v-if="loading" icon="loading" ></m-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        name:"Mo-button",
        components:{'m-icon':Icon},
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default:false
            },
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
    @keyframes spin {
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
    }
    .spin{
        animation: spin 1.2s infinite linear;
    }

    .m-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1.5em;
        color: var(--button-color-font);
        border-radius: var(--border-radius);
        background-color: var(--button-bg);
        border: 1px solid #2d6bb4;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        transition-duration: 0.4s;
    }
    .m-button:hover{
         box-shadow: var(--button-shadow);
         background: var(--button-bg-hover);
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