---
title: Toast-消息弹出
sidebarDepth: 2
---

# Toast-消息弹出

## $toast基础用法
#### 预览
<toast1-demo></toast1-demo>
```html{1}
<m-button @click="$toast('天气太热，不想画画')">上方弹出</m-button>
<m-button @click="$toast('坐等快递，无心画画',{position:'middle'})">中间弹出</m-button>
<m-button @click="$toast('明天暴雨，不能画画',{position:'bottom'})">下面弹出</m-button>
```
## 设置关闭按钮
#### 预览
<toast2-demo></toast2-demo>
```html{1}
<m-button @click="sendMessage1">上方弹出</m-button>
<m-button @click="sendMessage2">中间弹出</m-button>
<m-button @click="sendMessage3">下面弹出</m-button>
methods:{
    sendMessage(position) {
        this.$toast('不许在我的池塘里，洗笔！！', {
            position:position,
            autoTime:4,
            closeButton:{
                text:'知道了',
                callback(toast){
                    console.log('用户说知道了')
                }
            }
        })
    },
    sendMessage1(){
        this.sendMessage('top')
    },
    sendMessage2(){
        this.sendMessage('middle')
    },
    sendMessage3(){
        this.sendMessage('bottom')
    }
}
```
## 支持HTML
#### 预览
<toast3-demo></toast3-demo>
```html{1}
<m-button @click="supportHTML">点我试下</m-button>
methods: {
    supportHTML() {
        this.$toast(`<strong style="color: yellow">欢迎参观！</strong>`, {
            enableHTML: true,
            position: 'middle',
            closeButton: {
                text: '好dei',
                callback(toast) {
                    console.log('用户说知道了')
                }
            }
        })
    }
}
```

