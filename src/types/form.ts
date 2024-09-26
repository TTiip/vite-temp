enum ItemTypeEnum {
  Input = 'Input',
  Select = 'Select',
  DatePicker = 'DatePicker'
}

type ItemType = `${ItemTypeEnum}`

interface typeFormItem<T> {
  label: string
  key: T
  type: ItemType
  attrs?: any
  mapKey?: any
  options?: any[]
}

export {
  ItemType,
  ItemTypeEnum,
  typeFormItem,
}
