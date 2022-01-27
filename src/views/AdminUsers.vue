<template>
  <div class="container py-5">
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-if="!user.isAdmin">user</td>
          <td v-if="user.id !== currentUser.id">
            <button type="button" class="btn btn-link" v-if="user.isAdmin" @click.stop.prevent="updateRole(user.id)">set as user</button>
            <button type="button" class="btn btn-link" v-if="!user.isAdmin" @click.stop.prevent="updateRole(user.id)">set as admin</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";

const dummyDate = {
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
    },
  ],
};

const dummyCurrentUser = {
  id: 1,
  name: "root",
  email: "root@example.com",
  image: null,
  isAdmin: true,
};

export default {
  components: {
    AdminNav,
  },
  data () {
    return {
      users: [],
      currentUser: ''
    }
  },
  methods: {
    fetchUsers () {
      // todo: api
      this.users = dummyDate.users
    },
    fetchCurrentUser () {
      // todo: api
      this.currentUser = dummyCurrentUser
    },
    updateRole (userId) {
      // console.log(userId)
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }

        return user
      })
    }
  },
  created () {
    this.fetchUsers()
    this.fetchCurrentUser()
  }
};
</script>
