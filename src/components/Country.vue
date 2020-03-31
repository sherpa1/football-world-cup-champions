<template>
  <section class="container">
    <div class="country" :style="css_styles">
      <h2>{{team.name}}</h2>

      <button @click="on_click">clic</button>
      <!-- <h3>(capitale : {{capitale}})</h3>
      <h4 v-if="team.name==='Iqfdgtalie'">C'est l'Italie</h4>
      <h4 v-else>C'est la France</h4>
      <h5 v-show="team.name==='Italie'">Ca marche</h5>-->
    </div>
    <img class="flag" :src="get_image()" />
  </section>
</template>

<script>
export default {
  name: "Country",
  props: {
    // name: String,
    // color: String,
    // flag: String
    team: Object //todo typer sous forme de Team
  },
  data() {
    return {
      css_styles: {
        color: this.team.color //création dynamique de style css
      },
      capitale: "Rome"
    };
  },
  methods: {
    get_image() {
      return require(`@/assets/flags/${this.team.flag}.png`); //résolution dynamique d'url
    },
    on_click() {
      alert(`Le pays ${this.team.name} vient d'être cliqué`);
    }
  }
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.country {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
  font-weight: bold;
}

.flag {
  width: 3rem;
}

h2 {
  font-size: 20px;
}
h3 {
  font-size: 15px;
}
</style>