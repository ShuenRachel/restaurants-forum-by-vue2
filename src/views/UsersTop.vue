<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UsersTopCard v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import UsersTopCard from "./../components/UsersTopCard.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
    UsersTopCard,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await usersAPI.getTopUsers();
        const { data } = response

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }
        
        this.users = data.users.map(user => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed
        }));
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });

        console.log(error);
      }
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
