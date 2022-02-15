<template>
  <div class="container py-5">
    <NavTabs />
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- rest-card -->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initialRestaurant="restaurant"
      />
    </div>

    <RestaurantsPagination
      :v-if="totalPage.length > 1"
      :current-page="currentPage"
      :totalPage="totalPage"
      :previousPage="previousPage"
      :nextPage="nextPage"
      :categoryId="categoryId"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import RestaurantCard from "./../components/RestaurantCard.vue";
import RestaurantsNavPills from "./../components/RestaurantsNavPill.vue";
import RestaurantsPagination from "./../components/RestaurantsPagination.vue";

import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }

        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data;

        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
      } catch (error) {
        console.log(error);

        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
  created() {
    const { page = '', categoryId = '' } = this.$route.query

    this.fetchRestaurants({
      queryPage: page,
      queryCategoryId: categoryId,
    });
  },
  beforeRouteUpdate (to, from, next) {
      const { page = '', categoryId = '' } = to.query

      this.fetchRestaurants({
          queryPage: page,
          queryCategoryId: categoryId
      })

      next()
  }
};
</script>
