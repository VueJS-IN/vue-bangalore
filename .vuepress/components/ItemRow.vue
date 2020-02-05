<template>
  <div class="wrapper">
    <div class="icon">
      <slot name="icon" />
    </div>
    <slot />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
}
.icon > * {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 100%;
  display: inline-block;
  margin-right: 0.5rem;
}
</style>
