<script setup lang="ts">
  const open = ref(false);
</script>
<template>
  <div class="content">
    <CheckFine />
    <PlusService />
    <MainDocuments />
  </div>
</template>
<style lang="scss" scoped>
  .content {
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
</style>
