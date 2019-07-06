<template>
    <div>
        <m-button>默认样式</m-button>
        <m-button icon="aixin">icon在左</m-button>
        <m-button icon="aixin" where-icon="right">icon在右</m-button>
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