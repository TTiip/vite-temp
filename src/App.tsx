import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Layout from '~/components/layouts'

export default defineComponent({
  name: 'Index',
  setup () {
    const route = useRoute()
    console.log(route, 'route')

    return () => (
      <Layout />
    )
  },
})
