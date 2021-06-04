<template>
  <div class='bloc-modale' v-if='reveleScore'>
    <div class='overlay-game' v-on:click='toggleModaleScore'></div>
    <div class='modale card'>
      <div class='btn-modale' v-on:click='toggleModaleScore'></div>
      <h1>Tableau des scores ☑️</h1>
      <div class='table'>
        <table class='table-player'>
          <thead>
          <tr class='player-line'>
            <td>Joueurs</td>
            <td>succès %</td>
            <td>Tentatives</td>
            <td>Temps</td>
          </tr>
          </thead>
          <tbody>
          <tr class='player-line t-body' v-for='Player in Players'>
            <td> {{ Player.name }}</td>
            <td> {{ Player.successRate }}%</td>
            <td>{{ Player.tentative }}</td>
            <td> {{ Player.timeLeft }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div>
      </div>

    </div>
  </div>
</template>
<script>
import * as firebase from 'firebase'

let app = firebase.default
let db = app.database()
let data
export default {
  name: 'ModaleScore',
  props: ['reveleScore', 'toggleModaleScore'],

  data() {
    return {
      Players: []
    }
  }, async fetch() {

    db.ref().child('Player').get().then((e) => {
      this.Players = e.val()

      if (e.exists()) {
        console.log(e.val())
      } else {
        console.log('No data available')
      }
    }).catch((error) => {
      console.error(error)
    })
  }
}
</script>
<style>

@media only screen and (max-width: 768.5px) {
  .btn-modale::before,
  .btn-modale::after {
    height: 20px;
    left: 2%;
  }

  .btn-modale {
    top: 2%;
  }

}

@media only screen and (min-width: 768.5px) {
  .btn-modale::before,
  .btn-modale:after {
    top: 40%;
    height: 33px;
    left: 15px;
  }

  .btn-modale {
    top: 5%;
  }
}


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
  z-index: 250;
}

.btn-modale {
  position: absolute;
  right: 25px;
  width: 25px;
  height: 25px;
  opacity: 0.3;
  z-index: 260;

}

.btn-modale:hover {
  opacity: 1;
}

.btn-modale:before,
.btn-modale:after {
  position: absolute;
  content: ' ';
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
  background: rgba(0, 0, 0, 0.5);
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


.player-line {
  display: flex;
  justify-content: space-evenly;

}

.player-line td {
  align-items: center;
}


.table-player {
  width: 80%;
  height: 80%;
  margin: 100px;
  border: solid 1px #74746e;
  border-radius: 30px;
}

.t-body * {
  padding: 10px;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
}

thead *{
  font-size: 15px;
  font-family: Helvetica, serif !important;
}
h1 {
  margin-top: 15%;
  display: flex;
  justify-content: center;
}

.table {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}


</style>



