<script setup>
const currentTime = new Date().toISOString();
</script>
<template>
  <div class="widget">
    <h1>App 7 Widget</h1>
    <p>Current time: {{ currentTime }}</p>
  </div>
</template>

<style scoped>
.widget {
  background-color: teal;
  border-radius: 8px;
  padding: 10px;
}
</style>
