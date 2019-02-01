<template>
  <div class="clouds">
    <div class="cloud-1" :style></div>
    <div class="cloud-2"></div>
    <div class="cloud-3"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.clouds > * {
  display: block;
  position: fixed;
  border-radius: 100%;
  width: 5rem;
  height: 5rem;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  z-index: 5;
}

.clouds > *::before {
  position: absolute;
  display: block;
  box-shadow: var(--box-shadow);
  content: "";
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border-right: 1px solid lightgray;
  background-color: var(--color-white);
  top: 1rem;
  left: -3rem;
}

.clouds > *::after {
  position: absolute;
  display: block;
  box-shadow: var(--box-shadow);
  content: "";
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border-right: 1px solid lightgray;
  background-color: var(--color-white);
  top: 1.5rem;
  left: 3rem;
  z-index: -100;
}

.cloud-1 {
  top: 15rem;
  left: 20rem;
}

.cloud-2 {
  top: 10rem;
  left: 100rem;
}

.cloud-3 {
  top: 20rem;
  left: 50rem;
}
</style>