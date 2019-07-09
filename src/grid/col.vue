<template>
    <!--:style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"原始写法-->
    <div class="col" :class="colClass" :style="paddingStyle">
        <slot></slot>
    </div>
</template>

<script>
    //用来验证ipad narrowPc pc widePc
    //validator验证传进来的对象的key必须是span\offset
    //验证[1,2,3]子集[1,2][2,3]
    let validator = (value) => {
        let keys = Object.keys(value)
        //先设置验证结果为true
        let valid = true
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }

    export default {
        name:'mo-col',
        props:{
            span:{
                type:Number
            },
            offset:{
                type:Number
            },
            //ES6,如果key和value值一样，直接写一个就可以
            phone: {type: Object, validator},
            ipad: {type: Object, validator},
            narrowPc: {type: Object, validator},
            pc: {type: Object, validator},
            widePc: {type: Object, validator}
        },
        data(){
            return{
                gutter:""
            }
        },
        computed:{
            colClass(){
                //在this中查找需要的属性
                let {span, offset, phone, ipad, narrowPc, pc, widePc} = this
                let phoneClass = []
                let ipadClass = []
                let narrowPcClass = []
                let pcClass = []
                let widePcClass = []

                if (phone) {
                    phoneClass = [`col-phone-${phone.span}`]
                }
                if (ipad){
                    ipadClass = [`col-ipad-${ipad.span}`]
                }
                if (narrowPc) {
                    narrowPcClass = [`col-narrowPc-${narrowPc.span}`]
                }
                if(pc){
                    pcClass = [`col-pc-${pc.span}`]
                }
                if(widePc){
                    widePcClass = [`col-widePc-${widePc.span}`]
                }

                return [
                    span &&` col-${span}`,
                    //短路运算符--如果没传offset的值就没有，如果有传，就用后面的
                    offset && `offset-${offset}`,
                    ...phoneClass,
                    ...ipadClass,
                    ...narrowPcClass,
                    ...pcClass,
                    ...widePcClass
                ]
            },
            // data只在created的时候取一次值，data变computed也变，所以要写到computed里面
            // 要写成一个函数
            paddingStyle(){
                return{
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2+ 'px',
                }
            }
        }
    }
</script>

<style scoped lang="scss" type="text/scss">
    //默认的手机样式
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
    //iPad样式
    @media (min-width:577px){
        $class: col-ipad-;
        @for $n from 1 through 24 {
            .#{$class}#{$n} {
                width: ( $n / 24 ) * 100%;
            }
        }
        $class: offset-ipad-;
        @for $n from 1 through 24 {
            .#{$class}#{$n} {
                width: ( $n / 24 ) * 100%;
            }
        }
    }
    //narrow-pc样式
    @media (min-width:769px){
        $class: col-narrowPc-;
        @for $n from 1 through 24 {
            .#{$class}#{$n} {
                width: ( $n / 24 ) * 100%;
            }
        }
        $class: offset-narrowPc-;
        @for $n from 1 through 24 {
            .#{$class}#{$n} {
                width: ( $n / 24 ) * 100%;
            }
        }
    }
    //pc样式
    @media (min-width:993px){
        $class: col-pc-;
        @for $n from 1 through 24 {
            .#{$class}#{$n} {
                width: ( $n / 24 ) * 100%;
            }
        }
        $class: offset-pc-;
        @for $n from 1 through 24 {
            .#{$class}#{$n} {
                width: ( $n / 24 ) * 100%;
            }
        }
    }
    //wide-pc样式
    @media (min-width:1201px) {
        $class: col-wide-pc-;
        @for $n from 1 through 24 {
            .#{$class}#{$n} {
                width: ( $n / 24 ) * 100%;
            }
        }
        $class: offset-wide-pc-;
        @for $n from 1 through 24 {
            .#{$class}#{$n} {
                width: ( $n / 24 ) * 100%;
            }
        }
    }
    


</style>