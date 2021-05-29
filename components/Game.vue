<template>
  <div>

    <div>
      <h2>Are you looking for some fruits ? 🍑😎</h2>
      <h3>Cliquez sur une case pour lancer le game !! 🚀</h3>

      <p id='timer'>00:00</p>
      <div class='board'>
        <table>
          <tr id='gameline' class='gameline'>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'Game',

  mounted: function() {
    this.startGame()
  },
  methods: {
    startGame: function() {
      let score = 0
      let caseNumber = 0


      let card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      let double = 0
      let selection = 0
      let tentative = 0


      const line = document.querySelector('.gameline')

      while (double < 2) {
        for (let i = 0; i < card.length; i++) {

          let td = document.createElement('td')
          td.innerHTML = '<img src=\'\' alt=\'fruit\' class=\'fruit\'>'
          line.appendChild(td)
          td.lastElementChild.src = 'game/' + (card[i]) + '.png'
          td.lastElementChild.id = card[i].toString()
          td.lastElementChild.className = 1 + caseNumber.toString()

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
      const fruits = document.querySelectorAll('img')

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
            score++
            console.log('identical' + score)
            choice1.style.visibility = 'visible'
            choice2.style.visibility = 'visible'
            selection = 0

            if (score === 18) {
              alert('You are the winner' + score)
            }
          } else {
            console.log('false')
            selection = 0
          }
        }

        function initTimer() {
          const timer = document.querySelector('#timer')
          let time = 0;

          function timeIt() {
            time ++;
            timer.textContent = convertSeconds(time);
            toString(timer);
          }

          setInterval(timeIt, 1000)


          function convertSeconds(s) {
            const min = Math.floor(s / 60)
            const sec = s % 60
            return makeMeTwoDigits(min)  + ':' + makeMeTwoDigits(sec);
          }

          function makeMeTwoDigits(n){
            return (n < 10 ? "0" : "") + n;
          }

        }
      }
    }
  }


}


</script>


<style>

.choice1 {
  visibility: visible !important;
  transition: visibility 1s ease-in-out;

}

.choice2 {
  visibility: visible !important;
  transition: visibility 1s ease-in-out;

}

h2 {
  display: flex;
  justify-content: center;
}

h3 {
  display: flex;
  justify-content: center;
}

table {
  display: table-caption;
  column-count: 6;
}

.gameline > td {
  float: left;
  text-align: center;
  background-color: palegoldenrod;
  color: #fff;
  border-radius: 4px;
  margin: 3px;
  height: 100px;
  width: 100px;
  cursor: pointer;
}

.gameline {
  max-width: 360px;
}

#timer {
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-family: Helvetica,serif;
  background-color: aliceblue;
  border-radius: 30px;
}


</style>

