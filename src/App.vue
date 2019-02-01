<template>
  <div id="app">
    <Header/>
    <BattleField/>
  </div>
</template>

<script>
import cards from "./data/cards";
import Header from "./components/Header.vue";
import Clouds from "./components/Clouds.vue";
import BattleField from "./components/BattleField.vue";

export default {
  components: {
    Header,
    BattleField,
    Clouds
  }
};
</script>

<style>
#app {
  display: grid;
  grid-template-rows: 10rem calc(100vh - 10rem);
  grid-template-areas:
    "header"
    "battlefield";
}
</style>
