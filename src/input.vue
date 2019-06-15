<template>
    <div class="wrapper" >
        <input type="text" :placeholder="placeholder"  :disabled="stopUse" :readonly="noChange"
               :class="{error}">
        <div class="tishi" v-if="error">
            <m-icon icon="tishi"></m-icon>
            <span class="errorMessage">{{error}}</span>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Icon from './icon'
    Vue.component('m-icon',Icon);

    export default {
        props:{
            placeholder:{
                type:String
            },
            stopUse:{
               type:Boolean,
                default:false
            },
            noChange:{
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
    $height:32px;
    $border-color:#75a0ff;
    $font-size:14px;


.wrapper{
    display: inline-block;
    ::placeholder{color: #b1d3ff;}
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
        &:hover{
            border-color: #cc3b62;
        }
        &:focus{
            outline: none;
            box-shadow: 2px 2px 4px rgba(204,59,98, 0.3);
        }

    }

    .tishi{
        display: block;
        padding-top: 2px;
        .m-icon{fill:#cc3b62;width:12px;vertical-align: middle;}
        .errorMessage{color:#cc3b62;vertical-align: middle;}
    }


}



</style>