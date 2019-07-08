<template>
  <div>
      this is detail page
      <div>{{uid}}</div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      uid: 0
    };
  },
  mounted() {
    this.uid = this.$route.params.id;
    console.log(this.$route.params.id);
  }
};
</script>

<style>
</style>
