<template>
  <main>
    <div class="album py-5 bg-light">
      <div class="container">
        <!-- profile card -->
        <UserProfileCard
          :profile="profile"
          :comments-amount="commentsAmount"
          :favourite-restaurants-amount="favouriteRestaurantsAmount"
          :followers-amount="followersAmount"
          :followings-amount="followingsAmount"
          :isFollowed="isFollowed"
          @after-follow="afterFollow"
          @after-unfollow="afterUnfollow"
        />

        <div class="row">
          <div class="col-md-4">
            <UserFollowingsCard
              :followings="followings"
              :followings-amount="followingsAmount"
            />
            <br />
            <UserFollowersCard
              :followers="followers"
              :followers-amount="followersAmount"
            />
          </div>
          <div class="col-md-8">
            <UserCommentsCard
              :comments="comments"
              :comments-amount="commentsAmount"
            />
            <br />
            <UserFavoritedRestaurantsCard
              :favourite-restaurants="favouriteRestaurants"
              :favourite-restaurants-amount="favouriteRestaurantsAmount"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard.vue";
import UserFollowingsCard from "./../components/UserFollowingsCard.vue";
import UserFollowersCard from "./../components/UserFollwersCard.vue";
import UserCommentsCard from "./../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard.vue"
import usersAPI from "./../apis/users"
import { Toast } from './../utils/helpers'

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data() {
    return {
      profile: {},
      comments: [],
      commentsAmount: 0,
      favouriteRestaurants: [],
      favouriteRestaurantsAmount: 0,
      followers: [],
      followersAmount: 0,
      followings: [],
      followingsAmount: 0,
      isFollowed: false,
    };
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data, statusText } = await usersAPI.get({ userId })

        const { profile, isFollowed } = data;

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        const { Comments, FavoritedRestaurants, Followers, Followings } = profile;

        this.profile = profile;
        this.comments = Comments;
        this.commentsAmount = Comments.length;
        this.favouriteRestaurants = FavoritedRestaurants;
        this.favouriteRestaurantsAmount = FavoritedRestaurants.length;
        this.followers = Followers;
        this.followersAmount = Followers.length;
        this.followings = Followings;
        this.followingsAmount = Followings.length;
        this.isFollowed = isFollowed;
      } catch (error) {
          Toast.fire({
            type: 'error',
            title: '無法取得使用者資料，請稍後再試'
          })
      }
    },
    afterFollow() {
      this.isFollowed = true;
    },
    afterUnfollow() {
      this.isFollowed = false;
    },
  },
  created() {
    const { id } = this.$route.params
    this.fetchUser(id);
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  }
};
</script>
