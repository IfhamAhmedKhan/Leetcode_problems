let tournament = function(Input){
    let Match = 0;

    while (Input>1) {
      if (Input % 2===0) {
          Match += Input/2;
          Input /=2
      }
      else{
          Match += (Input-1)/2
          Input = (Input-1)/2 +1
      }
    }
    return Match;

}

const number = 50;
let output = tournament(number)
console.log("Input is : "+ number)
console.log("Result is : "+ output)
