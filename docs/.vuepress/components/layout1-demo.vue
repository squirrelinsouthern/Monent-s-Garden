<template>
    <m-layout>
        <m-header>header</m-header>
        <m-content>content</m-content>
        <m-footer>footer</m-footer>
    </m-layout>
</template>
<script>
    import Layout from '../../../src/layout/layout'
    import Header from '../../../src/layout/header'
    import Content from '../../../src/layout/content'
    import Footer from '../../../src/layout/footer'

    export default {
        components:{
            'm-layout': Layout,
            'm-header': Header,
            'm-content': Content,
            'm-footer': Footer
        }
    }
</script>
<style>
.header{
    height: 50px;
}
.footer{
    height: 50px;
}

.content{
    height: 100px;
}
</style>