<template>
  <div>
    <component :is="componentName" />
  </div>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const componentName = ref()

  watchEffect(() => {
    componentName.value = route.meta.layout
  })
</script>

<style scoped></style>

