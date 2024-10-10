import { ElStep, ElSteps } from 'element-plus'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'steps',
  setup () {
    return () => (
      <div>
        <ElSteps active={1} align-center>
          <ElStep title="填写商品信息" />
          <ElStep title="填写商品促销" />
          <ElStep title="填写商品属性" />
          <ElStep title="选择商品关联" />
        </ElSteps>
      </div>
    )
  },
})
