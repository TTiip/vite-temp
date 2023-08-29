import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestRender',
  setup () {
    return () => (
      <>
        <div class="text-70px color-#ff6700 ">TestRender</div>
        <i class="i-iconoir:home text-18px flex"></i>
        <button class="btn">123</button>
      </>
    )
  },
})
