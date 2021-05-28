<template>
  <div>

    <div>
      <h2>Are you up to find the good fruit ? 🍑😎</h2>
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
      var score = 0
      var caseNumber = 0


      let card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      let double = 0
      let selection = 0;


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


        let clicked = Event.currentTarget.firstChild;


        switch (true) {
          case (selection === 0 ) : {
            clicked.classList.add('choice1')
            clicked.style.visibility = 'visible'
            selection++
            break
          }
          case (selection === 1) : {
            clicked.classList.add('choice2')
            clicked.style.visibility = 'visible'
            selection ++;
            break
          }
        }console.log(selection)

          if (selection === 2) {
            let choice1 = document.querySelector('.choice1')
            let choice2 = document.querySelector('.choice2')

            if (choice1 === choice2){
              score ++
            console.log('identical' +  score);
              choice1.classList.remove('choice1');
              choice2.classList.remove('choice2');
              selection = 0 ;
            } else {
              console.log('false')
              choice1.classList.remove('choice1');
              choice1.style.visibility = 'hidden';
             // choice2.style.visibility = 'hidden';
              choice2.classList.remove('choice2')

              selection = 0 ;
            }


       /*  if (choices.getAttribute('src') === choices.getAttribute('src') && choices.classList !== choices.classList) {
           console.log('identical score = ' + score)
           choices.classList.remove('choice')
           choices.style.visibility = 'hidden'
           choices.style.visibility = 'hidden'
           choices.classList.remove('choice')
           score++
         } else {
           console.log('false')
           selection = 0 ;
         */

          }
        }
    }
  }


}


</script>


<style>


h2 {
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


</style>

