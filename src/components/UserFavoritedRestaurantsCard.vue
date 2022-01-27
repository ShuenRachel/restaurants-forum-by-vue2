<template>
  <div class="card">
    <div class="card-header"><strong>{{ favouriteRestaurantsAmount }}</strong> 收藏的餐廳</div>
    <div class="card-body">
      <a :href="'/restaurants/' + restaurant.id" v-for="restaurant in favouriteRestaurants" :key="restaurant.id">
        <img
          :src="restaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favouriteRestaurants: {
      Type: Array,
      required: true
    },
    favouriteRestaurantsAmount: {
      Type: Number,
      required: true
    },
  },
}
</script>