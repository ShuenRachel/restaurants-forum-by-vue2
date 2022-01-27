<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import NewestRestaurants from './../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Chauncey Botsford",
            "tel": "884-851-9251 x7081",
            "address": "75463 Mafalda Mountains",
            "opening_hours": "08:00",
            "description": "Quas dolores quasi sit sed enim non libero natus in.\nNemo inventore rerum.\nBlanditiis natus voluptates itaque voluptatum ullam non necessitatibus ut.\nCumque maxime et quis.",
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
            }
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
            }
        },
        {
            "id": 3,
            "name": "Cale Rohan",
            "tel": "159.618.9037 x45501",
            "address": "62979 Klein Camp",
            "opening_hours": "08:00",
            "description": "Unde odit perferendis eius autem soluta. Optio adipisci libero deserunt est repudiandae nam quasi error cum. Accusantium iste et minus delectus rerum.",
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
            }
        },
        {
            "id": 4,
            "name": "Mrs. Linda Durgan",
            "tel": "222.007.2068 x256",
            "address": "8697 Erdman Extension",
            "opening_hours": "08:00",
            "description": "Deserunt blanditiis occaecati pariatur itaque eos exercitationem perspiciatis repellat fugiat.",
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
            }
        },
        {
            "id": 5,
            "name": "Marcelino Hermann DDS",
            "tel": "789.363.0615 x69637",
            "address": "5662 Nelle Mission",
            "opening_hours": "08:00",
            "description": "Asperiores architecto necessitatibus. Cum velit ut ipsum sint nisi at placeat. Laudantium numquam quas et. Facere nihil in libero exercitationem ut qui. Corporis voluptatem nulla consequuntur quae sunt et esse adipisci non.\n \rMagni tempora quia alias quia magni. Ipsa sint dignissimos aut. Exercitationem qui voluptatem sit officiis cumque magnam quia qui. Officia alias voluptatem quo ut aut. Accusantium repudiandae cum molestiae sed atque. Sequi autem aut voluptas mollitia.\n \rEum dolor et. Omnis praesentium amet. Perferendis sed nam repellendus qui dolorum accusantium. Sit non est voluptatem cum ipsa omnis repellendus nisi. Tenetur iste et tempora. Nulla natus iste minus qui ex et.",
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
            }
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
            }
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
            }
        },
        {
            "id": 8,
            "name": "Kennedi Stehr V",
            "tel": "1-924-126-2889 x62645",
            "address": "31193 Edmund Vista",
            "opening_hours": "08:00",
            "description": "Praesentium pariatur nulla sint neque quibusdam et voluptates facilis aut.",
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
            }
        },
        {
            "id": 9,
            "name": "Ms. Nathan Kuhic",
            "tel": "701.108.1291",
            "address": "39070 Shanny Views",
            "opening_hours": "08:00",
            "description": "Consequatur suscipit et facere quae possimus et. Sed quibusdam non dolores. Nobis ut culpa voluptatum doloribus. Aut repellat quibusdam.",
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
            }
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
            }
        }
    ],
    "comments": [
        {
            "id": 13,
            "text": "Fugit eum sit.",
            "UserId": 1,
            "RestaurantId": 13,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$wUNkfq7GzzBIoeCRC39V2elCpVqRdAdycw.hfHeSUwIemY2k2pLaO",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "Restaurant": {
                "id": 13,
                "name": "Jocelyn Tillman",
                "tel": "297-535-4932 x215",
                "address": "6615 Huels Alley",
                "opening_hours": "08:00",
                "description": "Assumenda eveniet saepe hic voluptates qui similique rerum modi non. Sit consequatur deleniti sapiente est ipsa quas exercitationem. Occaecati hic facilis. Ipsam reiciendis velit non rerum sint dolorum voluptates ex. Porro dolores qui quisquam unde ullam sunt voluptatem mollitia voluptatem.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.79510063301622",
                "viewCounts": 0,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 29,
            "text": "Necessitatibus qui sapiente qui a magni dolor alias id.",
            "UserId": 1,
            "RestaurantId": 29,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$wUNkfq7GzzBIoeCRC39V2elCpVqRdAdycw.hfHeSUwIemY2k2pLaO",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "Restaurant": {
                "id": 29,
                "name": "Edythe Lakin",
                "tel": "(868) 067-5994",
                "address": "8805 Monica Terrace",
                "opening_hours": "08:00",
                "description": "Error cum et praesentium placeat eos ut doloremque animi sit. Impedit temporibus deleniti nam sed similique eveniet veniam. Repudiandae corrupti explicabo officiis ab unde. Officia sed aut. Quisquam officia consequatur dicta.\n \rPerspiciatis perspiciatis dicta corrupti eos sunt in quis a quia. Autem sit libero ratione aut. Odio nobis quod consequatur perspiciatis harum pariatur voluptas sequi. Dolor est ut neque at aut quam. Deserunt eos nobis consequatur qui est. Qui eveniet cumque minima.\n \rNatus id cumque quia praesentium eius excepturi. Amet est odit cupiditate. Est quis ut voluptate enim autem.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.714165336473865",
                "viewCounts": 0,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 72,
            "text": "Dolor iste et.",
            "UserId": 1,
            "RestaurantId": 22,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$wUNkfq7GzzBIoeCRC39V2elCpVqRdAdycw.hfHeSUwIemY2k2pLaO",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "Restaurant": {
                "id": 22,
                "name": "Dr. Jude Collier",
                "tel": "1-853-184-3920 x8998",
                "address": "8107 Kohler Throughway",
                "opening_hours": "08:00",
                "description": "Repudiandae modi qui assumenda voluptatem tenetur et. Ipsa dolores aperiam quibusdam ab. Ut maxime dolorem iusto quasi itaque et cumque.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.240969130543654",
                "viewCounts": 0,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 84,
            "text": "Odio quia minima facere ipsum consequatur dolorum.",
            "UserId": 1,
            "RestaurantId": 34,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$wUNkfq7GzzBIoeCRC39V2elCpVqRdAdycw.hfHeSUwIemY2k2pLaO",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "Restaurant": {
                "id": 34,
                "name": "Delmer Konopelski",
                "tel": "608-240-1600 x263",
                "address": "42929 Hildegard Keys",
                "opening_hours": "08:00",
                "description": "Consequuntur error quia vel labore itaque labore tenetur. Occaecati libero nostrum quia omnis. Assumenda non tenetur enim totam adipisci. Voluptatum velit corrupti.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.52105710447911",
                "viewCounts": 0,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 106,
            "text": "Magni ullam odit sit sequi nulla eaque blanditiis.",
            "UserId": 1,
            "RestaurantId": 6,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$wUNkfq7GzzBIoeCRC39V2elCpVqRdAdycw.hfHeSUwIemY2k2pLaO",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 5
            }
        },
        {
            "id": 127,
            "text": "Similique et consequatur.",
            "UserId": 1,
            "RestaurantId": 27,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$wUNkfq7GzzBIoeCRC39V2elCpVqRdAdycw.hfHeSUwIemY2k2pLaO",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "Restaurant": {
                "id": 27,
                "name": "Raymond Gusikowski",
                "tel": "810.990.0933",
                "address": "886 Clay Crossroad",
                "opening_hours": "08:00",
                "description": "Maxime corrupti laboriosam. Reprehenderit tenetur magnam id. Ut voluptas sequi vel unde temporibus tempore non. Tempore vel quas voluptatibus id dolorem et consequatur ipsam. Voluptas nulla dolores culpa officiis. Vero quibusdam eveniet facilis aspernatur sapiente aperiam beatae.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.75005530789798",
                "viewCounts": 0,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 6,
            "text": "Error et earum possimus voluptas nesciunt pariatur provident dolorem.",
            "UserId": 2,
            "RestaurantId": 6,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$WkJFF1iqKCVBF7kHmj9s3.WXCKrRFr2oSJvBXUIY38gA9kaGNph9S",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 5
            }
        },
        {
            "id": 35,
            "text": "Voluptas qui natus nisi eveniet nisi voluptatem possimus qui enim.",
            "UserId": 2,
            "RestaurantId": 35,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$WkJFF1iqKCVBF7kHmj9s3.WXCKrRFr2oSJvBXUIY38gA9kaGNph9S",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "Restaurant": {
                "id": 35,
                "name": "Kraig Hintz",
                "tel": "1-675-228-1691 x566",
                "address": "283 Jonathon Square",
                "opening_hours": "08:00",
                "description": "et",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.899930695488806",
                "viewCounts": 0,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 63,
            "text": "Vero omnis itaque vel qui cum eius et quaerat quis.",
            "UserId": 2,
            "RestaurantId": 13,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$WkJFF1iqKCVBF7kHmj9s3.WXCKrRFr2oSJvBXUIY38gA9kaGNph9S",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "Restaurant": {
                "id": 13,
                "name": "Jocelyn Tillman",
                "tel": "297-535-4932 x215",
                "address": "6615 Huels Alley",
                "opening_hours": "08:00",
                "description": "Assumenda eveniet saepe hic voluptates qui similique rerum modi non. Sit consequatur deleniti sapiente est ipsa quas exercitationem. Occaecati hic facilis. Ipsam reiciendis velit non rerum sint dolorum voluptates ex. Porro dolores qui quisquam unde ullam sunt voluptatem mollitia voluptatem.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.79510063301622",
                "viewCounts": 0,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 91,
            "text": "Sed sed perspiciatis aut a impedit in.",
            "UserId": 2,
            "RestaurantId": 41,
            "createdAt": "2022-01-24T06:41:15.000Z",
            "updatedAt": "2022-01-24T06:41:15.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$WkJFF1iqKCVBF7kHmj9s3.WXCKrRFr2oSJvBXUIY38gA9kaGNph9S",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z"
            },
            "Restaurant": {
                "id": 41,
                "name": "Sherwood Kautzer",
                "tel": "(249) 853-2918 x764",
                "address": "42882 Schiller Circles",
                "opening_hours": "08:00",
                "description": "Nobis totam architecto enim.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.42831377285809",
                "viewCounts": 0,
                "createdAt": "2022-01-24T06:41:15.000Z",
                "updatedAt": "2022-01-24T06:41:15.000Z",
                "CategoryId": 4
            }
        }
    ]
}

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments.filter(comment => comment.Restaurant && comment.text)
    }
  }
}
</script>