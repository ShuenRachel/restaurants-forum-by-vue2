<template>
  <div class="card">
    <div class="card-header"><strong>{{ commentsAmount }}</strong> 已評論餐廳</div>
    <div class="card-body">
      <a :href="'/restaurants/' + comment.RestaurantId" v-for="comment in comments" :key="comment.id">
        <img
          :src="comment.Restaurant.image"
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
    comments: {
      Type: Array,
      required: true
    },
    commentsAmount: {
      Type: Number,
      required: true
    },
  },
}
</script>