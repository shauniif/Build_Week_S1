//IMPORTAZIONE VARIABILE 
let punteggioUtente = localStorage.getItem("punteggioUtente");
let totaleDomande = localStorage.getItem("totaleDomande");
// DICHIARAZIONE CONTENITORI DOVE ANDARE A SCRIVERE IL PUNTEGGIO
let boxCorrette = document.getElementById("corrette");
let boxSbagliate = document.getElementById("sbagliate");

function redirectToFourthPage() {   //FUNZIONE COLLEGATA AL BOTTONE, PASSA ALLA QUARTA PAGINA
  window.location.href = "index_quattro.html";
}

window.onload = function() {    //STAMPA TESTO RISULTATI 
  boxCorrette.innerHTML = `<p class="testoCalcolo"> <span>Correct<br> <b>${(punteggioUtente/totaleDomande)*100}% </span></b><br>${punteggioUtente}/${totaleDomande} questions </p>`;

  boxSbagliate.innerHTML = `<p class="testoCalcolo"> <span>Wrong <br> <b>${[(totaleDomande-punteggioUtente)/totaleDomande]*100}%</span></b><br>${totaleDomande-punteggioUtente}/${totaleDomande} questions </p>`;
}

google.charts.load("visualization", "1", {packages: ["corechart"]}); 
google.charts.setOnLoadCallback(init);


function drawChart(chartID, heading) {
  var chart = new google.visualization.PieChart(document.getElementById(chartID));
  var data = google.visualization.arrayToDataTable([
    ['Totale Domande', totaleDomande],
    ['Sbagliate', parseInt(totaleDomande-punteggioUtente)],
    ['Corrette', parseInt(punteggioUtente)]
  ]);
  var options = {   //FORMATTAZIONE GRAFICO PUNTEGGIO
    title: heading,
    titleTextStyle: {
      color: 'white',
      fontSize: 16, 
    },    
    pieHole: 0.7,
    backgroundColor: 'transparent',
    colors: ['#d20094', '#00FFFF'],
    pieSliceText: 'none',
    legend: {
      position: 'none'
    },
    tooltip: {
      text: 'percentage'
    },
    tooltip: {
      textStyle: {
        fontSize: 12,
      }
    }
  };

  chart.draw(data, options);
}

function centerText(chart, idx, X, Y) {   //CENTRAMENTO TESTO
  var cht = document.querySelector(chart);
  var txt = document.querySelectorAll(chart + " text");
  txt[idx].setAttribute('x', X);
  txt[idx].setAttribute('y', Y);
}

function risultato() {
  if(punteggioUtente/totaleDomande >= 0.6)  {   //VERIFICA PUNTEGGIO
    return `You passed the exam.`;
  } else {
    return "You didn't pass the exam."
  }
}
    
function init() {
  drawChart('donutchart1', risultato());
  centerText('#donutchart1', 0, 205, 290);
}