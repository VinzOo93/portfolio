<template>
  <div>

    <div>
      <h2>FIND THE FRUITS PAIRS</h2>
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
      var counter = 0
      var selected = 0
      var FirstChoice
      var SecondChoice

      let card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      let double = 0


      const line = document.querySelector('.gameline')

      while (double < 2) {
        for (let i = 0; i < card.length; i++) {

          let td = document.createElement('td')
          td.innerHTML = "<img src='' alt='fruit' class='fruit'>"
          line.appendChild(td)
          td.lastElementChild.src = "game/" + (card[i]) + ".png";
          td.lastElementChild.id = card[i].toString();


          let column = document.querySelector('td')
            column.addEventListener('click', e => {
              onclick(e)
              console.log(e)
          })
          if (i === 17) {
            double++;
          }

        }
      }
        let fruitCase =   line.children;
        let fruitCaseArr = Array.prototype.slice.call(fruitCase);
        console.log(fruitCaseArr)
/*  to continue      while (fruitCase.length){
          line.append(fruitCaseArr.prototype.splice(Math.floor(Math.random() * fruitCase.length),1)[0])
        }*/
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

