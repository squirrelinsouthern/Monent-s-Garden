<template>
    <div class="col" :class="colClass" :style="colStyle">
        <div style="border: 1px solid white;background-color: #75a0ff;">
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
        },
        phone:{
            type:Object,
            validator(obj){
                let keys = Object.keys(obj)
                let valid = true
                keys.forEach((key)=>{
                    if(!['span','offset'].includes(key)){
                        valid = false
                    }
                })
             return valid
            }
        }
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
        colStyle(){
            return{
                paddingLeft: this.gutter / 2 + 'px',
                paddingRight: this.gutter / 2+ 'px',
            }
        },
        colClass(){
            let {span, offset} = this
            return [span &&`col-${span}`,offset &&`offset-${offset}`]
        }
    }
}
</script>

<style scoped lang="scss" type="text/scss">
    .col{
        /*background-color: #d8ecff;*/
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
    


</style>