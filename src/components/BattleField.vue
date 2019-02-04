<template>
  <div class="battlefield">
    <button v-if="isPlaying" class="skip-turn" @click="skipTurn">Skip turn</button>
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
        v-if="isPlaying || !isGameOver"
        :class="{ 'hide': turnIsInProgress }"
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
      cards,
      isPlaying: false,
      isGameOver: false,
      turnIsInProgress: false
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
    skipTurn() {
      this.addResources(this.activePlayer);
      this.switchPlayer();
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
      if (
        this.players[1].castleHealth <= 0 ||
        this.players[0].castleHealth >= 100
      ) {
        this.isGameOver = true;
        alert("Congratulations Player 1 Won!");
      } else if (
        this.players[0].castleHealth <= 0 ||
        this.players[1].castleHealth >= 100
      ) {
        this.isGameOver = true;
        alert("Congratulations Player 2 Won!");
      }
    },
    determineActivePlayer() {
      const activePlayer = this.activePlayer;
      const opponent = this.activePlayer === 0 ? 1 : 0;
      return { activePlayer, opponent };
    },
    getResourcesArray() {
      return ["bricks", "weapons", "crystals"];
    },
    swat(player) {
      this.players[player].castleHealth -= 10;
    },
    thief(opponent, activePlayer) {
      // 1. Creates an array of resources
      const resourcesArray = this.getResourcesArray();
      // 2. Loops through each resource and deducts 5
      resourcesArray.forEach(resource => {
        // Deduct resources from enemy
        if (this.players[opponent].resources[resource] < 5) {
          this.players[opponent].resources[resource] = 0;
        } else {
          this.players[opponent].resources[resource] -= 5;
        }
        // Adds it to the active player
        this.players[activePlayer].resources[resource] += 5;
      });
    },
    saboteur(opponent) {
      const resourcesArray = this.getResourcesArray();
      resourcesArray.forEach(resource => {
        if (this.players[opponent].resources[resource] <= 4) {
          this.players[opponent].resources[resource] = 0;
        } else {
          this.players[opponent].resources[resource] -= 4;
        }
      });
    },
    attack(player, dmg) {
      if (this.players[player].gateHealth <= 0) {
        this.players[player].castleHealth -= dmg;
      } else if (this.players[player].gateHealth < dmg) {
        const diff = dmg - this.players[player].gateHealth;
        this.players[player].gateHealth = 0;
        this.players[player].castleHealth -= diff;
      } else {
        this.players[player].gateHealth -= dmg;
      }
    },
    hire(type) {
      this.players[this.activePlayer].resources[type] += 1;
    },
    addToFence(amount) {
      this.players[this.activePlayer].gateHealth += amount;
    },
    addToCastle(amount) {
      this.players[this.activePlayer].castleHealth += amount;
    },
    reserve() {
      this.players[this.activePlayer].castleHealth += 8;
      if (this.players[this.activePlayer].gateHealth < 4) {
        this.players[this.activePlayer].gateHealth = 0;
      } else {
        this.players[this.activePlayer].gateHealth -= 4;
      }
    },
    wain(opponent) {
      this.players[this.activePlayer].castleHealth += 8;
      this.players[opponent].castleHealth -= 4;
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
      this.turnIsInProgress = true;
      const { activePlayer, opponent } = this.determineActivePlayer();

      // Deduct the resource from the active player
      this.players[activePlayer].resources[card.type] -= card.cost;

      // Action
      if (card.type === "weapons") {
        switch (card.name) {
          case "swat":
            this.swat(opponent);
            break;
          case "thief":
            this.thief(opponent, activePlayer);
            break;
          case "saboteur":
            this.saboteur(opponent);
            break;
          case "platoon":
            this.attack(opponent, 6);
            break;
          case "archer":
            this.attack(opponent, 2);
            break;
          case "banshee":
            this.attack(opponent, 32);
            break;
          case "attack":
            this.attack(opponent, 12);
            break;
          case "rider":
            this.attack(opponent, 4);
            break;
          case "knight":
            this.attack(opponent, 3);
            break;
          case "recruit":
            this.hire("soldiers");
            break;
        }
      } else if (card.type === "bricks") {
        switch (card.name) {
          case "fence":
            this.addToFence(22);
            break;
          case "base":
            this.addToCastle(2);
            break;
          case "school":
            this.hire("builders");
            break;
          case "tower":
            this.addToCastle(5);
            break;
          case "defense":
            this.addToFence(6);
            break;
          case "reserve":
            this.reserve();
            break;
          case "babylon":
            this.addToCastle(32);
            break;
          case "fort":
            this.addToCastle(20);
            break;
          case "wain":
            this.wain(opponent);
          case "wall":
            this.addToFence(3);
        }
      }

      const vm = this;
      setTimeout(function() {
        // Check if anyone won the game
        vm.checkIfGameIsOver();

        // Remove old card from array
        const cardIndex = vm.players[activePlayer].cards.findIndex(
          c => c.name === card.name
        );
        vm.players[activePlayer].cards.splice(cardIndex, 1);

        // Add new card to the array
        vm.players[activePlayer].cards.push(vm.newCard());

        // Get resources
        vm.addResources(activePlayer);

        // Switch players
        vm.switchPlayer();

        // Hides the cards
        vm.turnIsInProgress = false;
      }, 1000);
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

.hide {
  opacity: 0;
  visibility: hidden;
}

.skip-turn {
  position: fixed;
  display: inline-block;
  left: 50%;
  top: 8rem;
  transform: translateX(-50%);
  z-index: 9999;
  outline: none;
  border: none;
  color: var(--color-white);
  font: inherit;
  text-shadow: var(--text-shadow-small);
  box-shadow: var(--text-shadow);
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 2rem;
  background-color: var(--castle-red);
  cursor: pointer;
  transition: all 0.2s;
}

.skip-turn:hover {
  transform: translateY(-3px) translateX(-50%) scale(1.1);
}
</style>