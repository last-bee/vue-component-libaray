<description>
### 图表
项目通过集成[F2](http://antv.alipay.com/zh-cn/f2/3.x/index.html)来实现图表功能。
#### 按需载入
由于F2体积较大，所以请按需载入部分库，具体请看[F2按需载入](https://www.yuque.com/antv/f2/require-on-demand)。
</description>

```html
<template>
  <div>
    <canvas id="myChart" width="400" height="260"></canvas>
  </div>
</template>
<script>
import F2 from '@antv/f2/lib/core' // 引入 核心包
import '@antv/f2/lib/geom/interval' // 引入 interval 几何标记
import Animation from '@antv/f2/lib/animation/detail' // 引入 动画
export default {
  mounted: function () {
    F2.Chart.plugins.register(Animation) // 注册动画

    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ]

    // Step 1: 创建 Chart 对象
    const chart = new F2.Chart({
      id: 'myChart',
      pixelRatio: window.devicePixelRatio // 指定分辨率
    })

    // Step 2: 载入数据源
    chart.source(data)

    // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart.interval().position('genre*sold').color('genre')

    // Step 4: 渲染图表
    chart.render()
  }
}
</script>
```
