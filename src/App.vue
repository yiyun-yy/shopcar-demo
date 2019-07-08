<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      fetch("/api/list").then(res =>
        res.json().then(result => {
          console.log(result);
        })
      );
    }
  }
};
</script>

<style>
@import url("./common/scss/index.css");
</style>
