
function calculateBmi(){
 
  let weight = document.getElementById('weight').value
  let height = document.getElementById('height').value

  let bmi = (weight / (height* height)*703)
  document.getElementById('bmi-output').innerHTML =bmi.toFixed(2)

   if(bmi<18.5){
   document.getElementById('message').innerHTML ='You are underweight'
   }else if(18.5>=bmi&&bmi<=24.9){
    document.getElementById('message').innerHTML ='You are healthy'
  }else if(25>=bmi&&bmi<29.9){
   document.getElementById('message').innerHTML ='You are overweight'
    }else if(30>=bmi&&bmi<34.9){
    document.getElementById('message').innerHTML ='You are obese'
   }else if(35<=bmi){
     document.getElementById('message').innerHTML ='You are extremely obese'
 }
  }
 function reload() {
  window.location.reload()
 }
