import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Test2',
  setup () {
    const tabsList = [
      {
        id: 1,
        icon: 'i-iconoir:home',
        name: '今日订单总数11',
        count: '157',
      },
    ]
    return () => (
      <div class="p-20px">
        <div class="flex">
          {
            tabsList.map(item => (
              <div class="flex items-center" key={item.name}>
                <i class={`${item.icon} text-54px`}/>
                <div class="flex flex-col flex-start ml-16px">
                  <span>{item.name}</span>
                  <span>{item.count}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  },
})
