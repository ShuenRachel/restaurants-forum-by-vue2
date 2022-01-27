<template>
  <div class="container py-5">
    <NavTabs />
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- rest-card -->
      <RestaurantCard 
        v-for='restaurant in restaurants' 
        :key='restaurant.id' 
        :initialRestaurant='restaurant' 
      />
    </div>

    <RestaurantsPagination
      :v-if="totalPage > 1"
      :current-page="currentPage"
      :totalPage="totalPage"
      :previousPage="previousPage"
      :nextPage="nextPage"
      :categoryId="categoryId"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPill.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Chauncey Botsford",
            "tel": "884-851-9251 x7081",
            "address": "75463 Mafalda Mountains",
            "opening_hours": "08:00",
            "description": "Quas dolores quasi sit sed enim non libero natus i",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=64.46318632367279",
            "viewCounts": 0,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Odie Adams",
            "tel": "360-710-0298",
            "address": "29758 Koepp Hollow",
            "opening_hours": "08:00",
            "description": "dignissimos",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.27194450541442",
            "viewCounts": 0,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Cale Rohan",
            "tel": "159.618.9037 x45501",
            "address": "62979 Klein Camp",
            "opening_hours": "08:00",
            "description": "Unde odit perferendis eius autem soluta. Optio adi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.55641079178861",
            "viewCounts": 0,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Mrs. Linda Durgan",
            "tel": "222.007.2068 x256",
            "address": "8697 Erdman Extension",
            "opening_hours": "08:00",
            "description": "Deserunt blanditiis occaecati pariatur itaque eos ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.41795319455915",
            "viewCounts": 0,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Marcelino Hermann DDS",
            "tel": "789.363.0615 x69637",
            "address": "5662 Nelle Mission",
            "opening_hours": "08:00",
            "description": "Asperiores architecto necessitatibus. Cum velit ut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.195978472437226",
            "viewCounts": 0,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Max Bahringer",
            "tel": "690.177.1321",
            "address": "41259 Harber Street",
            "opening_hours": "08:00",
            "description": "eaque",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=64.68757005011396",
            "viewCounts": 0,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Ivy Jones",
            "tel": "986.066.9332",
            "address": "357 Casper Cliff",
            "opening_hours": "08:00",
            "description": "non hic beatae",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.049423207947626",
            "viewCounts": 0,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Kennedi Stehr V",
            "tel": "1-924-126-2889 x62645",
            "address": "31193 Edmund Vista",
            "opening_hours": "08:00",
            "description": "Praesentium pariatur nulla sint neque quibusdam et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.2434016750002606",
            "viewCounts": 0,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Ms. Nathan Kuhic",
            "tel": "701.108.1291",
            "address": "39070 Shanny Views",
            "opening_hours": "08:00",
            "description": "Consequatur suscipit et facere quae possimus et. S",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.95497758143578",
            "viewCounts": 0,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Warren Howell",
            "tel": "(647) 578-4034",
            "address": "7503 Charlene Street",
            "opening_hours": "08:00",
            "description": "Aut voluptatem architecto.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.74646998630736",
            "viewCounts": 0,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    }
  },
  methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData

      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  },
  created () {
    this.fetchRestaurants()
  }
}
</script>