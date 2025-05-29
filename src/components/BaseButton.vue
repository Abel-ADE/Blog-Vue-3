<template>
  <button
    :disabled="props.isDisabled"
    :style="{
      '--background-color': props.backgroundColor,
      '--text-color': props.textColor,
    }"
    @click="props.onClick()"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  onClick: () => {},
  backgroundColor: '#04aa6d',
  textColor: 'white',
});
</script>

<style scoped>
button {
  border: 2px solid var(--background-color);
  background-color: var(--background-color);
  border-radius: 0.25rem;
  color: var(--text-color);
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color 0.4s,
    color 0.4s,
    border-color 0.4s;
}

button:hover {
  border: 2px solid var(--background-color);
  background-color: var(--text-color);
  color: var(--background-color);
}

button:active {
  transform: scale(0.96);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

button:disabled:hover {
  border: 2px solid var(--background-color);
  background-color: var(--background-color);
  color: var(--text-color);
}

button:disabled:active {
  transform: none;
}
</style>
