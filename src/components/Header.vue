<template>
  <header class="header">
    <h1 class="header__title">Castle Wars</h1>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  grid-area: header;
  padding: 3rem 0;
  background-color: var(--color-sky);
  text-align: center;
}

.header__title {
  font-size: 4rem;
  color: var(--color-white);
  line-height: 1;
  text-shadow: var(--text-shadow);
}
</style>