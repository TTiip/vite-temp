import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestRender',
  setup () {
    return () => (
      <div className="text-70px color-#ff6700 ">TestRender</div>
    )
  },
})
