<template>
    <div class="tabs-nav">
        <slot></slot>
        <div class="slot-wrapper">
            <slot name="actions"></slot>
        </div>
        <div class="line" ref="line"></div>
    </div>
</template>

<script>
    export default {
        name:'MoTabsNav',
        inject: ['eventBus'],
        mounted () {
            this.eventBus.$on('update:selected',(itemName,item)=>{
                // console.log(itemName);
                // console.log(item.$el);
                // console.log(item.$el.getBoundingClientRect());
                let {width,height,left,top} =item.$el.getBoundingClientRect()
                console.log(left);
                this.$refs.line.style.width = `${width-40}px`
                this.$refs.line.style.left = `${left+20}px`

            })

        }
    }
</script>

<style lang="scss" scoped type="text/scss">
    .tabs-nav {
        display: flex;
        height:40px;
        justify-content: flex-start;
        /*align-items: center;*/
        border-bottom: 1px solid #75a0ff;
        position:relative;
        > .slot-wrapper{
            margin-left: auto;
            display: flex;
            align-items: center;
            padding-right: 20px;
        }
        > .line{
            position: absolute;
            /*width:100px;*/
            height: 2px;
            background-color: #75a0ff;
            bottom:0px;
            transition: all 350ms;
        }
    }



</style>