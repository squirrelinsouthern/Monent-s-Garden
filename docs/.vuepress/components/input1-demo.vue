<template>
    <div>
        <m-input placeholder="请在此输入"></m-input>
        <m-input placeholder="不可更改" :no-change="true"></m-input>
        <m-input placeholder="禁止输入" :stop-use="true"></m-input>
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