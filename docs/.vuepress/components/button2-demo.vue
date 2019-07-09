<template>
    <div>
        <m-button icon="smile" :loading="true">loading状态</m-button>
        <m-button icon="smile" :loading="loading" @click="loading=!loading" where-icon="right">
            点击切换icon
        </m-button>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import Icon from '../../../src/icon'

    export default {
        components:{
            'm-button': Button,
            'm-icon': Icon
        },
        data(){
            return{loading:true}
        }
    }
</script>