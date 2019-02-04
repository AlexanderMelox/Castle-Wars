<template>
  <div
    :class="['card', { 'weapons': card.type === 'weapons', 'building': card.type === 'building','cant-use': cantUse }]"
    @click="clicked"
  >
    <div class="card__cost">{{ card.cost }}</div>
    <div class="card__body">
      <p class="card__name">{{ card.name }}</p>
      <img class="card__icon" :src="icons[card.type]">
      <p class="card__description" v-html="card.description"></p>
    </div>
  </div>
</template>

<script>
import { actionBus } from "../main.js";

export default {
  props: {
    card: Object,
    resources: Number
  },
  data() {
    return {
      icons: {
        weapons:
          "https://res.cloudinary.com/castle-wars-assets/image/upload/v1549294263/sword.png",
        building:
          "https://res.cloudinary.com/castle-wars-assets/image/upload/v1549310993/brick-wall.png"
      }
    };
  },
  methods: {
    clicked() {
      if (this.cantUse) return;
      actionBus.$emit("cardWasClicked", this.card);
    }
  },
  computed: {
    cantUse() {
      return this.card.cost > this.resources;
    }
  },
  created() {
    console.log();
  }
};
</script>

<style>
.card {
  height: 90%;
  border-radius: 0.5rem;
  width: 15rem;
  margin: 1rem;
  text-align: center;
  position: relative;
  z-index: 9000 !important;
  box-shadow: var(--text-shadow);
  transition: all 0.2s;
  max-height: 18.5rem;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-3px);
}

.card:active {
  transform: translateY(-1px);
}

.card__cost {
  position: absolute;
  top: 1rem;
  font-size: 2rem;
  right: 1rem;
}

.card__body {
  display: flex;
  padding: 1.5rem;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.card__name {
  color: var(--color-white);
  font-size: 2rem;
}

.card__icon {
  width: 6rem;
}

.card__description {
  font-size: 1.3rem;
}

.cant-use {
  filter: grayscale(100%) brightness(0.4);
}

.clicked-animation {
  transition: all 3s;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.4);
}

.clicked-animation:hover {
  transform: translate(-50%, -50%) scale(1.4);
}

.weapons {
  background-color: var(--color-weapons);
}

.building {
  background-color: var(--color-building);
}
</style>