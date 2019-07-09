<template>
    <div>
        <m-row :gutter="8">
            <m-col :span="12" :ipad="{span:8}" :narrow-pc="{span:16}">
                <div class="demoCol1">响应式</div>
            </m-col>
            <m-col :span="12" :ipad="{span:16}" :narrow-pc="{span:8}">
                <div class="demoCol2">响应式</div>
            </m-col>
        </m-row>
    </div>
</template>

<script>
    import Row from '../../../src/grid/row'
    import Col from '../../../src/grid/col'

    export default {
        components:{
            'm-row': Row,
            'm-col': Col
        }
    }

</script>
<style>
    .demoCol1 {
        height: 40px;
        border: 1px solid #f3628d;
        border-radius: 4px;
        background: #ffb7d1;
        color:#f3628d;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4px 0
    }
    .demoCol2 {
        height: 40px;
        border: 1px solid #5C8DF6;
        border-radius: 4px;
        background: #b1d3ff;
        color:#5C8DF6;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4px 0
    }
</style>