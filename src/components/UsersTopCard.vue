<template>
  <div class="col-3">
    <a href="#">
      <img
        src="http://via.placeholder.com/300x300?text=No+Image"
        width="140px"
        height="140px"
      />
    </a>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
    <p class="mt-3">
      <button 
        type="button" 
        class="btn btn-danger"
        v-if="user.isFollowed"
        @click.stop.prevent="unfollowUser"
      >
        取消追蹤
      </button>
      <button 
        type="button" 
        class="btn btn-primary"
        v-else
        @click.stop.prevent="followUser"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUser
    }
  },
  methods: {
    followUser() {
      this.user = {
        ...this.user,
        isFollowed: true
      }
    },
    unfollowUser() {
      this.user = {
        ...this.user,
        isFollowed: false
      }
    },
  }
}
</script>
