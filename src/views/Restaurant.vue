<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail.vue";
import RestaurantComments from "./../components/RestaurantComments.vue";
import CreateComment from "./../components/CreateComment.vue";

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
    updatedAt: "2022-01-25T06:42:12.650Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  isFavorited: false,
  isLiked: false,
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: null,
    isAdmin: true,
  }
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser,
    };
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("restaurantId:", restaurantId);

      const { restaurant, isFavorited, isLiked } = dummyData;
      const {
        id,
        name,
        tel,
        address,
        opening_hours: openingHours,
        description,
        image,
        Category,
        Comments,
      } = restaurant;

      this.restaurant = {
        id,
        name,
        categoryName: Category.name,
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      };

      this.restaurantComments = Comments;
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;

      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
};
</script>
