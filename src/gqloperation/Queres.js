import { gql } from "@apollo/client";

export const GET_USERS = gql `

query getAllUser {
    users {
      _id
      name
      email
      password
      isAdmin
    }
  }

`

export const GET_USER_BY_ID = gql `

query getuserById ( $userid : ID! ){
  user (_id : $userid){
    _id
    name
    email
    password
    isAdmin
  }
}

`

export const GET_FOODS = gql `

query getAllFoods {
  foods {
    _id
    name 
    img 
    quantity
    price 
    des 
    rating 
    review 
    stock 
  }
}


`

export const GET_FOOD_BY_ID = gql `

query getFoodsById ( $foodId : ID! ){
  food (_id : $foodId){
    _id
    name 
    img 
    quantity
    price 
    des 
    rating 
    review 
    stock 
  }
}

`

export const GET_ORDERS = gql `

query getAllorders {
  orders {
    _id
    userid
    foodItem {
        _id
    		name 
    		img 
    		quantity
   			price 
    		des 
    		rating 
    		review 
    		stock 
    }
    shippingAddress {
      country
      address
      postalCode
      phone
    }
    paymentMethod
    itemPrice
    totalPrice
    isPaid
    paidAt
    isDelivered
    devliveredAt
  }
}

`

export const GET_ORDER_BY_ID = gql `

query getOrdersByI ( $orderid : ID! ) {
  order(_id : $orderid){
    _id
    userid
    foodItem {
        _id
    		name 
    		img 
    		quantity
   			price 
    		des 
    		rating 
    		review 
    		stock 
    }
    paymentMethod
    itemPrice
    totalPrice
    isPaid
    paidAt
    isDelivered
    devliveredAt
  }
}

`

export const MY_ORDER = gql `

query myorder{
  myorders{
    _id
    userid
    foodItem {
        _id
    		name 
    		img 
    		quantity
   			price 
    		des 
    		rating 
    		review 
    		stock 
    }
    paymentMethod
    itemPrice
    totalPrice
    isPaid
    paidAt
    isDelivered
    devliveredAt
  }
}


`

// header will be describe the author order and find out {
//   "authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQ1YTkyZDY1NzkwZTE3MGZjMTBhMWEiLCJuYW1lIjoiS2F5ZXMiLCJwYXNzd29yZCI6IiQyYSQxMiR6WW9RR3FRV2pzSElQOFZ5OUlGNTBlNTdiZmVVLm1uSEdPamVrb1ljNWxHZTM0aHJTRThRRyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTgyNDkzMzgsImV4cCI6MTY1ODMzNTczOH0.I9oQUOt3DkPKB2L-pctB2_AWryqvsfQN0KL46VAJM_g"
// }