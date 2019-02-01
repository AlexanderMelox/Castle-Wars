<template>
  <div class="clouds">
    <div class="cloud-1"></div>
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
  z-index: 1000;
}

.clouds > *::before {
  position: absolute;
  display: block;
  box-shadow: var(--box-shadow);
  content: "";
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
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
  background-color: var(--color-white);
  top: 1.5rem;
  left: 3rem;
  z-index: -1000;
}

.cloud-1 {
  top: 2rem;
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