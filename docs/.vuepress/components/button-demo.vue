<!--<div class="box">-->
    <!--<m-button :loading="loading1" @change="loading1=!loading1">默认样式</m-button>-->
    <!--<m-button icon="aixin"  where-icon="left">默认样式</m-button>-->
    <!--<m-button icon="smile" :loading="loading3" @change="loading3=!loading3" where-icon="right">-->
    <!--默认样式-->
    <!--</m-button>-->
<!--</div>-->

    <!--<m-icon icon="carps"></m-icon>-->
    <!--<m-icon icon="loading"></m-icon>-->
    <!--<svg class="m-icon">-->
    <!--<use xlink:href="#m-carps"></use>-->
    <!--</svg>-->

<!--<div class="box">-->
    <!--<div id="test"></div>-->
    <!--<m-button-group>-->
        <!--<m-button icon="last">上一页</m-button>-->
        <!--<m-button>更多</m-button>-->
        <!--<m-button icon="next" where-icon="right">下一页</m-button>-->
    <!--</m-button-group>-->
<!--</div>-->

<template>
    <div>
        <m-button>默认样式</m-button>
        <m-button icon="aixin">icon在左</m-button>
        <m-button icon="aixin" where-icon="right">icon在右</m-button>
        <m-button icon="smile" :loading="true">loading状态</m-button>
        <m-button icon="smile" :loading="loading" @change="loading=!loading" where-icon="right">
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