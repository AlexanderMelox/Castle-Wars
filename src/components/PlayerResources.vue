<template>
  <div
    class="resources"
    :class="{ 'resources--one': isPlayerOne, 'resources--two': !isPlayerOne, 'active': isActivePlayer }"
  >
    <h2 class="resources__player" :class="{ 'active': isActivePlayer }">{{ player }}</h2>
    <div class="resources__blocks resources__blocks--bricks">
      <div class="resources__details">
        <img
          src="https://res.cloudinary.com/castle-wars-assets/image/upload/v1549315135/builder.png"
          class="resources__icon"
        >
        <div class="resources__type">Builders</div>
        <div class="resources__updates" v-if="buildersUpdated != ''">{{buildersUpdated}}</div>
        <div>{{ resources.builders }}</div>
      </div>
      <div class="resources__details">
        <img
          src="https://res.cloudinary.com/castle-wars-assets/image/upload/v1549317147/brick.png"
          class="resources__icon"
        >
        <div class="resources__type">Bricks</div>
        <div class="resources__updates" v-if="bricksUpdated != ''">{{bricksUpdated}}</div>
        <div>{{ resources.bricks }}</div>
      </div>
    </div>
    <div class="resources__blocks resources__blocks--weapons">
      <div class="resources__details">
        <img
          src="https://res.cloudinary.com/castle-wars-assets/image/upload/v1549315223/helmet.png"
          class="resources__icon"
        >
        <div class="resources__type">Soldiers</div>
        <div class="resources__updates" v-if="soldiersUpdated != ''">{{soldiersUpdated}}</div>
        <div>{{ resources.soldiers }}</div>
      </div>
      <div class="resources__details">
        <img
          src="https://res.cloudinary.com/castle-wars-assets/image/upload/v1549294263/sword.png"
          class="resources__icon"
        >
        <div class="resources__type">Weapons</div>
        <div class="resources__updates" v-if="weaponsUpdated != ''">{{weaponsUpdated}}</div>
        <div>{{ resources.weapons }}</div>
      </div>
    </div>
    <div class="resources__blocks resources__blocks--magic">
      <div class="resources__details">
        <img
          src="https://res.cloudinary.com/castle-wars-assets/image/upload/v1549316902/witch-hat.png"
          class="resources__icon"
        >
        <div class="resources__type">Magic</div>
        <div class="resources__updates" v-if="magicUpdated != ''">{{magicUpdated}}</div>
        <div>{{ resources.magic }}</div>
      </div>
      <div class="resources__details">
        <img
          src="https://res.cloudinary.com/castle-wars-assets/image/upload/v1549316981/crystal.png"
          class="resources__icon"
        >
        <div class="resources__type">Crystals</div>
        <div class="resources__updates" v-if="crystalsUpdated != ''">{{crystalsUpdated}}</div>
        <div>{{ resources.crystals }}</div>
      </div>
    </div>
    <div class="resources__blocks resources__blocks--hp">
      <div class="resources__details">
        <img
          src="https://res.cloudinary.com/castle-wars-assets/image/upload/v1549317149/sand-castle.png"
          class="resources__icon"
        >
        <div class="resources__type">Castle</div>
        <div class="resources__updates" v-if="castleHealthUpdated != ''">{{castleHealthUpdated}}</div>
        <div>{{ castleHealth }}</div>
      </div>
      <div class="resources__details">
        <img
          src="https://res.cloudinary.com/castle-wars-assets/image/upload/v1549310993/brick-wall.png"
          class="resources__icon"
        >
        <div class="resources__type">Gate</div>
        <div class="resources__updates" v-if="gateHealthUpdated != ''">{{gateHealthUpdated}}</div>
        <div>{{ gateHealth }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlayerOne: null,
      buildersUpdated: "",
      bricksUpdated: "",
      soldiersUpdated: "",
      weaponsUpdated: "",
      magicUpdated: "",
      crystalsUpdated: "",
      castleHealthUpdated: "",
      gateHealthUpdated: ""
    };
  },
  methods: {
    resetUpdates() {
      this.buildersUpdated = "";
      this.bricksUpdated = "";
      this.soldiersUpdated = "";
      this.weaponsUpdated = "";
      this.magicUpdated = "";
      this.crystalsUpdated = "";
      this.castleHealthUpdated = "";
      this.gateHealthUpdated = "";
    }
  },
  props: {
    player: {
      type: String,
      required: true
    },
    resources: {
      type: Object,
      required: true
    },
    castleHealth: {
      type: Number,
      required: true
    },
    gateHealth: {
      type: Number,
      required: true
    },
    isActivePlayer: Boolean
  },
  watch: {
    castleHealth(newValue, oldValue) {
      newValue > oldValue
        ? (this.castleHealthUpdated = `+ ${newValue - oldValue}`)
        : (this.castleHealthUpdated = `- ${oldValue - newValue}`);
      setTimeout(this.resetUpdates, 2000);
    },
    gateHealth(newValue, oldValue) {
      newValue > oldValue
        ? (this.gateHealthUpdated = `+ ${newValue - oldValue}`)
        : (this.gateHealthUpdated = `- ${oldValue - newValue}`);
      setTimeout(this.resetUpdates, 2000);
    },
    "resources.builders": function(newValue, oldValue) {
      newValue > oldValue
        ? (this.buildersUpdated = `+ ${newValue - oldValue}`)
        : (this.buildersUpdated = `- ${oldValue - newValue}`);
      setTimeout(this.resetUpdates, 2000);
    },
    "resources.bricks": function(newValue, oldValue) {
      newValue > oldValue
        ? (this.bricksUpdated = `+ ${newValue - oldValue}`)
        : (this.bricksUpdated = `- ${oldValue - newValue}`);
      setTimeout(this.resetUpdates, 2000);
    },
    "resources.soldiers": function(newValue, oldValue) {
      newValue > oldValue
        ? (this.soldiersUpdated = `+ ${newValue - oldValue}`)
        : (this.soldiersUpdated = `- ${oldValue - newValue}`);
      setTimeout(this.resetUpdates, 2000);
    },
    "resources.weapons": function(newValue, oldValue) {
      newValue > oldValue
        ? (this.weaponsUpdated = `+ ${newValue - oldValue}`)
        : (this.weaponsUpdated = `- ${oldValue - newValue}`);
      setTimeout(this.resetUpdates, 2000);
    },
    "resources.magic": function(newValue, oldValue) {
      newValue > oldValue
        ? (this.magicUpdated = `+ ${newValue - oldValue}`)
        : (this.magicUpdated = `- ${oldValue - newValue}`);
      setTimeout(this.resetUpdates, 2000);
    },
    "resources.crystals": function(newValue, oldValue) {
      newValue > oldValue
        ? (this.crystalsUpdated = `+ ${newValue - oldValue}`)
        : (this.crystalsUpdated = `- ${oldValue - newValue}`);
      setTimeout(this.resetUpdates, 1500);
    }
  },
  created() {
    this.isPlayerOne = this.player === "Player 1";
  }
};
</script>

<style>
.resources__player {
  color: rgba(255, 255, 255, 0.2);
  font-size: 3rem;
  text-shadow: var(--text-shadow--small);
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 2rem;
  transition: all 0.2s;
}

.resources {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 1rem;
  border-radius: 2rem;
  padding: 2rem;
  width: 30rem;
  z-index: 5000;
  opacity: 0.5;
  transform: scale(0.9);
}

.resources.active {
  opacity: 1;
  transform: scale(0.95);
}

.resources__updates {
  padding: 0.5rem;
  margin-right: 1rem;
  color: #fff;
  background-color: var(--castle-red);
  font-size: 1.6rem;
  border-radius: 0.5rem;
  line-height: 1;
}

.resources__player.active {
  letter-spacing: 3px;
  transform: scale(1.1);
  color: var(--color-white);
  border-bottom: 3px solid red;
}

.resources--one {
  left: 1rem;
}

.resources--two {
  right: 1rem;
}

.resources__blocks {
  align-self: stretch;
  border-radius: 1.5rem;
  padding: 1rem;
  color: var(--color-white);
  box-shadow: var(--text-shadow);
  border: 3px solid rgba(0, 0, 0, 0.2);
  font-size: 2rem;
}

.resources__blocks:not(:last-child) {
  margin-bottom: 2rem;
}

.resources__blocks--bricks {
  background-color: var(--color-building);
}

.resources__blocks--weapons {
  background-color: var(--color-weapons);
}

.resources__blocks--magic {
  background-color: var(--color-magic);
}

.resources__blocks--hp {
  background-color: var(--color-hp);
}

.resources__type {
  margin-right: auto;
}

.resources__icon {
  height: 3rem;
  margin-right: 1rem;
}

.resources__details {
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: flex-start;
}

.resources__details:first-child {
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
}
</style>