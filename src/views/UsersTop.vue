<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UsersTopCard
        v-for="user in users"
        :key="user.id"
        :initial-user="user"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import UsersTopCard from "./../components/UsersTopCard.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$wUNkfq7GzzBIoeCRC39V2elCpVqRdAdycw.hfHeSUwIemY2k2pLaO",
      isAdmin: true,
      image: null,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$WkJFF1iqKCVBF7kHmj9s3.WXCKrRFr2oSJvBXUIY38gA9kaGNph9S",
      isAdmin: false,
      image: null,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$AcU.WzoKHvuiuIAVTqh4GO2x9gukwLz3IEFC0B0ra2vp2UyF.Q5/y",
      isAdmin: false,
      image: null,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

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
    fetchUsers() {
      const { users } = dummyData;

      this.users = users;
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
