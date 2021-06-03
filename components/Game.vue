<template>
  <div>

    <div class='game'>
      <h1 class='title'>Trouvez les bons fruits !! 🍑😎</h1>
      <p id='timer'>00:00</p>
      <div class='board'>
        <table>
          <tr id='gameline' class='gameline'></tr>
        </table>
      </div>
    </div>
    <div class='modale-win'>
      <div class='content'>
        <img src='https://media.giphy.com/media/4QFAH0qZ0LQnIwVYKT/giphy.gif' class='winner-img' alt='winner-img'>
        <div class='stat'>
          <p class='timeLeft'>Temps :</p>
          <p class='tentative'>Nombre de tentatives :</p>
          <p class='rate'>Tx de réussite : </p>
        </div>
        <div class='congratulation'>
          <p> Good Game !! Découvrez, maintenant si vous êtes le meilleur 🥇</p>
          <p> Pour cela, entrez votre nom</p>
          <form v-on:submit.prevent='addScore'>
            <input type='text' v-model='text.name'>
            <button>Enregistré</button>
          </form>
          <button v-on:click='tryAgain'>Recommencer</button>

        </div>

      </div>
    </div>
  </div>
</template>


<script>
import * as firebase from 'firebase'

let app= firebase.default;
let db = app.database();
let text = db.ref('Player')
const timer = document.querySelector('#timer')
let tentative = 0;
let successRate =  18 / tentative * 100


export default {
  name: 'Game', firebase: {
    Player : name,tentative,successRate,

  },
  data(){

    return{

      text:{
        name:'',
        tentative: '',
        successRate: '',
      }
    }
  },
  mounted: function() {
    this.startGame()
  },
  methods: {
    tryAgain() {

      let tr = document.querySelector('.gameline');
      let win = document.querySelector('.modale-win');
      let allTd = document.querySelectorAll('td');

      timer.textContent = '00:00'

      win.style.visibility = 'hidden'
      allTd.forEach(td => {
        tr.removeChild(td)
      })

      this.startGame()
    },
    addScore: function(){
      let successRate =  18 / tentative * 100
      text.push(this.text.name);
      this.text.name = '';
      this.text.tentative = tentative.toString();
      this.text.successRate = Math.round(successRate).toString();
      text.push(this.text.tentative);
      text.push(this.text.successRate);

      alert('success')
    },
    showScore: function(){
    },
    startGame: function() {

      let score = 0;
      let caseNumber = 0;

      let card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
      let double = 0;
      let selection = 0;
      let gameTime = 0;
      const line = document.querySelector('.gameline');
      const modalWin = document.querySelector('.modale-win');
      const texTimeLeft = document.querySelector('.timeLeft');
      const textTentative = document.querySelector('.tentative');
      const rate = document.querySelector('.rate');
      const timer = document.querySelector('#timer')





      while (double < 2) {
        console.log(card.length)
        for (let i = 0; i < card.length; i++) {
          let td = document.createElement('td')
          td.innerHTML = '<img src=\'\' alt=\'fruit\' class=\'fruit\'>'
          line.appendChild(td)
          td.lastElementChild.src = 'game/' + (card[i]) + '.png'
          td.lastElementChild.id = card[i].toString()
          td.lastElementChild.className = 1 + caseNumber.toString()
          td.lastElementChild.classList.add('fruit')


          td.addEventListener('click', Event => {
            clickAndCheck(Event)
          })
          if (i === 17) {
            double++
          }

        }
      }
      let fruitCase = line.children
      let fruitCaseArr = Array.prototype.slice.call(fruitCase)
      const fruits = document.querySelectorAll('.fruit')

      while (fruitCaseArr.length) {
        line.append(fruitCaseArr.splice(Math.floor(Math.random() * fruitCaseArr.length), 1)[0])
      }

      hideAllFruit()


      function hideAllFruit() {
        fruits.forEach(fruit => {
          fruit.style.visibility = 'hidden'
        })
      }


      function clickAndCheck(Event) {


        let clicked = Event.currentTarget.firstChild
        let choice1
        let choice2

        switch (true) {
          case (selection === 0) : {
            if (tentative !== 0) {
              choice1 = document.querySelector('.choice1')
              choice2 = document.querySelector('.choice2')
              choice1.classList.remove('choice1')
              choice2.classList.remove('choice2')
            } else {
              initTimer()
            }

            clicked.classList.add('choice1')
            selection++
            break
          }
          case (selection === 1) : {
            clicked.classList.add('choice2')
            tentative++
            selection++
            console.log('tentative' + tentative)

            break
          }
        }
        console.log(selection)

        if (selection === 2) {
          choice1 = document.querySelector('.choice1')
          choice2 = document.querySelector('.choice2')

          console.log(choice2.src)

          if (choice1.src === choice2.src && choice1.classList !== choice2.classList) {
            score = 18;
            console.log('identical' + score)
            choice1.style.visibility = 'visible'
            choice2.style.visibility = 'visible'
            selection = 0


            if (score === 18) {

              let successRate =  18 / tentative * 100

              stopTimer()
              modalWin.style.visibility = 'visible';
              texTimeLeft.textContent = 'Temps :' + ' ' + timer.textContent;
              textTentative.textContent = 'Nombre de tentatives :' + ' ' + tentative;
              rate.textContent = 'Tx de réussite :' + ' ' + Math.round(successRate)  + '%';
              console.log(successRate);
            }
          } else {
            console.log('false')
            selection = 0
          }
        }

        function initTimer() {
          let time = 0

          function timeIt() {
            time++
            timer.textContent = convertSeconds(time)
            toString(timer)
          }

          gameTime = setInterval(timeIt, 1000)

          function convertSeconds(s) {
            const min = Math.floor(s / 60)
            const sec = s % 60
            return makeMeTwoDigits(min) + ':' + makeMeTwoDigits(sec)
          }

          function makeMeTwoDigits(n) {
            return (n < 10 ? '0' : '') + n
          }
        }

        function stopTimer() {
          clearInterval(gameTime)
        }
      }
    }
  }
}


</script>


<style>

@media only screen and (max-width: 768.5px) {
  .fruit {
    height: 52px;
    width: 52px;
  }

  .gameline > td {
    height: 52px;
    width: 52px;
  }

  .gameline {
    width: 350px;
  }

  .title {
    margin-top: 5%;
    font-size: 18px;
  }

  #timer {
    font-size: 15px;
  }


  .content {
    margin-left: 10%;
    margin-right: 10%;
  }

  .winner-img {
    width: 100%;
  }


  }

@media only screen and (min-width: 768.5px) {

  .winner-img {
    width: 70%;
  }

  .gameline {
    width: 490px;
  }

  .fruit {
    height: 67.27px;
    width: 67.27px;
  }

  .gameline > td {
    height: 67.27px;
    width: 67.27px;
  }


  #timer {
    font-size: 30px;
  }

  .stat {
    margin-right: 30%;
    margin-top: 2%;
  }
  .content {
    margin-left: 25%;
  }

  .congratulation {
    margin-right: 30%;
  }
}

.choice1 {
  visibility: visible !important;
  transition: visibility 1s ease-in-out;

}

.choice2 {
  visibility: visible !important;
  transition: visibility 1s ease-in-out;

}

.modale-win {
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 5%;
  background-color: #f1f1f1;

}
.stat {
  display: flex;
  justify-content: space-around;
  background-color: #f1f1f1;
  border: #504e4c solid 1px;
  border-radius: 20px;
  padding: 10px;
  font-family: Helvetica, serif !important;
  font-size: 12px;
}


.congratulation {
  text-align: center;
  margin-top: 2%;

}

.content {
  position: relative;

}

.board {
  display: flex;
  justify-content: center;
}

h1 {
  display: flex;
  justify-content: center;
}

table {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
}


.gameline > td {

  float: left;
  text-align: center;
  background-color: palegoldenrod;
  color: #fff;
  border-radius: 4px;
  margin: 3px;
  cursor: pointer;
}

.winner-img {
  height: auto;
}

.gameline {
  grid-column: 2/3;
}


#timer {
  display: flex;
  justify-content: center;
  font-family: Helvetica, serif;
  background-color: aliceblue;
  border-radius: 30px;
}

.fruit {
  border-radius: 25px;
}




</style>

