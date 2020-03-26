<template>
  <section class="container">
    <div class="country" :style="css_styles">{{name}}</div>
    <img class="flag" :src="get_image()" />
  </section>
</template>

<script>
export default {
  name: "Country",
  props: {
    name: String,
    color: String,
    flag: String
  },
  data() {
    return {
      css_styles: {
        color: this.color,
        backgroundImage: "../assets/" + this.flag
      }
    };
  },
  methods: {
    get_image() {
      return require(`@/assets/flags/${this.flag}.png`);
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
</style>