<template>
  <div class='bloc-modale' v-if='reveleScore'>
    <div class='overlay-game' v-on:click='toggleModaleScore'></div>
    <div class='modale card'>
      <div class='btn-modale-score' v-on:click='toggleModaleScore'></div>
      <h1 class='title-score'>Tableau des scores ☑️</h1>
      <div class='table-score'>
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
          <tr class='player-line t-body' v-for='(player, playerID) in data.players'>
            <td class='position'> {{ playerID + 1 }}</td>
            <td> {{ player.name }}</td>
            <td> {{ player.successRate }}%</td>
            <td>{{ player.tentative }}</td>
            <td> {{ player.timeLeft }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ModaleScore',
  props: ['reveleScore', 'toggleModaleScore'],
  setup() {
    const data = ref('');
    onUpdated(async () => {
      let promise = await useFetch('/api/player/getPlayer');
      data.value = promise.data.value;
    })
    return {
      data
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

  .title-score {
    margin-top: 4%;
  }

  .table-player {
    margin: 15px;
    font-size: 11px;
  }

  thead * {
    font-size: 12px;
  }

  .t-body * {
    padding: 5px;
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
    width: 50vw;
    height: 50vh;
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

  body, .bloc-modale, .overlay-game {
    overflow: hidden;
  }

  @media not all and (min-resolution:.001dpcm) {
    @supports (-webkit-appearance:none) {
      .table-score {
        max-width: 90%;
        margin: 0 auto;
      }
    }
  }
}


.bloc-modale {
  display: grid;
  place-items: center;
  width: 90%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
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
  text-align: center;
}


.table-player {
  max-width: 100vw;
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


.container-refresh button {
  padding: 10px;
}

.modale .card {
  width: 95%;
}

.title-score {
  text-align: center;
}

.table-score {
  display: flex;
  justify-content: center;
}

</style>



