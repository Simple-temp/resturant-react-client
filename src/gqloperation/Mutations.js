import { gql } from "@apollo/client";

export const LOGIN_USER = gql`

mutation loginuser ( $userInfo : loginUser! ){
    loginuser (loginUser : $userInfo){
      _id
      name
      email
      password
      isAdmin
      token
    }
  }
  

`
export const REGISTER_USER = gql`

mutation signupUser ( $userInfo : createUser! ){
    createuser( createUser : $userInfo){
      _id
      name
      email
      password
      isAdmin
      token
    }
}


`
export const UPDATE_USER = gql`

mutation updateuser ( $updateUser : updateUser! ){
    updateuser (updateUser : $updateUser ){
      name
      email
      password
      isAdmin
    }
  }

`

export const DELETE_USER = gql`

mutation deluser ( $userid : ID! ){
    deluser (_id : $userid){
      _id
      name
      email
      password
      isAdmin
    }
  }

`

export const CREATE_FOOD = gql`

mutation createfood ( $createFood : createFood! ){
    createfood(createFood : $createFood ){
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

export const UPDATE_FOOD = gql`

mutation updatefood ( $updateFood : updateFood! ){
    updatefood(updateFood : $updateFood){
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

export const DELETE_FOOD = gql`

mutation delfood ( $foodId : ID! ){
    delfood(_id : $foodId){
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
export const DELETE_ORDER = gql`

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

export const IS_PAID = gql`

mutation ispaid ( $orderId : ID! ){
    ispaid(_id : $orderId){
      isPaid
    }
  }

`

export const IS_DELIVERED = gql`

mutation isdelivered ( $orderId : ID! ){
    isdelivered(_id : $orderId){
      isDelivered
    }
  }

`