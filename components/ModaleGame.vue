<template>
 <div class='bloc-modale' v-if='revele'>
   <div class='overlay-game' v-on:click='toggleModale'></div>
   <div class='modale card'>
     <div class='btn-modale' v-on:click='toggleModale'></div>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur ea enim eveniet id impedit inventore molestias quis quos voluptas. Ducimus facilis ipsam iste minus quam quo saepe tempore veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias architecto, asperiores dolorem, doloribus excepturi fugiat in laudantium minima nesciunt nulla odio omnis quidem quod repellendus repudiandae suscipit. Dolores, tempora?</p>
     <div>
     </div>

   </div>
 </div>
</template>
<script>
export default {
  name: 'ModalGame',
  props: ['revele','toggleModale']
}
</script>
<style>

.bloc-modale {
  position: fixed;
  top: 0;
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

.btn-modale {
  position: absolute;
  right: 25px;
  top: 25px;
  width: 25px;
  height: 25px;
  opacity: 0.3;

}

.btn-modale:hover {
  opacity: 1;
}
.btn-modale:before,
.btn-modale:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.btn-modale:before {
  transform: rotate(45deg);
}
.btn-modale:after {
  transform: rotate(-45deg);
}

.overlay-game {
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.modale {
  background: #f1f1f1;
  padding: 50px;
  position: fixed;
}
</style>



