<template>
    <div>
        <m-input placeholder="检测" error="输入不正确"></m-input>
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