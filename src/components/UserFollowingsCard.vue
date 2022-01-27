<template>
  <div class="card">
      <div class="card-header">
        <strong>{{ followingsAmount }}</strong> followings (追蹤者)
      </div>
      <div class="card-body">
          <a :href="'/users/' + following.id" v-for="following in followings" :key="following.id">
              <img :src="following.image" width="60" height="60" class="avatar">
          </a>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    followings: {
      Type: Array,
      required: true
    },
    followingsAmount: {
      Type: Number,
      required: true
    },
  },
}
</script>