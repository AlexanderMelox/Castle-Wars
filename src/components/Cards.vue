<template>
  <div class="cards">
    <Card v-for="(card, i) in cards" :card="card" :key="card.name + i"/>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card
  },
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
};
</script>

<style >
.cards {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>