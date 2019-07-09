<template>
    <div>
        <m-button-group>
            <m-button icon="last">上一页</m-button>
            <m-button>更多</m-button>
            <m-button icon="next" where-icon="right">下一页</m-button>
        </m-button-group>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import ButtonGrpop from '../../../src/button-group'
    import Icon from '../../../src/icon'

    export default {
        components:{
            'm-button': Button,
            'm-button-group':ButtonGrpop,
            'm-icon': Icon
        },
        data(){
            return{loading:true}
        }
    }
</script>