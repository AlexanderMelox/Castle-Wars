<template>
  <div :class="['card', { 'weapons': card.type }]">
    <div class="card__cost">{{ card.cost }}</div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  },
  computed: {}
};
</script>

<style>
.card {
  height: 90%;
  background-color: green;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 15rem;
  position: relative;
  margin: 1rem;
}

.card__cost {
  position: absolute;
  top: 1rem;
  font-size: 2rem;
  right: 1rem;
}

.weapons {
  background-color: var(--color-weapons);
  box-shadow: var(--text-shadow);
}
</style>