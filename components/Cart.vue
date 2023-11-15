<template>
  <div class='bloc-modale-cart' >
      <div class="overlay-cart"></div>
        <div class='modale-cart'>
          <div class='content-cart'>
          <h1>Welcome to your cart</h1>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Cart',
  props: ['openCartModal'], 

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

  .overlay-cart {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  }


.modale-cart {
  background: #f1f1f1;
  padding: 50px;
  position: fixed;
}


</style>

