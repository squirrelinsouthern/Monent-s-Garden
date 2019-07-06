<template>
    <div class="wrapper" >
        <input type="text" :placeholder="placeholder"  :disabled="stopUse" :readonly="noChange"
               :class="{error}"
               @change="$emit('change',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)">
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
        name:"Mo-input",
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
.wrapper{
    display: inline-block;
    ::placeholder{color: #cfD9ED;}
    >input{
        height: 32px;
        border: 1px solid #5C8DF6;
        border-radius: 4px;
        transition-duration: 0.5s;
        padding: 0 12px;
        font-size: 14px;
        color: #2d6bb4;

        &:hover{
            border-color: #5C8DF6;
        }
        &:focus{
            outline: none;
            box-shadow: 2px 2px 4px rgba(79, 100, 230, 0.5);
        }
        &[disabled]{
            border: none;
            background-color: rgb(161,186,244);
            color: rgb(227,234,251);
            cursor: not-allowed;
        }
        &[readonly]{
            cursor: not-allowed;
        }

    }
    .error{
        border-color: #f3628d;
        color:#f3628d;
        &:hover{
            border-color: #f3628d;
        }
        &:focus{
            outline: none;
            box-shadow: 2px 2px 4px rgba(204,59,98, 0.3);
        }

    }

    .tishi{
        display: block;
        padding-top: 2px;
        .m-icon{fill:#f3628d;width:12px;vertical-align: middle;}
        .errorMessage{color:#f3628d;vertical-align: middle;}
    }


}



</style>