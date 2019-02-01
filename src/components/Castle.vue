<template>
  <div class="castle-container">
    <div class="castle" :class="{ 'castle--one': isPlayerOne, 'castle--two': !isPlayerOne }" :style="{ height: castleHeight + '%' }"></div>
    <div
      class="gate"
      :class="{ 'gate--one': isPlayerOne, 'gate--two': !isPlayerOne }"
      :style="{ height: gateHeight + '%' }"
    ></div>
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
    castleHealth: {
      type: Number,
      required: true
    },
    gateHealth: {
      type: Number,
      required: true
    }
  },
  computed: {
    castleHeight() {
      return this.castleHealth * 1.1;
    },
    gateHeight() {
      return this.gateHealth;
    }
  },
  created() {
    this.isPlayerOne = this.player === "Player 1";
  }
};
</script>

<style scoped>
.castle {
  position: absolute;
  transition: height 1s;
  bottom: 0;
  width: 20rem;
  height: 100rem;
  border: 3px solid rgba(0, 0, 0, 0.4);
  box-shadow: var(--text-shadow);
}

.castle::before {
  display: block;
  position: absolute;
  content: "";
  width: 4rem;
  top: -4rem;
  left: -1rem;
  height: 200rem;
}

.castle::after {
  display: block;
  position: absolute;
  content: "";
  width: 4rem;
  top: -4rem;
  right: -1rem;
  height: 200rem;
  box-shadow: var(--text-shadow);
}

.castle--one {
  background-color: var(--castle-blue);
  left: 40rem;
}

.castle--one::before,
.castle--one::after {
  background-color: var(--castle-blue);
  border: 3px solid rgba(0, 0, 0, 0.4);
}

.castle--two {
  background-color: var(--castle-red);
  right: 40rem;
}

.castle--two::before,
.castle--two::after {
  background-color: var(--castle-red);
  border: 3px solid rgba(0, 0, 0, 0.4);
}

.gate {
  position: absolute;
  width: 2rem;
  bottom: 0;
  border: 3px solid rgba(0, 0, 0, 0.4);
}

.gate::before {
  content: "";
  display: block;
  width: 3rem;
  height: 1rem;
  position: absolute;
  top: -1rem;
  left: -0.8rem;
  background-color: #fff;
  border: 3px solid rgba(0, 0, 0, 0.4);
}

.gate--one {
  background-color: var(--castle-blue);
  left: 65rem;
}

.gate--two {
  background-color: var(--castle-red);
  right: 65rem;
}
</style>