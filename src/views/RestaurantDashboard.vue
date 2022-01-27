<template>
<div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Chauncey Botsford",
    tel: "884-851-9251 x7081",
    address: "75463 Mafalda Mountains",
    opening_hours: "08:00",
    description:
      "Quas dolores quasi sit sed enim non libero natus in.\nNemo inventore rerum.\nBlanditiis natus voluptates itaque voluptatum ullam non necessitatibus ut.\nCumque maxime et quis.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=64.46318632367279",
    viewCounts: 1,
    createdAt: "2022-01-24T06:41:15.000Z",
    updatedAt: "2022-01-25T06:42:12.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Voluptatem asperiores doloremque ipsa voluptatibus eos corporis rerum nam impedit.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-01-24T06:41:15.000Z",
        updatedAt: "2022-01-24T06:41:15.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$wUNkfq7GzzBIoeCRC39V2elCpVqRdAdycw.hfHeSUwIemY2k2pLaO",
          isAdmin: true,
          image: null,
          createdAt: "2022-01-24T06:41:15.000Z",
          updatedAt: "2022-01-24T06:41:15.000Z",
        },
      },
      {
        id: 101,
        text: "Unde sunt ipsum.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-01-24T06:41:15.000Z",
        updatedAt: "2022-01-24T06:41:15.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$wUNkfq7GzzBIoeCRC39V2elCpVqRdAdycw.hfHeSUwIemY2k2pLaO",
          isAdmin: true,
          image: null,
          createdAt: "2022-01-24T06:41:15.000Z",
          updatedAt: "2022-01-24T06:41:15.000Z",
        },
      },
      {
        id: 51,
        text: "Cupiditate suscipit sed aperiam ipsam praesentium velit quisquam.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-01-24T06:41:15.000Z",
        updatedAt: "2022-01-24T06:41:15.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$WkJFF1iqKCVBF7kHmj9s3.WXCKrRFr2oSJvBXUIY38gA9kaGNph9S",
          isAdmin: false,
          image: null,
          createdAt: "2022-01-24T06:41:15.000Z",
          updatedAt: "2022-01-24T06:41:15.000Z",
        },
      },
    ],
  },
};

export default {
  data () {
    return {
      restaurant: ''
    }
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = {
        ...dummyData.restaurant,
        categoryName: dummyData.restaurant.Category.name,
        commentsLength: dummyData.restaurant.Comments.length
      }
    }
  },
  created () {
    this.fetchRestaurant()
  }
};
</script>
