import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Index',
  setup () {
    return () => (
      <div>
        <div>Layout</div>
        <router-view />
      </div>
    )
  },
})
