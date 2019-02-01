<template>
  <div class="resources" :class="{ 'resources--one': isPlayerOne, 'resources--two': !isPlayerOne }">
    <h2 class="resources__player">{{ player }}</h2>
    <div class="resources__blocks resources__blocks--bricks">
      <div class="resources__details">
        <div>Builders</div>
        <div>{{ resources.builders }}</div>
      </div>
      <div class="resources__details">
        <div>Bricks</div>
        <div>{{ resources.bricks }}</div>
      </div>
    </div>
    <div class="resources__blocks resources__blocks--weapons">
      <div class="resources__details">
        <div>Soldiers</div>
        <div>{{ resources.soldiers }}</div>
      </div>
      <div class="resources__details">
        <div>Weapons</div>
        <div>{{ resources.weapons }}</div>
      </div>
    </div>
    <div class="resources__blocks resources__blocks--magic">
      <div class="resources__details">
        <div>Magic</div>
        <div>{{ resources.magic }}</div>
      </div>
      <div class="resources__details">
        <div>Crystals</div>
        <div>{{ resources.crystals }}</div>
      </div>
    </div>
    <div class="resources__blocks resources__blocks--hp">
      <div class="resources__details">
        <div>Castle</div>
        <div>{{ castleHealth }}</div>
      </div>
      <div class="resources__details">
        <div>Gate</div>
        <div>{{ gateHealth }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlayerOne: null
    };
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
    }
  },
  created() {
    this.isPlayerOne = this.player === "Player 1";
  }
};
</script>

<style>
.resources__player {
  color: var(--color-white);
  font-size: 3rem;
  text-shadow: var(--text-shadow--small);
  border-bottom: 3px solid red;
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 2rem;
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
  padding: 2rem;
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

.resources__details {
  display: flex;
  padding: 1rem;
  justify-content: space-between;
}

.resources__details:first-child {
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
}
</style>