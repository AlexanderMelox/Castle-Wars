<template>
  <div class="battlefield">
    <div class="battlefield__top">top</div>
    <div class="battlefield__bottom"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.battlefield {
  grid-area: battlefield;
  display: grid;
  grid-template-rows: 3fr 1fr;
}

.battlefield__top {
  background-color: var(--color-sky);
}

.battlefield__bottom {
  border-top: 5px solid var(--color-grass-border);
  background-color: var(--color-grass);
}
</style>