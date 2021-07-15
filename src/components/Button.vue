<template>
  <div
    class="inline-block font-albertus h-16 button mask"
    :class="[disabled ? 'opacity-50' : 'group cursor-pointer']"
    :style="cssVars"
    ref="mask"
  >
    <div class="grid grid-cols-[auto,auto,auto] h-full pointer-events-none relative select-none">
      <div class="absolute inset-0 z-10">
        <img
          class="h-full absolute inset-0 z-10 group-hover:animate-translatex -translate-x-full transform"
          src="@/assets/buttons/button_hover_effect.webp"
          alt="hover"
        />
      </div>
      <div class="button-left relative h-full">
        <img
          class="h-full opacity-100 group-hover:opacity-0"
          src="@/assets/buttons/button_default_left.webp"
          alt="left"
        />
        <img
          class="absolute h-full inset-0 opacity-0 group-hover:opacity-100"
          src="@/assets/buttons/button_hover2_left.webp"
          alt="left_hover"
        />
      </div>
      <div class="relative grid place-items-center button-middle h-full">
        <div class="text-light-200 z-10 px-4">{{ text }}</div>
        <img
          class="absolute inset-0 h-full opacity-100 w-full group-hover:opacity-0"
          src="@/assets/buttons/button_default_middle.webp"
          alt="middle"
        />
        <img
          class="absolute inset-0 h-full opacity-0 w-full group-hover:opacity-100"
          src="@/assets/buttons/button_hover2_middle.webp"
          alt="middle_hover"
        />
      </div>
      <div class="button-right relative h-full">
        <img
          class="h-full opacity-100 group-hover:opacity-0"
          src="@/assets/buttons/button_default_right.webp"
          alt="right"
        />
        <img
          class="absolute inset-0 opacity-0 h-full group-hover:opacity-100"
          src="@/assets/buttons/button_hover2_right.webp"
          alt="right_hover"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
export default {
  props: {
    text: String,
    disabled: Boolean,
  },
  setup() {
    const cssVars: any = ref({})

    const mask = ref(null)

    onMounted(() => {
      const height = (mask.value! as HTMLElement).offsetHeight
      const percentage = Math.floor(height / 8)

      cssVars.value = {
        '--radius-trans': `${percentage}px`,
        '--radius-black': `${percentage + 1}px`,
      }
    })

    return {
      cssVars,
      mask
    }
  }
}
</script>

<style lang="postcss">
.button-left,
.button-right {
  aspect-ratio: 21 / 104;
}
.mask {
  mask: radial-gradient(
      circle at left top,
      transparent var(--radius-trans),
      black var(--radius-black)
    ),
    radial-gradient(
      circle at right top,
      transparent var(--radius-trans),
      black var(--radius-black)
    ),
    radial-gradient(
      circle at left bottom,
      transparent var(--radius-trans),
      black var(--radius-black)
    ),
    radial-gradient(
      circle at right bottom,
      transparent var(--radius-trans),
      black var(--radius-black)
    ),
    linear-gradient(black, black);
  mask-composite: exclude;
}
</style>