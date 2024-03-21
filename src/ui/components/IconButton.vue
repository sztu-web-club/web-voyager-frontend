<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  size: {
    type: Number,
    default: 24,
  },
  color: {
    type: String,
    default: 'var(--color-text)',
  },
  content: {
    type: String,
    default: '',
  },
  selected: {
    type: Boolean,
    default: false,
  },
})

const hovering = ref(false)
const isFocusing = ref(props.selected)
const handleHovering = (value: boolean) => {
  hovering.value = value
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <button
      v-ripple
      v-hover:desktop="handleHovering"
      class="relative h-8 w-14 cursor-pointer select-none border-rd-4000 border-none bg-transparent color-[var(--button-default-text-color)]"
      style="transition: box-shadow 0.2s, background-color 0.25s, border-radius 0.2s;"
    >
      <var-icon
        :name="props.name"
        :size="props.size"
        :color="props.color"
      />

      <var-hover-overlay
        :hovering="hovering"
        :focusing="isFocusing"
      />
    </button>
    <label
      class="mb-1 mt-1 h-4 flex items-center text-4"
    >
      {{ props.content }}
    </label>
  </div>
</template>
