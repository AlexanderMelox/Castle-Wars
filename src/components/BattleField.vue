<template>
  <div class="battlefield">
    <div class="battlefield__top">
      <PlayerResources
        player="Player 1"
        :resources="players[0].resources"
        :castleHealth="players[0].castleHealth"
        :gateHealth="players[0].gateHealth"
      />
      <PlayerResources
        player="Player 2"
        :resources="players[1].resources"
        :castleHealth="players[1].castleHealth"
        :gateHealth="players[1].gateHealth"
      />
      <Castle
        player="Player 1"
        :castleHealth="players[0].castleHealth"
        :gateHealth="players[0].gateHealth"
      />
      <Castle
        player="Player 2"
        :castleHealth="players[1].castleHealth"
        :gateHealth="players[1].gateHealth"
      />
    </div>
    <div class="battlefield__bottom">
      <Cards :cards="cardHand" :resources="players[0].resources"/>
    </div>
  </div>
</template>

<script>
import PlayerResources from "./PlayerResources";
import Castle from "./Castle.vue";
import Cards from "./Cards.vue";

import cards from "../data/cards.js";

export default {
  data() {
    return {
      players: [
        {
          resources: {
            builders: 2,
            bricks: 5,
            soldiers: 2,
            weapons: 5,
            magic: 2,
            crystals: 5
          },
          castleHealth: 30,
          gateHealth: 10,
          cards: []
        },
        {
          resources: {
            builders: 2,
            bricks: 5,
            soldiers: 2,
            weapons: 5,
            magic: 2,
            crystals: 5
          },
          castleHealth: 30,
          gateHealth: 10,
          cards: []
        }
      ],
      cards
    };
  },
  computed: {
    cardHand() {
      const newHand = [];
      for (let i = 0; i < 8; i++) {
        newHand.push(this.cards[Math.floor(Math.random() * this.cards.length)]);
      }
      return newHand;
    }
  },
  components: {
    PlayerResources,
    Castle,
    Cards
  },
  created() {
    console.log(this.players);
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
  position: relative;
}

.battlefield__bottom {
  border-top: 5px solid var(--color-grass-border);
  background-color: var(--color-grass);
  z-index: 3000;
}
</style>