<template>
  <div>
    <MainHeader />
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container {
    margin: 10px auto;
    width: 1150px;
  }
</style>
