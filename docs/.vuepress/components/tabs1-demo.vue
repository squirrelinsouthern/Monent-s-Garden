<template>
    <div>
        <m-tabs :selected.sync="selectedTab" direction="tabDirection">
            <m-tabs-nav>
                <m-tabs-item name="lotus">《睡莲》</m-tabs-item>
                <m-tabs-item name="willow">《垂柳》</m-tabs-item>
                <m-tabs-item name="bridge">《日本桥》</m-tabs-item>
                <m-tabs-item name="season" disabled><m-icon icon="tishi" style="fill:grey"></m-icon>《四季睡莲》</m-tabs-item>
            </m-tabs-nav>
            <m-tabs-content >
                <m-tabs-pane name="lotus">1880年之后，莫奈与印象派的其他画家们疏远了，
                    他喜欢把水与空气和某种具有意境的情调结合起来，这样产生了《睡莲》组画,是他晚年最重要的一件作品。
                    <br>此后27年里，他几乎再也没有离开过这个主题。他在吉维尼造了一座小花园，住在里面作画。
                </m-tabs-pane>
                <m-tabs-pane name="willow">莫奈的《垂柳》创作于1918-1919年之间，是十幅“垂柳”系列之一，作品创作于莫奈吉弗尼的家中，
                    那里还有著名的睡莲池塘。画面具有强烈的情感色彩，高耸的柳树是唯一主角，翻滚的树叶就像闪闪发光的瀑布一样落下。
                    天空和周围的环境都消失了，只在右下角出现了睡莲池塘的一个小角落。
                    笔触仿佛充满激情的舞蹈，画面中出现丰富的色彩层次，翡翠绿、耀眼的金色和橙色的条纹，以及深蓝色和紫色的组合使构图充满了活力。
                    莫奈本打算在一战后将这些作品捐赠给法国，但未能成行。
                </m-tabs-pane>
                <m-tabs-pane name="bridge">油画《日本桥》又名《荷花池，幻彩玫瑰》是印象派画家莫奈1900年创作的作品。
                    油画《日本桥》作品尺寸为90x100厘米。现收藏于法国巴黎奥赛博物馆。
                </m-tabs-pane>
            </m-tabs-content>
        </m-tabs>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import Icon from '../../../src/icon'
    import Tabs from '../../../src/tabs/tabs'
    import TabsContent from '../../../src/tabs/tabs-content'
    import TabsNav from '../../../src/tabs/tabs-nav'
    import TabsItem from '../../../src/tabs/tabs-item'
    import TabsPane from '../../../src/tabs/tabs-pane'

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