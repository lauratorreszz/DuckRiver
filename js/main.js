jQuery(document).ready(function($){
  //fixed header
  window.onscroll = function(){
      if(window.pageYOffset > 140) {
          $('#barra_nav').addClass("active");
      }else{
          $('#barra_nav').addClass("active");
      }
  }
});


//var firebaseConfig = {
//   apiKey: 'AIzaSyBFYhF3q5dViza2jnq7PZtKycz1dZN0OX8',
//   authDomain: 'duckriver-8b837.firebaseapp.com',
///   databaseURL: 'https://duckriver-8b837-default-rtdb.firebaseio.com',
//   projectId: 'duckriver-8b837',
//   storageBucket: 'duckriver-8b837.appspot.com',
//   messagingSenderId: '123456789',
//   appId: '1:123456789:web:abcdefghi123456789',
// };

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

//const database = firebase.database();
//const ref = database.ref();

//ref.on('value', snapshot => {
//   const data = snapshot.val();
//   console.log(data);
//   formattedData = Object.values(data);
//   let alteracao = formattedData[0]
//   document.getElementById("S1").innerHTML = formattedData[1].S1;
//});

// FIREBASE

var firebaseConfig = {
apiKey: 'AIzaSyBFYhF3q5dViza2jnq7PZtKycz1dZN0OX8',
authDomain: 'duckriver-8b837.firebaseapp.com',
databaseURL: 'https://duckriver-8b837-default-rtdb.firebaseio.com',
projectId: 'duckriver-8b837',
storageBucket: 'duckriver-8b837.appspot.com',
messagingSenderId: '123456789',
appId: '1:123456789:web:abcdefghi123456789',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const ref = database.ref();

ref.on('value', snapshot => {
const data = snapshot.val();
console.log(data);
formattedData = Object.values(data);
let alteracao = formattedData[0].hora
SNA = formattedData[1].SNA
SNM = formattedData[1].SNM
SNB = formattedData[1].SNB
ph = formattedData[1].PH
Turbidez = formattedData[1].Turbidez
document.getElementById("SNB").innerHTML = SNB;
document.getElementById("SNM").innerHTML = SNM;
document.getElementById("SNA").innerHTML = SNA;
document.getElementById("alteracao").innerHTML = alteracao;
document.getElementById("turbidez").innerHTML = Turbidez;

if (SNA == true && SNM == true && SNB == true){
  document.getElementById("SN").setAttribute('src','https://raw.githubusercontent.com/lauratorreszz/Projeto/main/HTML%20%26%20CSS%20!/assets/alto.png');
}
else if(SNA == false && SNM == true && SNB == true){
  document.getElementById("SN").setAttribute('src','https://raw.githubusercontent.com/lauratorreszz/Projeto/main/HTML%20%26%20CSS%20!/assets/medio.png');
}
else if(SNA == false && SNM == false && SNB == true){
  document.getElementById("SN").setAttribute('src','https://raw.githubusercontent.com/lauratorreszz/Projeto/main/HTML%20%26%20CSS%20!/assets/baixo.png');
}
else if(SNA == false && SNM == false && SNB == false){
  document.getElementById("SN").setAttribute('src','');
  document.getElementById("SN").setAttribute('alt','Os sensores não conseguiram captar o minimo de água necessario para seu correto funcionamento');
}
else{
  document.getElementById("SN").setAttribute('src','');
  document.getElementById("SN").setAttribute('alt','Os sensores estão apresentando erro, estamos trabalhando ´para resolver :)');
}



if(ph >= 0 && ph < 1){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#e61b24ff 0,#e61b24ff 6.67%,#ffffff 6.67%)';
}
else if(ph >= 1 && ph < 2){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#f95425ff 0,#f95425ff 13.33%,#ffffff 13.33%)';
}
else if(ph >= 2 && ph < 3){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#ffa425ff 0,#ffa425ff 19.99%,#ffffff 19.99%)';
}
else if(ph >= 3 && ph < 4){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#fecb14ff 0,#fecb14ff 26.65%,#ffffff 26.65%)';
}
else if(ph >= 4 && ph < 5){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#dcde26ff 0,#dcde26ff 33.31%,#ffffff 33.31%)';
}
else if(ph >= 5 && ph < 6){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#93d61cff 0,#93d61cff 39.97%,#ffffff 39.97%)';
}
else if(ph >= 6 && ph < 7){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#4cb500ff 0,#4cb500ff 46.63%,#ffffff 46.63%)';
}
else if(ph >= 7 && ph < 8){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#019b0fff 0,#019b0fff 53.29%,#ffffff 53.29%)';
}
else if(ph >= 8 && ph < 9){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#00a65bff 0,#00a65bff 59.95%,#ffffff 59.95%)';
}
else if(ph >= 9 && ph < 10){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#00c0b8ff 0,#00c0b8ff 66.61%,#ffffff 66.61%)';
}
else if(ph >= 10 && ph < 11){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#0187c6ff 0,#0187c6ff 73.27%,#ffffff 73.27%)';
}
else if(ph >= 11 && ph < 12){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#004cc7ff 0,#004cc7ff 79.93%,#ffffff 79.93%)';
}
else if(ph >= 12 && ph < 13){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#3326b5ff 0,#3326b5ff 86.59%,#ffffff 86.59%)';
}
else if(ph >= 13 && ph < 14){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#4816b5ff 0,#4816b5ff 93.25%,#ffffff 93.25%)';
}
else if(ph >= 14 && ph < 15){
  document.getElementById("PHs").style.background = 'linear-gradient(to right,#39118dff 0,#39118dff 99.91%,#ffffff 99.91%)';
}
});

//GRÁFICOS

//POP UP 
function abrir1(){
document.getElementById('popup1').style.display = 'block';
document.getElementsByClassName('popup-wrapper').style.display = 'block';
}
function fechar1(){
document.getElementById('popup1').style.display = 'none';
document.getElementsByClassName('popup-wrapper').style.display = 'none';
}
function abrir2(){
document.getElementById('popup2').style.display = 'block';
document.getElementsByClassName('popup-wrapper').style.display = 'block';
}
function fechar2(){
document.getElementById('popup2').style.display = 'none';
document.getElementsByClassName('popup-wrapper').style.display = 'none';
}
function abrir3(){
document.getElementById('popup3').style.display = 'block';
document.getElementsByClassName('popup-wrapper').style.display = 'block';
}
function fechar3(){
document.getElementById('popup3').style.display = 'none';
document.getElementsByClassName('popup-wrapper').style.display = 'none';
}
