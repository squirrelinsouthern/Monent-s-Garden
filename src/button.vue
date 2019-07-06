<template>
    <button class="m-button hello" :class="{[`icon-${whereIcon}`]:true}" @click="$emit('click')">
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
        name:"MoButton",
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

<style lang="scss" scoped type="text/scss">
    @keyframes spin {
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
    }
    .spin{
        animation: spin 1.2s infinite linear;
    }

    .m-button{
        font-size: 14px;
        height: 36px;
        padding: 0 1.5em;
        color: white;
        border-radius: 4px;
        background-color:  #5C8DF6;
        border: 1px solid #dbe3f3;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        transition-duration: 0.4s;
    }
    .m-button:hover{
         box-shadow: 2px 2px 4px rgba(79, 100, 230, 0.5);
         background: #75a0ff;
     }
    .m-button:active{
         background:#507BD8;
     }
    .m-button:focus{
         outline: none;
     }

    .icon-left > .icon {order:-1;margin-right: .3em; fill:white;}

    .icon-right > .icon {order:1;margin-left: .3em; fill:white;}

</style>