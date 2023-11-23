import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestLayout',
  setup () {
    return () => (
      <div>
        <div>Test</div>
        <router-view />
      </div>
    )
  },
})
