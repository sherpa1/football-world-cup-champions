<template>
  <div class="country" :style="css_styles">{{name}}</div>
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
        color: this.color
      }
    };
  }
};
</script>

<style>
.country {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>