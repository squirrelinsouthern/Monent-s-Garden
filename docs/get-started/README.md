---
title: 快速上手
---

## 特别提醒
* 使用该框架时，您需要使用border-box盒模型，否则会影响样式。CSS代码示例：

```css{1}
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### 引入全部组件
```js{1}
//main.js
import moent from 'monet-garden-ui'
import 'monet-garden-ui/dist/index.css'
Vue.use(monet-garden-ui)
```

### 按需引入部分组件
```js{1}
//main.js

import Vue from 'vue'

//只引入该框架的Button组件
import {Button} from 'monet-garden-ui'
import 'monet-garden-ui/dist/index.css'

new Vue({
  el: "#app",
  components: {
    //Button组件将以自定义标签 m-button 使用 
    "m-button": Button
  }
})
```
