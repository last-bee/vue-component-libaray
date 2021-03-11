<description>
### CSS使用的是scss <img src="https://www.sass.hk/images/sass.png" width="30" style="display: inline-block">
`sass`是成熟、稳定、强大的CSS预处理器，而`scss`是`sass3`版本当中引入的新语法特性，完全兼容CSS3的同时继承了`sass`强大的动态功能。
[传送门](https://www.sass.hk/docs/)
#### CSS注释的写法
``` css
/* footer */
.footer {
  font-size: 20px;
  color: #ddd;
}
/* end footer */
/* home-main 主体 */
.home-main {
  width: 100%;
  height: 100%;
}
/* end home-main */
```
**注意：css的主要布局模块需要这样写，比较简单的布局如一个标签p只是展示一句话，就不用这样写。**
#### 公共css的提取
##### base.scss
##### var.scss
```
@charset "UTF-8";
$color-theme : #f37836;
$black: #000;
$white: #fff;
$red: #f44;
```
##### mixin.scss(比较重要)
```
/** 背景图适配 **/
@mixin bg-image($url){
  background-image: url($url + "@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
    background-image: url($url + "@3x.png");
  }
}
```
##### reset.scss
```
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
```
#### scss引用的方式
```
@import '~@/css/var.scss';
@import '~@/css/mixin.scss';
```
</description>
