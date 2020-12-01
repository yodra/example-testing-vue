<template>
  <div>
    <p class="counter">You clicked {{ count }} times</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script>
export default {
  data: () => ({count: 0}),
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>
