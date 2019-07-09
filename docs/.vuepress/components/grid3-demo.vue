<template>
    <div>
        <m-row>
            <m-col :span="2"><div class="demoCol1">2</div></m-col>
            <m-col :span="8" :offset="2"><div class="demoCol2">8</div></m-col>
            <m-col :span="2" :offset="4"><div class="demoCol1">2</div></m-col>
            <m-col :span="6"><div class="demoCol2">6</div></m-col>
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