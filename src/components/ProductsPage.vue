<script setup>
import {computed, reactive, ref} from "vue";
import {useFetchProducts} from "@/stores/getProducts.js";

const productsOrder = reactive([])

let productsApiAllOne = computed(() => useFetchProducts().state.objects.sort((a, b) => {
  return a.category_id - b.category_id;
}))
useFetchProducts().productsGet()


let btnOrder = ref(false)
let productsApiAll = productsApiAllOne;
let searchResult = reactive([])
let foodName = ref('')
let isSearch = ref(0)
function searchFood() {
  searchResult.splice(0)
  isSearch = foodName.value.length

  productsApiAllOne.value.forEach((product) => {
    if (product.product_name.toLowerCase().indexOf(foodName.value.toLowerCase()) > -1){
      searchResult.push(product)
    }
  })
  productsApiAll = reactive(searchResult);
}
function productAdd(id) {
  btnOrder.value = true
  if (isSearch >= 0){
    productsApiAll.forEach((product) => {
      if (product.id === id){
        product.count = 1
      }
    })
  } else {
    productsApiAllOne.value.forEach((product) => {
      if (product.id === id){
        product.count = 1
      }
    })
  }

  console.log('one')
  console.log('Add')
}

function productPlus(id) {
  if (isSearch >= 0){
    productsApiAll.forEach((product) => {
      if (product.id === id){
        product.count ++
      }
    })
  } else {
    productsApiAllOne.value.forEach((product) => {
      if (product.id === id){
        product.count++
      }
    })
  }
  console.log('Plus')
}

function productMinus(id) {
  if (isSearch >= 0){
    productsApiAll.forEach((product) => {
      if (product.id === id){
        product.count--
      }
    })
  } else {
    productsApiAllOne.value.forEach((product) => {
      if (product.id === id){
        product.count--
      }
    })
  }

  console.log('Minus')
}

function productsOrderSave() {
  if (isSearch > 0){
    productsApiAll.forEach((product) => {
      if (product.count > 0) {
        productsOrder.push(product)
      }
    })
  } else {
    productsApiAllOne.value.forEach((product) => {
      if (product.count > 0) {
        productsOrder.push(product)
      }
    })
  }
}

function getImage(categoryName) {
  switch (categoryName) {
    case 'Burger':
      return 'src/assets/burger.gif'
    case 'Cake':
      return 'src/assets/cake.gif'
    case 'Fries':
      return 'src/assets/french-fries.gif'
    case 'Hotdog':
      return 'src/assets/hotdog.gif'
    case 'Pitta':
      return 'src/assets/taco.gif'
    case 'Pizza':
      return 'src/assets/pizza.gif'
    case 'Donut':
      return 'src/assets/donut.gif'
    case 'Popcorn':
      return 'src/assets/popcorn.gif'
    case 'Coke':
      return 'src/assets/bubble-tea.gif'
    case 'Icecream':
      return 'src/assets/ice-cream.gif'
    case 'Chips':
      return 'src/assets/chips.gif'
    case 'Cookie':
      return 'src/assets/cookie.gif'
    default:
      return 'src/assets/package.gif'
  }
}



</script>

<template>
  <div class="bgColor ">
    <div class="container ">
      <div class="input-group row fixed-top m-auto inputSearch pt-1">
        <input type="text" class="form-control col-12" placeholder="Search food " v-model="foodName" @input="searchFood">
      </div>
      <div class="row mb-5 py-4">
        <div class="col-4 item  " v-for="product in productsApiAll" :key="product.id">
          <span v-show="product.count" class="productCount">{{ product.count }}</span> <br>
          <img :src="getImage(product.category_name)" alt="" class="img">
          <span class="namePrice">{{ product.product_name }} <br> {{ product.price }} UZS</span> <br>
          <button class="btn" @click="productAdd(product.id)" v-show="!product.count">Add</button>
          <button @click="(productMinus(product.id))" v-show="product.count" class="btnMinus">-</button>
          <button @click="productPlus(product.id)" v-show="product.count" class="btnPlus">+</button>
        </div>

        <div class="col-12 pt-4 " v-for="product in productsApiAll" :key="product.id">
          <button v-show="product.count" class="btnOrder" @click="productsOrderSave" >
            <router-link to="/calculate" class="routerBtn" @click="productsOrderSave">VIEW ORDER</router-link>
          </button>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped>
.bgColor {
  background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);
  min-height: 1140px;
}
.inputSearch{
  width: 365px;
}
.productCount {
  background: rgb(248, 168, 24);
  color: white;
  padding: 0 5px;
  border-radius: 50%;
  margin-left: 2rem;
  position: relative;
  top: 15%;
  left: 15%;
}

.namePrice {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-family: sans-serif;
}

.container {
  max-width: 390px;
}

.routerBtn {
  text-decoration: none;
  color: #fff;
}

.img {
  width: 6rem;
  border-radius: 1rem;
}

.item {
  text-align: center;
  color: white;
  font-weight: bold;
}

.btnOrder {
  border: none;
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 100%;
  padding: 1rem;
  background: rgb(29, 145, 25);
  font-weight: 700;
}

.btnMinus, .btnPlus {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border: none;
  background: rgb(156, 4, 20);
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  transition: background .2s linear;
  margin: 0.1rem;
}

.btnPlus {
  background: rgb(248, 168, 24);
}

.btn {
  display: inline-block;
  padding: 0.3rem 1rem;
  border: none;
  background: rgb(248, 168, 24);
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  transition: background .2s linear;
}

.btn:hover,
.btnPlus:hover,
.btnMinus:hover {
  background: lightgreen;
}

</style>