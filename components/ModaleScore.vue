<template>
  <div class='bloc-modale' v-if='reveleScore'>
    <div class='overlay-game' v-on:click='toggleModaleScore'></div>
    <div class='modale card'>
      <div class='btn-modale-score' v-on:click='toggleModaleScore'></div>
      <h1>Tableau des scores ☑️</h1>
      <div class='table'>
        <table class='table-player'>
          <thead>
          <tr class='player-line'>
            <td>Position</td>
            <td>Joueurs</td>
            <td>Succès</td>
            <td>Tentatives</td>
            <td>Temps</td>
          </tr>
          </thead>
          <tbody>
          <tr class='player-line t-body' v-for='(Player, PlayerID) in Players'>
            <td class='position'> {{ PlayerID + 1}}</td>
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

export default {
  name: 'ModaleScore',
  props: ['reveleScore', 'toggleModaleScore'],

  data() {
    return {
      Players: []
    }
  },
  beforeMount() {
    this.getPlayers()
  },
  methods: {
    async getPlayers() {
      let promise = await useFetch('/api/player')
      const data = promise.data.value
      this.Players = data.players
    }
  }
}
</script>
<style>

@media only screen and (max-width: 768.5px) {
  .btn-modale-score::before,
  .btn-modale-score::after {
    height: 20px;
  }

  .btn-modale-score {
    left: 85%;
    top: 2%;
  }

  .table-player {
    margin: 15px;
    font-size: 11px;
  }

  thead * {
    font-size: 12px;
  }
  .t-body * {
    padding: 10px;
  }
}

@media only screen and (min-width: 768.5px) {
  .btn-modale-score::before,
  .btn-modale-score:after {
    top: 40%;
    height: 33px;
    left: 15px;
  }

  .btn-modale-score {
    top: 0;
  }

  .table-player {
    margin: 100px;
  }

  thead * {
    font-size: 15px;
  }

  .t-body * {
    padding: 10px;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
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

.btn-modale-score {
  position: absolute;
  right: 25px;
  width: 25px;
  height: 25px;
  opacity: 0.3;
  z-index: 260;

}

.btn-modale-score:hover {
  opacity: 1;
}

.btn-modale-score:before,
.btn-modale-score:after {
  position: absolute;
  content: ' ';
  width: 2px;
  background-color: #333;
}

.btn-modale-score:before {
  transform: rotate(45deg);
}

.btn-modale-score:after {
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
  position: fixed;
}

.player-line td {
  align-items: center;
}


.table-player {
  width: 80%;
  height: 80%;
  border: solid 1px #74746e;
  border-radius: 30px;
}

thead * {
  font-family: Helvetica, serif !important;
  padding: 7px;
}

h1 {
  margin-top: 10%;
  display: flex;
  justify-content: center;
}

.table {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.container-refresh button {
  padding: 10px;
}

</style>



