<template>
	<div class="w-[100%]">
		<el-popover placement="bottom" width="340" :visible="showBox">
			<template #reference>
				<el-input @click="showBox = true" class="inputStyle" v-model="inputValue" type="text" readonly placeholder="请选择月份">
					<template #prefix>
						<el-icon><Calendar /></el-icon>
					</template>
					<template #suffix>
						<el-icon v-if="showClear" @click="resetMonth"><CircleClose /></el-icon>
					</template>
				</el-input>
			</template>
			<!-- 年份月份选择弹框 -->
			<template #default>
				<div>
					<div class="contentArea">
						<!-- header年份 -->
						<div style="display:flex;padding:0 0 10px 0;;border-bottom: 1px solid #e5e5e5;text-align:center">
							<div v-if="curIndex == DateList.length - 1" style="width: 15%;">
								<el-icon style="opacity:0.3;"><DArrowLeft /></el-icon>
							</div>
							<div v-else @click="reduceYear" style="width: 15%;">
								<el-icon><DArrowLeft /></el-icon>
							</div>
							<div style="width: 70%;">{{ OneY }}</div>
							<div v-if="curIndex == 0" style="width: 15%;">
								<el-icon style="opacity:0.3;"><DArrowRight /></el-icon>
							</div>
							<div v-else @click="addYear" style="width: 15%;">
								<el-icon><DArrowRight /></el-icon>
							</div>
						</div>
						<!-- 月份 -->
						<div class="conterList">
							<el-checkbox-group v-model="optTime[curIndex].queryTime" @change="onChange">
								<el-checkbox :disabled="isDisabled[index]" class="onSelect onMonthlySelect"
									v-for="(item, index) in DateList[curIndex].queryTime" :key="index"
									:label="`${DateList[curIndex].TimeYear}-${(item <= 9) ? `0${item}` : item}`">
									{{ monthMap[item] }}
								</el-checkbox>
							</el-checkbox-group>
						</div>
					</div>
					<!-- 按钮 -->
					<div class="buttonBox">
						<el-button size="small" type="primary" plain @click.stop="handleSubmit">确定</el-button>
						<el-button size="small" plain @click.stop="resetMonth">重置</el-button>
					</div>
				</div>
			</template>
		</el-popover>
	</div>
</template>

<script>
import { Calendar, CircleClose, DArrowLeft, DArrowRight } from '@element-plus/icons-vue'

export default {
	name: "MultipleMonth",
	props: ['modelValue'],
	components: {
		Calendar,
		CircleClose,
		DArrowLeft,
		DArrowRight
	},
	data() {
		return {
			DateList: [], // 年份月份数组
			optTime: [], // 当前选中的结果数组
			OneY: '', // 当前年份
			curIndex: 0, // 当前年份下标值
			yearStart: 2002, // 当前开始年份
			yearEnd: 2021, // 当前结束年份
			optTimes: [], // 点击月份时的所有选中结果
			resultTimes: [], // 点击“确定”按钮后的选择结果
			showBox: false, // 是否显示月份选择弹框
			inputValue: '', // 输入框的绑定值
			showClear: false, // 是否显示输入框右边的“清空”小图标
			monthMap: { '1': '一月', '2': '二月', '3': '三月', '4': '四月', '5': '五月', '6': '六月', '7': '七月', '8': '八月', '9': '九月', '10': '十月', '11': '十一月', '12': '十二月' },
			selectList: [],//可选择的日期数据
			months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
			isDisabled: Array.from({ length: 12 }).map(() => { return false }),
		}
	},
	created() {
		this.init()
	},
	computed: {
		isAdd() {
			let Dates = new Date()
			return this.yearEnd === Dates.getFullYear()
		},
		isReduce() {
			let Dates = new Date()
			return this.yearEnd === Dates.getFullYear() - 11
		}
	},
	methods: {
		//将'一月/Jan'格式化为'01'格式
		changeMonthFomat(text) {
			let ret = Object.values(this.monthMap)
			var index = 0
			for (var i = 0; i < ret.length; i++) {
				if (text.trim() == ret[i]) {
					index = i
				}
			}
			return this.months[index]
		},
		// 初始化数据，获取前20年，然后循环 每一年里面都有12个月的 得到数组 opTime 和 DateList
		init() {
			let _opt = []
			let _optTime = []
			let arr = []
			arr = new Array(12)
			let optDate = this.getDateList()
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
			this.optTime = _optTime
			this.DateList = _opt
		},
		// 获取近20年年份列表，倒序排列，最新一年在最前面
		getDateList() {
			let Dates = new Date()
			let year = Dates.getFullYear()
			this.OneY = year
			let optDate = []
			for (let i = year - 20; i <= year; i++) {
				optDate.push(i)
			}
			return optDate.reverse()
		},
		// 确定
		handleSubmit() {
			// 更新输入框的值
			this.inputValue = this.optTimes.join(',')
			// 根据输入框是否有值来判断清空图标是否渲染
			this.showClear = this.inputValue == '' ? false : true
			// 将点击“确定”按钮的选择结果保存起来（该值将在哪里使用：在点击弹框以外区域关闭弹框时使用，mounted中）
			this.resultTimes = this.optTimes
			// 关闭弹框
			this.showBox = false
			this.$emit('update:modelValue', this.inputValue)
		},
		// 重置
		resetMonth() {
			// 将年份重置到当前年份
			let Dates = new Date()
			let year = Dates.getFullYear()
			this.OneY = year
			// 将已选择的月份清空
			for (let i in this.optTime) {
				this.optTime[i].queryTime = []
			}
			// 将已选择的月份清空
			this.optTimes = []
			// 将输入框清空
			this.inputValue = ''
			// 根据输入框是否有值来判断清空图标是否渲染，此处必然不渲染
			this.showClear = false
			// 将点击“确定”按钮的选择结果清空
			this.resultTimes = []
			// 关闭月份选择弹框
			this.showBox = false
			this.$emit('update:modelValue', this.inputValue)
			this.curIndex = 0
		},
		// 左上角年份减少
		reduceYear() {
			// 如果已经是最后一年了，则年份不能再减少了
			if (this.curIndex == this.DateList.length - 1) return
			// 当前下标值+1，根据下标值获取年份值
			this.curIndex = this.curIndex + 1
			this.OneY = this.DateList[this.curIndex].TimeYear
			//自定义禁用的checkBox
		},
		// 左上角年份增加
		addYear() {
			// 如果已经是当前年份了，则年份不能再增加了
			if (this.curIndex == 0) return
			// 当前下标值-1，根据下标值获取年份值
			this.curIndex = this.curIndex - 1
			this.OneY = this.DateList[this.curIndex].TimeYear
		},
		// 选择日期
		onChange() {
			const _this = this
			// 遍历optTime中已选择的日期，将已选结果塞到optTimes数组中
			let _opt = _this.optTime
			let arr = []
			for (let item in _opt) {
				if (_opt[item].queryTime.length > 0) {
					_opt[item].queryTime = _opt[item].queryTime.map(p => {
						arr.push(p)
						return p
					})
				}
			}
			this.optTimes = arr
			// 更新输入框的值
			this.inputValue = this.optTimes.join(',')
			// 根据输入框是否有值来判断清空图标是否渲染
			this.showClear = this.inputValue == '' ? false : true
		}
	}
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
