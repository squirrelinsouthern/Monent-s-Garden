<template>
    <div>
        <m-input placeholder="change事件" @input="inputChange"></m-input>
        <m-input placeholder="你可以输入改变我" v-model="message"></m-input>
        <span>{{message}}</span>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    import Icon from '../../../src/icon'

    export default {
        components:{
            'm-input': Input,
            'm-icon': Icon
        },
        data(){
            return{message:'你可以输入改变我'}
        },
        methods:{
            inputChange(ee){
                console.log(ee)
            }
        }
    }
</script>