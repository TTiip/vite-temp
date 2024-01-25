<template>
  <div class="w-[100%]">
    <el-popover placement="bottom" width="340" :visible="showBox">
      <template #reference>
        <el-input v-model="inputValue" class="inputStyle" type="text" readonly placeholder="请选择月份" @click="showBox = true">
          <template #prefix>
            <el-icon><Calendar /></el-icon>
          </template>
          <template #suffix>
            <el-icon v-if="showClear" @click="resetMonth">
              <CircleClose />
            </el-icon>
          </template>
        </el-input>
      </template>
      <!-- 年份月份选择弹框 -->
      <template #default>
        <div>
          <div class="contentArea">
            <!-- header年份 -->
            <div style="display:flex;padding:0 0 10px 0;;border-bottom: 1px solid #e5e5e5;text-align:center">
              <div v-if="curIndex === DateList.length - 1" style="width: 15%;">
                <el-icon style="opacity:0.3;">
                  <DArrowLeft />
                </el-icon>
              </div>
              <div v-else style="width: 15%;" @click="reduceYear">
                <el-icon><DArrowLeft /></el-icon>
              </div>
              <div style="width: 70%;">
                {{ OneY }}
              </div>
              <div v-if="curIndex === 0" style="width: 15%;">
                <el-icon style="opacity:0.3;">
                  <DArrowRight />
                </el-icon>
              </div>
              <div v-else style="width: 15%;" @click="addYear">
                <el-icon><DArrowRight /></el-icon>
              </div>
            </div>
            <!-- 月份 -->
            <div class="conterList">
              <el-checkbox-group v-model="(optTime[curIndex] as any).queryTime" @change="onChange">
                <el-checkbox
                  v-for="(item, index) in (DateList[curIndex] as any).queryTime" :key="index"
                  :disabled="isDisabled[index]" class="onSelect onMonthlySelect"
                  :label="`${(DateList[curIndex] as any).TimeYear}-${(item <= 9) ? `0${item}` : item}`"
                >
                  {{ monthMap[item] }}
                </el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <!-- 按钮 -->
          <div class="buttonBox">
            <el-button size="small" type="primary" plain @click.stop="handleSubmit">
              确定
            </el-button>
            <el-button size="small" plain @click.stop="resetMonth">
              重置
            </el-button>
          </div>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
  import { Calendar, CircleClose, DArrowLeft, DArrowRight } from '@element-plus/icons-vue'

  const emits = defineEmits(['update:modelValue']); const DateList = ref([]) // 年份月份数组
  const optTime = ref([]) // 当前选中的结果数组
  const OneY: any = ref('') // 当前年份
  const curIndex = ref(0) // 当前年份下标值
  const optTimes = ref([]) // 点击月份时的所有选中结果
  const resultTimes = ref([]) // 点击“确定”按钮后的选择结果
  const showBox = ref(false) // 是否显示月份选择弹框
  const inputValue = ref('') // 输入框的绑定值
  const showClear = ref(false) // 是否显示输入框右边的“清空”小图标
  const monthMap: any = ref({ 1: '一月', 2: '二月', 3: '三月', 4: '四月', 5: '五月', 6: '六月', 7: '七月', 8: '八月', 9: '九月', 10: '十月', 11: '十一月', 12: '十二月' })
  const isDisabled = ref(Array.from({ length: 12 }).map(() => { return false }))

  // 获取近20年年份列表，倒序排列，最新一年在最前面
  const getDateList = () => {
    let Dates = new Date()
    let year = Dates.getFullYear()
    OneY.value = year
    let optDate = []
    for (let i = year - 3; i <= year; i++) {
      optDate.push(i)
    }
    return optDate.reverse()
  }
  // 初始化数据，获取前20年，然后循环 每一年里面都有12个月的 得到数组 opTime 和 DateList
  const init = () => {
    let _opt: any = []
    let _optTime: any = []
    let arr = new Array(12)
    let optDate = getDateList()
    optDate.map((item, index) => {
      // 月份选择时el-checkbox-group绑定的值
      _optTime[index] = {
        TimeYear: item,
        queryTime: []
      }
      // 给每一年份设置12个月份，el-checkbox初始化显示时使用
      _opt[index] = {
        TimeYear: item,
        queryTime: []
      }
      for (let i = 1; i <= arr.length; i++) {
        _opt[index].queryTime.push(i)
      }
    })
    optTime.value = _optTime
    DateList.value = _opt
  }
  init()
  // 确定
  const handleSubmit = () => {
    // 更新输入框的值
    inputValue.value = optTimes.value.join(',')
    // 根据输入框是否有值来判断清空图标是否渲染
    showClear.value = inputValue.value !== ''
    // 将点击“确定”按钮的选择结果保存起来（该值将在哪里使用：在点击弹框以外区域关闭弹框时使用，mounted中）
    resultTimes.value = optTimes.value
    // 关闭弹框
    showBox.value = false
    emits('update:modelValue', inputValue.value)
  }
  // 重置
  const resetMonth = () => {
    // 将年份重置到当前年份
    let Dates = new Date()
    let year = Dates.getFullYear()
    OneY.value = year
    // 将已选择的月份清空
    for (let i in optTime.value) {
      (optTime.value[i] as any).queryTime = []
    }
    // 将已选择的月份清空
    optTimes.value = []
    // 将输入框清空
    inputValue.value = ''
    // 根据输入框是否有值来判断清空图标是否渲染，此处必然不渲染
    showClear.value = false
    // 将点击“确定”按钮的选择结果清空
    resultTimes.value = []
    // 关闭月份选择弹框
    showBox.value = false
    emits('update:modelValue', inputValue.value)
    curIndex.value = 0
  }
  // 左上角年份减少
  const reduceYear = () => {
    // 如果已经是最后一年了，则年份不能再减少了
    if (curIndex.value === DateList.value.length - 1) { return }
    // 当前下标值+1，根据下标值获取年份值
    curIndex.value = curIndex.value + 1
    OneY.value = (DateList.value[curIndex.value] as any).TimeYear
    // 自定义禁用的checkBox
  }
  // 左上角年份增加
  const addYear = () => {
    // 如果已经是当前年份了，则年份不能再增加了
    if (curIndex.value === 0) { return }
    // 当前下标值-1，根据下标值获取年份值
    curIndex.value = curIndex.value - 1
    OneY.value = (DateList.value[curIndex.value] as any).TimeYear
  }
  // 选择日期
  const onChange = () => {
    // 遍历optTime中已选择的日期，将已选结果塞到optTimes数组中
    let _opt: any = optTime.value
    let arr: any = []
    for (let item in _opt) {
      if (_opt[item].queryTime.length > 0) {
        _opt[item].queryTime = _opt[item].queryTime.map((p: any) => {
          arr.push(p)
          return p
        })
      }
    }
    optTimes.value = arr
    // 更新输入框的值
    inputValue.value = optTimes.value.join(',')
    // 根据输入框是否有值来判断清空图标是否渲染
    showClear.value = inputValue.value !== ''
  }
</script>

<style scoped>
.inputStyle {
	width: 100%;
}

.clearIconStyle {
	display: none;
}

.inputStyle:hover .clearIconStyle {
	display: block;
}

.buttonBox {
	border-top: 1px solid #e5e5e5;
	padding: 4px 7px 0 7px;
	text-align: right;
}

.contentArea {
	width: 320px;
}

.conterList .onSelect {
	width: 60px !important;
	height: 36px;
	line-height: 36px;
	margin: 10px;
	text-align: center;
	border-radius: 20px;
}

.conterList .onSelect:hover {
	color: #409EFF;
}

/* :deep(.el-checkbox__input.is-checked+.el-checkbox__label) {
	color: #409EFF;
	width: 60px !important;
	height: 36px;
	line-height: 36px;
	text-align: center;
	border-radius: 20px;
	padding: 0;
} */

:deep(.el-checkbox__label) {
	padding: 0;
}

:deep(.el-checkbox__inner) {
	display: none;
}
</style>
