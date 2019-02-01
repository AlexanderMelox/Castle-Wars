<template>
  <div class="battlefield">
    <div class="battlefield__top">
      <PlayerResources
        player="Player 1"
        :resources="mockResources"
        :castleHealth="castleHealth"
        :gateHealth="gateHealth"
      />
      <PlayerResources
        player="Player 2"
        :resources="mockResources"
        :castleHealth="castleHealth"
        :gateHealth="gateHealth"
      />
      <Castle player="Player 1" :castleHealth="castleHealth" :gateHealth="gateHealth"/>
      <Castle player="Player 2" :castleHealth="castleHealth" :gateHealth="gateHealth"/>
    </div>
    <div class="battlefield__bottom"></div>
  </div>
</template>

<script>
import PlayerResources from "./PlayerResources";
import Castle from "./Castle.vue";

export default {
  data() {
    return {
      mockResources: {
        builders: 2,
        bricks: 5,
        soldiers: 2,
        weapons: 5,
        magic: 2,
        crystals: 5
      },
      castleHealth: 30,
      gateHealth: 10
    };
  },
  components: {
    PlayerResources,
    Castle
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
  overflow: hidden;
  position: relative;
}

.battlefield__bottom {
  border-top: 5px solid var(--color-grass-border);
  background-color: var(--color-grass);
}
</style>