import type {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineSeriesOption,
} from 'echarts/charts'
import type {
  // 组件类型的定义后缀都为 ComponentOption
  DatasetComponentOption,
  GridComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts/components'
import type {
  ComposeOption,
} from 'echarts/core'
import {
  BarChart,
  LineChart,
} from 'echarts/charts'
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  // 数据集组件
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
} from 'echarts/components'
import * as echarts from 'echarts/core'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
])

export default defineComponent({
  name: 'echarts-components',
  setup () {
    const option: ECOption = {
      title: {
        text: '订单统计',
        textStyle: {
          color: '#909399',
        },
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['本月订单数', '本周订单数', '本月销售总额', '本周销售总额'],
        textStyle: {
          color: '#909399',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
        axisLine: {
          lineStyle: {
            color: '#909399',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#909399',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#909399',
          },
        },
      },
      series: [
        {
          name: '本月订单数',
          type: 'line',
          smooth: true,
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '本周订单数',
          type: 'line',
          smooth: true,
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '本月销售总额',
          type: 'line',
          smooth: true,
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: '本周销售总额',
          type: 'line',
          smooth: true,
          data: [320, 332, 301, 334, 390, 330, 320],
        },
      ],
    }
    onMounted(() => {
      const myChart = echarts.init(document.getElementById('main'))
      myChart && myChart.setOption(option)
    })
    return () => (
      <div id="main" class="w-100% h-100%"></div>
    )
  },
})
