import { ElButton, ElPagination, ElTable, ElTableColumn } from 'element-plus'
import { defineComponent } from 'vue'
import type { typeColumnList } from '~/types/table'

export default defineComponent({
  name: 'table-component',
  props: {
    data: {
      type: Array,
      requred: true,
    },
    columnList: {
      type: Array,
      requred: true,
    },
    total: {
      type: Number,
      default: () => 400,
    },
  },
  emits: ['edit'],
  setup (props, { emit }) {
    const { data, columnList, total } = props
    const currentPage4 = 1
    const pageSize4 = 15

    return () => (
      <div>
        <ElTable data={data}>
          {
            (columnList as typeColumnList[]).map(item => (
              <ElTableColumn key={item.value} prop={item.value} label={item.label} {...item.attr}>
                {{
                  default: ({ row }: { row: any }) => item?.renderFn ? item?.renderFn(row) : row[item.value],
                }}
              </ElTableColumn>
            ))
          }
          <ElTableColumn label="操作" width="180" align="center">
            <ElButton type="primary" onClick={() => emit('edit', data![0])}>编辑</ElButton>
            <ElButton type="danger">删除</ElButton>
          </ElTableColumn>
        </ElTable>
        <div class="flex justify-end mt-10px">
          <ElPagination
            v-model:current-page={currentPage4}
            v-model:page-size={pageSize4}
            page-sizes={[15, 20, 30, 50]}
            layout="total, sizes, prev, pager, next, jumper"
            total={total}
          />
        </div>
      </div>
    )
  },
})
