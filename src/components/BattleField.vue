<template>
  <div class="battlefield">
    <div class="battlefield__menu" v-if="!isPlaying">
      <button class="battlefield__buttons" @click="startGame">2 Players</button>
      <button class="battlefield__buttons">How to Play</button>
    </div>
    <div class="battlefield__top">
      <PlayerResources
        v-if="isPlaying"
        player="Player 1"
        :isActivePlayer="activePlayer === 0"
        :resources="players[0].resources"
        :castleHealth="players[0].castleHealth"
        :gateHealth="players[0].gateHealth"
      />
      <PlayerResources
        v-if="isPlaying"
        player="Player 2"
        :isActivePlayer="activePlayer === 1"
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
      <Cards
        v-if="isPlaying"
        :cards="players[activePlayer].cards"
        :resources="players[activePlayer].resources"
      />
    </div>
  </div>
</template>

<script>
import PlayerResources from "./PlayerResources";
import Castle from "./Castle.vue";
import Cards from "./Cards.vue";

import { actionBus } from "../main.js";
import cards from "../data/cards.js";

export default {
  data() {
    return {
      activePlayer: 0,
      players: [
        {
          resources: {
            builders: 2,
            bricks: 40,
            soldiers: 2,
            weapons: 40,
            magic: 2,
            crystals: 40
          },
          castleHealth: 30,
          gateHealth: 10,
          cards: []
        },
        {
          resources: {
            builders: 2,
            bricks: 40,
            soldiers: 2,
            weapons: 40,
            magic: 2,
            crystals: 40
          },
          castleHealth: 30,
          gateHealth: 10,
          cards: []
        }
      ],
      cards,
      isPlaying: false,
      isGameOver: false
    };
  },
  methods: {
    startGame() {
      // Sets isPlaying to true
      this.isPlaying = true;
      // Set player's 1 and 2 cards
      this.startingCards(0);
      this.startingCards(1);
    },
    startingCards(player) {
      const newHand = [];
      for (let i = 0; i < 8; i++) {
        newHand.push(this.newCard());
      }
      this.players[player].cards = newHand;
    },
    newCard() {
      return this.cards[Math.floor(Math.random() * this.cards.length)];
    },
    switchPlayer() {
      this.activePlayer = this.activePlayer === 0 ? 1 : 0;
    },
    addResources(player) {
      this.players[player].resources.bricks += this.players[
        player
      ].resources.builders;
      this.players[player].resources.weapons += this.players[
        player
      ].resources.soldiers;

      this.players[player].resources.crystals += this.players[
        player
      ].resources.magic;
    },
    checkIfGameIsOver() {
      if (this.players[1].castleHealth <= 0) {
        this.isGameOver = true;
        alert("Congratulations Player 1 Won!");
      } else if (this.players[0].castleHealth <= 0) {
        this.isGameOver = true;
        alert("Congratulations Player 2 Won!");
      }
    },
    determineActivePlayer() {
      const activePlayer = this.activePlayer;
      const opponent = this.activePlayer === 0 ? 1 : 0;
      return { activePlayer, opponent };
    },
    swat(player) {
      this.players[player].castleHealth -= 10;
    },
    thief(opponent) {
      // 1. Creates an array of resources
      const resourcesArray = Object.keys(
        this.players[opponent].resources
      ).filter(
        resource =>
          resource === "bricks" ||
          resource === "weapons" ||
          resource === "crystals"
      );
      // 2. Loops through each resource and deducts 5
      resourcesArray.forEach(resource => {
        if (this.players[opponent].resources[resource] < 5) {
          this.players[opponent].resources[resource] = 0;
        } else {
          this.players[opponent].resources[resource] -= 5;
        }
      });
    }
  },
  computed: {},
  components: {
    PlayerResources,
    Castle,
    Cards
  },
  created() {
    actionBus.$on("cardWasClicked", card => {
      if (this.isGameOver) return;
      const { activePlayer, opponent } = this.determineActivePlayer();

      // Deduct the resource from the active player
      this.players[activePlayer].resources[card.type] -= card.cost;

      // 1. Action
      if (card.type === "weapons") {
        if (card.name === "swat") {
          this.swat(opponent);
        } else if (card.name === "thief") {
          this.thief(opponent, activePlayer);
        }
      }
      // 2. Check if anyone won the game
      this.checkIfGameIsOver();

      // 3. Switch players
      this.switchPlayer();

      // 4. Get resources
      this.addResources(activePlayer);
    });
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

.battlefield__menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 6000;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.battlefield__buttons {
  outline: none;
  border: none;
  color: var(--color-white);
  font: inherit;
  text-shadow: var(--text-shadow);
  box-shadow: var(--text-shadow);
  font-size: 3rem;
  padding: 1.5rem 4rem;
  border-radius: 2rem;
  margin: 1rem;
  background-color: var(--castle-red);
  cursor: pointer;
  transition: all 0.2s;
}

.battlefield__buttons:hover {
  transform: translateY(-3px) scale(1.1);
}
</style>