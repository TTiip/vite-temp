import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Test',
  setup () {
    return () => (
      <div>
        <div>Test</div>
        <router-view />
      </div>
    )
  },
})
