import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NoLayout',
  setup () {
    return () => (
      <div>
        <router-view />
      </div>
    )
  },
})
