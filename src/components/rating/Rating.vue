<template>
  <div>
    <button @click="handleDecrement">-</button>
    <p>{{ value }}</p>
    <button @click="handleIncrement">+</button>
  </div>
</template>

<script>
const LOWER_LIMIT = -5;
const UPPER_LIMIT = 5;

export default {
  data: () => ({ value: 0 }),
  methods: {
    handleDecrement() {
      this.value = Math.max(this.value - 1, LOWER_LIMIT);
    },
    handleIncrement() {
      this.value = Math.min(this.value + 1, UPPER_LIMIT);
    }
  }
};
</script>
