<template>
    <div class="wrapper" >
        <input type="text" :value="content" :disabled="stopuse" :readonly="nochange"
               :class="{error:error}">
        <box class="tishi" v-if="error">
            <m-icon icon="tishi"></m-icon>
            <span>{{error}}</span>
        </box>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Icon from './icon'
    Vue.component('m-icon',Icon)

    export default {
        props:{
            content:{
                type:String
            },
            stopuse:{
               type:Boolean,
                default:false
            },
            nochange:{
                type:Boolean,
                default:false
            },
            error:{
                type:String
            }
        }

    }
</script>

<style lang="scss" scoped type="text/scss">
    /*--button-height: 36px;*/
    /*--font-size: 14px;*/
    /*--border-radius: 4px;*/
    /*--button-color-font: white;*/
    /*--button-bg: #5C8DF6;*/
    /*--button-bg-active: #507BD8;*/
    /*--button-bg-hover: #75a0ff;*/
    /*--button-shadow: 2px 2px 4px rgba(79, 100, 230, 0.5);*/
    $height:32px;
    $border-color:#75a0ff;
    $font-size:14px;

.wrapper{
    display: inline-block;
    >input{
        height: 32px;
        border: 1px solid $border-color;
        border-radius: 4px;
        transition-duration: 0.5s;
        padding: 0 12px;
        font-size: $font-size;
        color: #2d6bb4;
        &:hover{
            border-color: #2d6bb4;
        }
        &:focus{
            outline: none;
            box-shadow: 2px 2px 4px rgba(79, 100, 230, 0.5);
        }
        &[disabled]{
            border-color: #75a0ff;
            background-color: #8cacd8;
            color: #d8ecff;
            cursor: not-allowed;
        }
        &[readonly]{
            cursor: not-allowed;
        }

    }
    .error{
        border-color: #cc3b62;
        color:#cc3b62;
    }
    .tishi{
        display: block;
        padding-top: 2px;
        .m-icon{fill:#cc3b62;vertical-align: middle;}
        span{color:#cc3b62;vertical-align: middle;}
    }


}



</style>