<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ commentsAmount }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ favouriteRestaurantsAmount }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ followersAmount }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ followingsAmount }}</strong> followers (追隨者)
            </li>
          </ul>
          <p></p>
          <form action="/following/3" method="POST" style="display: contents">
            <button
              type="submit"
              class="btn btn-danger"
              v-if="isFollowed"
              @click.stop.prevent="handleUnfollowBtnClick"
            >
              取消追蹤
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="handleFollowBtnClick"
            >
              追蹤
            </button>
            <router-link
              :to="{ name: 'user-profile-edit', params: { id: profile.id } }"
              class="btn btn-primary"
            >
              edit
            </router-link>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      Type: Object,
      required: true,
    },
    commentsAmount: {
      Type: Number,
      required: true,
    },
    favouriteRestaurantsAmount: {
      Type: Number,
      required: true,
    },
    followersAmount: {
      Type: Number,
      required: true,
    },
    followingsAmount: {
      Type: Number,
      required: true,
    },
    isFollowed: {
      Type: Boolean,
      required: true,
    },
  },
  methods: {
    handleUnfollowBtnClick() {
      this.$emit("after-unfollow");
    },
    handleFollowBtnClick() {
      // todo: api
      this.$emit("after-follow");
    },
  },
};
</script>
