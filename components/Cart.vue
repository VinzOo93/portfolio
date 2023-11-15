<template>
  <div class='bloc-modale-cart' >
      <div class='overlay' v-on:click='openCartModal' ></div>
        <div class='modale-cart'>
          <div class='btn-modale' v-on:click='openCartModal'></div>
          <div class='content-cart'>
          <h1>Welcome to your cart</h1>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Cart',
  props: ["openCartModal", "reveleModalCart"], 

}
</script>

<style>
.bloc-modale-cart {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}


.modale-cart {
  background: #f1f1f1;
  padding: 50px;
  position: fixed;
}


</style>

