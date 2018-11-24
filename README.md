# Gua ui 系列 - 学习代码

[![Build Status](https://travis-ci.org/guakun/gua-ui-demo.svg?branch=master)](https://travis-ci.org/guakun/gua-ui-demo)

代码打字员: 我

## 介绍

这是我在学习别人学习 Vue 过程中模仿做的一个 UI 框架, 希望你不要看到。

## 开始使用

1. 添加 CSS 样式

    使用本框架前， 请在 CSS 中开启 boder-box
    ```css
    *, *::before, *::after { box-sizing: border-box; }
    ```
    IE 8 及以上浏览器都支持此样式

    你还需设置默认颜色等变量 (后续会改为 SCSS 变量)

    ```css
    html {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
    }
    ```
    IE 15 及以上浏览器都支持此样式

2. 安装 guaUI

    ```
     npm i --save gua-test-guaui-1
    ```

3. 引入 guaUI

    ```javascript
    import { Button, ButtonGroup, Icon } from 'gua-test-guaui-1'
    import 'gua-test-guaui-1/dist/index.css'

    export default {
      name: 'app',
      components: {
        'gua-button': Button
      }
    }
    ```
4. 引入 svg symbols (现在你可以不做这件事啦啦啦)

    ```html
    <script src="//at.alicdn.com/t/font_923980_zf3382cn5h8.js"></script>
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

