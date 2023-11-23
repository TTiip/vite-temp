<template>
  <div>
    <component :is="componentName" />
  </div>
</template>

<script setup lang="ts">
  import { shallowRef, watchEffect } from 'vue'
  import { useRoute } from 'vue-router'
  import Default from '~/components/layouts/default'

  const route = useRoute()
  const componentName = shallowRef()

  watchEffect(() => {
    componentName.value = route.meta.layout || Default
  })
</script>

<style scoped></style>

