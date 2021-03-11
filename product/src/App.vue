<template>
  <div id="app">
    <x-nav></x-nav>
    <div class="router-view">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<style scoped lang="scss">
#app{
  .router-view{
    float: right;
    width: 75%;
    padding: 10px 10px 10px 10px;
    box-sizing: border-box;
  }
}
</style>
<style lang="scss">
*{
  padding:0px;
  margin:0px;
  box-sizing: border-box;
}
ul, li {
  list-style-type: none;
}
html{
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
body{
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  color: $text-color;
}
img{
  display: block;
  border: none;
}
input,button,select,textarea{
  outline: none;
  color: $text-color;
  font-family: inherit;
}
.c-ellipsis{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.c-noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  -khtml-user-select: none;
  user-select: none; /* Non-prefixed version, currently not supported by any browser */
}
.c-cf {
  *zoom:1
}
.c-cf:after,.c-cf:before {
  display: table;
  content: "";
  line-height: 0
}
.c-cf:after {
  clear: both
}
</style>
