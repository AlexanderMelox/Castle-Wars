<template>
  <div class="battlefield">
    <div class="battlefield__top">
      <PlayerOneResources/>
      <PlayerTwoResources/>
    </div>
    <div class="battlefield__bottom"></div>
  </div>
</template>

<script>
import PlayerOneResources from "./PlayerOneResources";
import PlayerTwoResources from "./PlayerTwoResources";

export default {
  components: {
    PlayerOneResources,
    PlayerTwoResources
  }
};
</script>

<style scoped>
.battlefield {
  grid-area: battlefield;
  display: grid;
  grid-template-rows: 3fr 1fr;
  position: relative;
}

.battlefield__top {
  background-color: var(--color-sky);
}

.battlefield__bottom {
  border-top: 5px solid var(--color-grass-border);
  background-color: var(--color-grass);
}
</style>