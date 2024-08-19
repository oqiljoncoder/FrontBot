<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
const sortedObjects = route.params.sortedObjects;


</script>

<template>
  <div class="bgColor">
    <div class="container pt-5 ">
      <div class="row">
        <div class="col-6 ">
          <h5>YOUR ORDER</h5>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <p >Edit</p>
        </div>
      </div>
      <div class="row d-flex justify-content-between" >
        <div class="col-6">
          <div class="row">
            <div class="col-3">
              <img src="@/assets/bubble-tea.gif" alt="">
            </div>
            <div class="col-9">
              <p class="mt-3">Coca-colla 2x</p>
            </div>
          </div>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <p class="mt-3">2$</p>
        </div>
      </div>
      <div class="row d-flex justify-content-between" >
        <div class="col-6">
          <div class="row">
            <div class="col-3">
              <img src="@/assets/cake.gif" alt="">
            </div>
            <div class="col-9">
              <p class="mt-3">Tort 3x</p>
            </div>
          </div>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <p class="mt-3">3 UZS</p>
        </div>
      </div>


      <div class="row mt-4">
        <div class="input-group mb-3 ">
          <input type="text" class="form-control" placeholder="Add comment" >
        </div>
      </div>


    </div>
    <div class="col-12 pt-4 ">
      <button class="btnOrder" >
        Pay 5$
      </button>
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 390px;
  }
  img {
    width: 3rem;
    border-radius: 1rem;
  }
  .btnOrder{
    border: none;
    position: fixed;
    bottom: 0px;
    right: 0px;
    width: 100%;
    padding: 1rem;
    background: rgb(29, 145, 25);
    font-weight: 700;
  }
</style>