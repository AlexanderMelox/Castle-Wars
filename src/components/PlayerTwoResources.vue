<template>
  <div class="resources resources--two">
    <h2 class="resources__player">Player 2</h2>
    <div class="resources__blocks resources__blocks--bricks">
      <div class="resources__details">
        <div>Builders</div>
        <div>2</div>
      </div>
      <div class="resources__details">
        <div>Bricks</div>
        <div>10</div>
      </div>
    </div>
    <div class="resources__blocks resources__blocks--weapons">
      <div class="resources__details">
        <div>Soldiers</div>
        <div>2</div>
      </div>
      <div class="resources__details">
        <div>Weapons</div>
        <div>10</div>
      </div>
    </div>
    <div class="resources__blocks resources__blocks--magic">
      <div class="resources__details">
        <div>Sorcerers</div>
        <div>2</div>
      </div>
      <div class="resources__details">
        <div>Crystals</div>
        <div>10</div>
      </div>
    </div>
    <div class="resources__blocks resources__blocks--hp">
      <div class="resources__details">
        <div>Castle</div>
        <div>30</div>
      </div>
      <div class="resources__details">
        <div>Gate</div>
        <div>10</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  position: absolute;
  background-color: rgba(241, 214, 214, 0.1);
  border-radius: 2rem;
  padding: 2rem;
  width: 30rem;
}

.resources--two {
  top: 0rem;
  right: 0;
}

.resources__blocks {
  align-self: stretch;
  border-radius: 1.5rem;
  padding: 1rem;
  color: var(--color-white);
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