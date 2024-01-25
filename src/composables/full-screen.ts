import { useFullscreen } from '@vueuse/core'

export const isFullscreen = useFullscreen().isFullscreen
export const toggleFullscreen = useFullscreen().toggle
