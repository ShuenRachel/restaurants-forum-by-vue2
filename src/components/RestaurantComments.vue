<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div
      v-for="comment in restaurantComments"
      :key="comment.id"
    >
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleDeleteButton(comment.id)"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'user-profile', params: { id: comment.User.id }}">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from './../utils/mixin'
import commentsAPI from "./../apis/comments";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex"

export default {
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  methods: {
    async handleDeleteButton(commentId) {
      try {
        const { data } = await commentsAPI.delete({ commentId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$emit('after-delete-comment', commentId)
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法刪除評論，請稍後再試",
        });
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>