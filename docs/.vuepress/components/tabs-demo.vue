<template>
    <div>
        <m-tabs :selected.sync="selectedTab" direction="tabDirection">
            <m-tabs-nav>
                <m-tabs-item name="lotus"><m-icon icon="lotus"></m-icon>《睡莲》</m-tabs-item>
                <m-tabs-item name="willow"><m-icon icon="fan"></m-icon>《垂柳》</m-tabs-item>
                <m-tabs-item name="bridge"><m-icon icon="penjing"></m-icon>《日本桥》</m-tabs-item>
                <m-tabs-item name="season" disabled><m-icon icon="tishi" style="fill:grey"></m-icon>《四季睡莲》</m-tabs-item>
            </m-tabs-nav>
            <m-tabs-content >
                <m-tabs-pane name="lotus">莫奈把整个身心都投在这个池塘和他的睡莲上面了，睡莲成了他晚年描绘的主题。此后27 年里，他几乎再也没有离开过这个主题。</m-tabs-pane>
                <m-tabs-pane name="willow">静静的看他的作品，似乎能听见清晨流水轻轻凑响的曲子，云轻轻地与睡莲对话 ， 感受微风轻拂垂柳而来，日落余晖的稍众即逝， 就像是在看莫奈的一生，经历繁华灿烂，经历幻灭消逝。</m-tabs-pane>
                <m-tabs-pane name="bridge">莫奈摈弃了传统的按几何图形栽种和修剪花木的法国花园模式，不去刻意修剪他的花草树木，对其天然生长的形态十分尊重，任其争自由生长。</m-tabs-pane>
            </m-tabs-content>
        </m-tabs>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import Icon from '../../../src/icon'
    import Tabs from '../../../src/tabs'
    import TabsContent from '../../../src/tabs-content'
    import TabsNav from '../../../src/tabs-nav'
    import TabsItem from '../../../src/tabs-item'
    import TabsPane from '../../../src/tabs-pane'

    export default {
        components:{
            'm-button': Button,
            'm-icon': Icon,
            'm-tabs': Tabs,
            'm-tabs-content': TabsContent,
            'm-tabs-nav': TabsNav,
            'm-tabs-item': TabsItem,
            'm-tabs-pane': TabsPane
        },
        data(){
            return{selectedTab:'lotus'}
        }

    }



</script>

<style>

</style>