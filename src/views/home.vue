<template>
  <div class="wrapper">
    <div class="header">
      <span>首页</span>
    </div>
    <div class="main">
      <div class="content">
        <dl v-for="list in listData" :key="list.id" class="dl">
          <dt>
            <img :src="list.img" alt />
          </dt>
          <dd>
            <p>{{list.title}}</p>
            <p>￥{{list.price}}</p>
            <button @click="addList(list.id)">加入购物车</button>
          </dd>
        </dl>
      </div>
    </div>
    <div class="footer">
      <button>加入购物车</button>
      <button @click="handRoute">购物车</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    listData: store => store.home.listData
  }),
  methods: {
    handRoute() {
      console.log(this.$router.history);
      this.$router.push({
        name: "shopcar",
        params: {
          id: 1
        }
      });
      // this.$router.push({
      //     path:'/shopcar',
      //     query:{
      //         id:1
      //     }
      // })
    },
    addList(id){
        this.$store.commit('getShopcar',id)
    }
  }
};
</script>

<style>
@import url('../common/scss/index.css');
</style>
