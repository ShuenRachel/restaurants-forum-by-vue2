<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <RestaurantTopCard 
      v-for="restaurant in restaurants" 
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs.vue";
import RestaurantTopCard from "./../components/RestaurantTopCard.vue";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Alycia Roob II",
      tel: "740-430-6756",
      address: "81142 Glover Turnpike",
      opening_hours: "08:00",
      description: "Sunt est aut. Unde facilis aut voluptas consequatu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.57614975124945",
      viewCounts: 0,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Jedediah Simonis",
      tel: "(128) 771-2249",
      address: "60301 Reinger Port",
      opening_hours: "08:00",
      description: "deserunt",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.21010010537083",
      viewCounts: 0,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Vance Balistreri",
      tel: "1-450-859-8657",
      address: "93511 Goldner Port",
      opening_hours: "08:00",
      description: "incidunt ea aliquid",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.44632309269077",
      viewCounts: 0,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Craig Graham",
      tel: "(517) 031-8060",
      address: "88665 Merritt Stravenue",
      opening_hours: "08:00",
      description: "ipsam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.187394636971645",
      viewCounts: 0,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Dalton Mraz",
      tel: "546-942-2342 x7310",
      address: "833 Bahringer Circles",
      opening_hours: "08:00",
      description: "illo",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.10364319357709",
      viewCounts: 0,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Elijah Padberg",
      tel: "1-214-761-2825",
      address: "133 Morissette Crescent",
      opening_hours: "08:00",
      description: "Quibusdam aliquid est aliquid blanditiis distincti",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.03221215987294",
      viewCounts: 0,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Reva Fritsch",
      tel: "(918) 519-6074 x484",
      address: "86923 Funk Rapids",
      opening_hours: "08:00",
      description: "aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.95059369407755",
      viewCounts: 0,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Madaline Berge",
      tel: "(161) 258-9486",
      address: "7968 Murl Port",
      opening_hours: "08:00",
      description: "Molestias accusantium occaecati facilis ipsum fugi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.097481253919568",
      viewCounts: 0,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Guido Kerluke",
      tel: "(053) 097-1192 x5981",
      address: "1728 Germaine Union",
      opening_hours: "08:00",
      description: "Asperiores consequatur voluptatibus aspernatur. As",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.360390496323398",
      viewCounts: 0,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Sherwood Kautzer",
      tel: "(249) 853-2918 x764",
      address: "42882 Schiller Circles",
      opening_hours: "08:00",
      description: "Nobis totam architecto enim.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.42831377285809",
      viewCounts: 0,
      createdAt: "2022-01-24T06:41:15.000Z",
      updatedAt: "2022-01-24T06:41:15.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
    RestaurantTopCard,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
  },
  created() {
    this.fetchRestaurants();
  },
};
</script>
