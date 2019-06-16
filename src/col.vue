<template>
    <div class="col" :class="[span &&`col-${span}`,offset &&`offset-${offset}`]"
         :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <div style="border: 1px solid #2d6bb4">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'mo-col',
    props:{
        span:{
            type:Number
        },
        offset:{
            type:Number
        }
    },
    data(){
        return{
            gutter:0
        }
    },
    created(){ console.log(3)},
    mounted(){ console.log(4)}
}
</script>

<style scoped lang="scss" type="text/scss">
    .col{
        background-color: #d8ecff;
        width: 50%;
        height: 40px;
    }
    $class: col-;
    @for $n from 1 through 24 {
        .#{$class}#{$n} {
            width: ( $n / 24 ) * 100%;
        }
    }
    $class: offset-;
    @for $n from 1 through 24 {
        .#{$class}#{$n} {
            margin-left: ( $n / 24 ) * 100%;

        }
    }


</style>