<template>
    <div>
        <m-button>默认样式</m-button>
        <m-button icon="aixin">icon在左</m-button>
        <m-button icon="aixin" where-icon="right">icon在右</m-button>
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