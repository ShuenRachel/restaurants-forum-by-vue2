<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <RestaurantTopCard 
      v-for="restaurant in restaurants" 
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import RestaurantTopCard from "./../components/RestaurantTopCard.vue";

import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
    RestaurantTopCard,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants()

        this.restaurants = data.restaurants;
      } catch (error) {
        console.log(error);

        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    }
    // fetchRestaurants() {
    //   this.restaurants = dummyData.restaurants;
    // },
  },
  created() {
    this.fetchTopRestaurants();
  },
};
</script>
