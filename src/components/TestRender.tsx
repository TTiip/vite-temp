import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestRender',
  setup () {
    return () => (
      <>
        <div class="text-70px color-#ff6700 ">TestRender</div>
        <button class="btn">123</button>
      </>
    )
  },
})
