<script setup lang="ts">
import type { ProgressRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  ProgressIndicator,
  ProgressRoot,

} from "reka-ui"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority";


const progressIndicatorVariants = cva('h-full w-full flex-1 transition-all', {
  variants: {
    variant: {
      default: 'bg-primary',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      success: 'bg-success',
      error: 'bg-error',
      warning: 'bg-warning',
      info: 'bg-info',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
export type ProgressIndicatorVariants = VariantProps< typeof progressIndicatorVariants>;


const props = withDefaults(
  defineProps<ProgressRootProps & { class?: HTMLAttributes["class"] 
   variant?: ProgressIndicatorVariants['variant']

  }>(),
  {
    modelValue: 0,
       variant: "default",
  },
)

const delegatedProps = reactiveOmit(props, "class","variant")
</script>

<template>
  <ProgressRoot
    data-slot="progress"
    v-bind="delegatedProps"
    :class="
      cn(
               'relative h-1 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-white/15',
        props.class,
      )
    "
  >
    <ProgressIndicator
      data-slot="progress-indicator"
      :class="cn(progressIndicatorVariants({ variant: props.variant }))"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>
