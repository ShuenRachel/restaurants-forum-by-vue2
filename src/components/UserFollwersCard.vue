<template>
  <div class="card">
      <div class="card-header">
        <strong>{{ followersAmount }}</strong> followers (追蹤者)
      </div>
      <div class="card-body">
          <a :href="'/users/' + follower.id" v-for="follower in followers" :key="follower.id">
              <img :src="follower.image" width="60" height="60" class="avatar">
          </a>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    followers: {
      Type: Array,
      required: true
    },
    followersAmount: {
      Type: Number,
      required: true
    },
  },
}
</script>