import type { Router } from 'vue-router'

export default (_: any, { router }: { router: Router }) => {
  router.beforeEach(async to => {
    const { meta = {} } = to
    const { title } = meta
    ;(document as any).title = title
  })
}
