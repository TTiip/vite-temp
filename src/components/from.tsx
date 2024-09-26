import type { FormInstance } from 'element-plus'
import { ElButton, ElDatePicker, ElForm, ElFormItem, ElInput, ElOption, ElSelect } from 'element-plus'
import { ItemTypeEnum, type typeFormItem } from '~/types/form'

export default defineComponent({
  name: 'from',
  props: {
    model: {
      type: Object,
      required: true,
    },
    fromItemConfig: {
      type: Object,
      required: true,
    },
    inline: {
      type: Boolean,
      default: true,
    },
    rules: {
      type: Object,
      default: () => {},
    },
    labelWidth: {
      type: String,
      default: '100px',
    },
    optionText: {
      type: String,
    },
  },
  setup (props) {
    const {
      model,
      fromItemConfig,
      inline,
      rules,
      labelWidth,
      optionText,
    } = props

    const ruleFormRef = ref<FormInstance>()

    const onSubmit = async (formEl: FormInstance | undefined) => {
      if (!formEl) { return }
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!', fields)
        }
      })
    }

    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) { return }
      formEl.resetFields()
    }

    const renderElFormItem = (item: typeFormItem<keyof typeof model>) => {
      switch (item.type) {
        case ItemTypeEnum.Input:
          return (
            <ElInput v-model={model[item.key]} {...item.attrs} />
          )
        case ItemTypeEnum.Select:
          return (
            <ElSelect
              v-model={model[item.key]}
              {...item.attrs}
            >
              {
                item.options && item.options.map(it => (
                  <ElOption
                    key={it.value}
                    label={it[item?.mapKey?.label]}
                    value={it[item?.mapKey?.value]}
                  />
                ))
              }
            </ElSelect>
          )
        case ItemTypeEnum.DatePicker:
          return (
            <ElDatePicker
              v-model={model[item.key]}
              type="date"
              {...item.attrs}
            />
          )
        default:
          return '默认位置'
      }
    }
    return () => (
      <div>
        <ElForm label-width={labelWidth} ref={ruleFormRef} rules={rules} inline={inline} model={model} scroll-into-view-options={true}>
          {
            fromItemConfig.map((item: typeFormItem<keyof typeof model>) => (
              <ElFormItem label={item.label} key={item.key} prop={item.key}>
                {
                  renderElFormItem(item)
                }
              </ElFormItem>
            ))
          }
          <ElFormItem>
            {
              optionText
                ? (
                  <>
                    <ElButton type="primary" onClick={() => onSubmit(ruleFormRef.value)}>{optionText}</ElButton>
                  </>
                )
                : (
                  <>
                    <div>
                      <ElButton onClick={() => resetForm(ruleFormRef.value)}>重置</ElButton>
                      <ElButton type="primary" onClick={() => onSubmit(ruleFormRef.value)}>查询</ElButton>
                    </div>
                  </>
                )
            }

          </ElFormItem>
        </ElForm>
      </div>
    )
  },
})
