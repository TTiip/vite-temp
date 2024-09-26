import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Index',
  setup () {
    return () => (
      <div>
        <i class="i-iconoir:home flex text-60px color-#ff6700"></i>
        Index
      </div>
    )
  },
})
