import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hello',
  setup () {
    console.log('hello')
    return () => (
      <div>Hello</div>
    )
  },
})
