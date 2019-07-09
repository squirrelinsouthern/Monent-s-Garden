<template>
    <div>
        <m-button @click="$toast('天气太热，不想画画')">上方弹出</m-button>
        <m-button @click="$toast('坐等快递，无心画画',{position:'middle'})">中间弹出</m-button>
        <m-button @click="$toast('明天暴雨，不能画画',{position:'bottom'})">下面弹出</m-button>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import Vue from 'vue'
    import Plugin from '../../../src/plugin'

    //通过Vue.use执行plugin里的install方法
    Vue.use(Plugin)

    export default {
        components:{'m-button': Button}
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
</style>