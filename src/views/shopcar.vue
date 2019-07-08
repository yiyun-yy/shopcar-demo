<template>
  <div class="wrapper">
    <div class="header">
      <span>购物车</span>
    </div>
    <div class="main">
      <div class="content">
        <div class="shopcar" v-for="car in shopcar" :key="car.id">
          <div class="shopcar-left">
            <input type="checkbox" v-model="car.isCheck" @change="changeCheck" />
          </div>
          <div class="shopcar-mid" @click="handClick">
            <img :src="car.img" alt @click="handDetail(car.id)" />
          </div>
          <div class="shopcar-right">
            <div class="shopcar-right-l">
              <p v-text="car.title"></p>
              <p>￥{{car.price}}</p>
              <button @click="removeList(car.id)">删除</button>
            </div>
            <div class="shopcar-right-r">
              <span v-if="car.num>0" @click="handNum(car.id)">-</span>
              <span>{{car.num}}</span>
              <span @click="addNum(car.id)">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <input type="checkbox" v-model="checkAll" @change="CheckAll" />全选
      <span>总价:{{totMoney}}</span>
      <button @click="clear">清空购物车</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      checkAll:false,
      totMoney:0,
    }
  },
  computed: mapState({
    shopcar: store => store.home.shopcar,
    totalMoney: store => store.home.totalMoney,
  }),
  methods: {
    handClick() {
      this.$store.commit("getCount", 2);
    },
    handDetail(id) {
      this.$router.push({
        path: `/detail/${id}`
      });
    },
    addNum(id) {
      this.$store.commit("getAddNum", id);
      this.getTotal();
    },
    handNum(id) {
      this.$store.commit("getHandNum", id);
      this.getTotal();
    },
    getTotal() {
      let tot = 0;
      let totnum = 0;
      this.shopcar.map((item, index) => {
        if (item.isCheck) {
          tot += item.num * item.price;
          totnum += item.num;
        }
        return tot;
      });
      this.totMoney=tot.toFixed(2);
    },
    changeCheck() {
      this.getTotal();
    },
    CheckAll() {
      this.shopcar.map(item => {
        item.isCheck = this.checkAll;
      });
    },
    removeList(id){
      this.$store.commit('getremoveList',id)
    },
    clear(){
      this.$store.commit('getClearAll')
    }
  },
  updated() {
    this.getTotal()
  },
};
</script>

<style>
</style>
