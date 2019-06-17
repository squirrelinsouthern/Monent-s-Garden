<template>
    <div class="col" :class="colClass" :style="colStyle">
        <div style="border: 1px solid white;background-color: #75a0ff;">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    let validator = (value) => {
        let keys = Object.keys(value)
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
        phone: {type: Object, validator},
        ipad: {type: Object, validator},
        narrowPc: {type: Object, validator},
        pc: {type: Object, validator},
        widePc: {type: Object, validator}
    },
    data(){
        return{
            gutter:""
            // :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"改写
            // data只在created的时候取一次值
            // colStyle:{
            //     paddingLeft:this.gutter/2+'px',
            //         paddingRight:this.gutter/2+'px'
            // }
        }
    },
    computed:{
        colClass(){
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
                offset && `offset-${offset}`,
                ...phoneClass,
                ...ipadClass,
                ...narrowPcClass,
                ...pcClass,
                ...widePcClass
            ]
        },
        colStyle(){
            return{
                paddingLeft: this.gutter / 2 + 'px',
                paddingRight: this.gutter / 2+ 'px',
            }
        }
    }
}
</script>

<style scoped lang="scss" type="text/scss">
    .col{
        width: 50%;
        height: 30px;
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

    @media (max-width:576px) {
        $class: col-phone-;
        @for $n from 1 through 24 {
            .#{$class}#{$n} {
                width: ( $n / 24 ) * 100%;
            }
        }
        $class: offset-phone-;
        @for $n from 1 through 24 {
            .#{$class}#{$n} {
                width: ( $n / 24 ) * 100%;
            }
        }
    }
    @media (min-width:577px) and (max-width:768px){
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
    @media (min-width:769px) and (max-width:992px){
        $class: col-narrow-pc-;
        @for $n from 1 through 24 {
            .#{$class}#{$n} {
                width: ( $n / 24 ) * 100%;
            }
        }
        $class: offset-narrow-pc-;
        @for $n from 1 through 24 {
            .#{$class}#{$n} {
                width: ( $n / 24 ) * 100%;
            }
        }
    }
    @media (min-width:993px) and (max-width:1200px){
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