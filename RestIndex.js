                // Döpt om namnen på varje kategori för att enkelt kunna skapa variablar av dem, orgianlkategorier är följande: 
                // Månad, Total restaurang-försäljning, Hotell-restauranger, Caféer, Snabbmats-restauranger, Lunch- och kvälls-restauranger
                // Trafiknära restauranger, Nöjes-restauranger, Personal-restauranger
var data = [
    {
"manad":"2008K01",
"totalRestaurang":5.0,
"hotell":3.1,
"cafe":13.6,
"snabbmat":9.7,
"LunchKvall":4.1,
"trafiknara":-5.2,
"noje":12.9,
"personal":-4.4},
{
"manad":"2008K02",
"totalRestaurang":8.9,
"hotell":12.3,
"cafe":13.7,
"snabbmat":8.2,
"LunchKvall":5.6,
"trafiknara":13.9,
"noje":15.0,
"personal":5.7},
{
"manad":"2008K03",
"totalRestaurang":5.1,
"hotell":2.4,
"cafe":10.3,
"snabbmat":13.0,
"LunchKvall":1.6,
"trafiknara":14.4,
"noje":7.3,
"personal":-1.1},
{
"manad":"2008K04",
"totalRestaurang":3.7,
"hotell":1.0,
"cafe":8.9,
"snabbmat":13.3,
"LunchKvall":0.8,
"trafiknara":8.2,
"noje":4.1,
"personal":-0.2},
{
"manad":"2009K01",
"totalRestaurang":1.0,
"hotell":-0.6,
"cafe":-0.5,
"snabbmat":1.0,
"LunchKvall":2.0,
"trafiknara":3.4,
"noje":-2.2,
"personal":3.4},
{
"manad":"2009K02",
"totalRestaurang":-1.3,
"hotell":-6.3,
"cafe":-3.0,
"snabbmat":7.5,
"LunchKvall":0.7,
"trafiknara":-8.8,
"noje":-5.4,
"personal":-4.9},
{
"manad":"2009K03",
"totalRestaurang":0.7,
"hotell":1.5,
"cafe":3.2,
"snabbmat":4.8,
"LunchKvall":1.7,
"trafiknara":-2.6,
"noje":-5.0,
"personal":-1.0},
{
"manad":"2009K04",
"totalRestaurang":1.2,
"hotell":0.1,
"cafe":-1.5,
"snabbmat":1.9,
"LunchKvall":2.9,
"trafiknara":-0.1,
"noje":-2.1,
"personal":3.5},
{
"manad":"2010K01",
"totalRestaurang":2.8,
"hotell":1.3,
"cafe":7.7,
"snabbmat":5.8,
"LunchKvall":2.4,
"trafiknara":1.9,
"noje":0.9,
"personal":3.0},
{
"manad":"2010K02",
"totalRestaurang":4.6,
"hotell":4.8,
"cafe":9.1,
"snabbmat":2.1,
"LunchKvall":4.3,
"trafiknara":3.6,
"noje":5.0,
"personal":8.6},
{
"manad":"2010K03",
"totalRestaurang":8.2,
"hotell":8.3,
"cafe":7.6,
"snabbmat":4.5,
"LunchKvall":9.5,
"trafiknara":9.3,
"noje":8.5,
"personal":4.3},
{
"manad":"2010K04",
"totalRestaurang":7.5,
"hotell":9.3,
"cafe":10.2,
"snabbmat":4.1,
"LunchKvall":7.2,
"trafiknara":10.6,
"noje":8.6,
"personal":4.8},
{
"manad":"2011K01",
"totalRestaurang":8.2,
"hotell":10.4,
"cafe":11.1,
"snabbmat":7.5,
"LunchKvall":7.9,
"trafiknara":6.4,
"noje":8.0,
"personal":8.1},
{
"manad":"2011K02",
"totalRestaurang":9.2,
"hotell":11.1,
"cafe":11.8,
"snabbmat":5.4,
"LunchKvall":10.3,
"trafiknara":9.5,
"noje":6.9,
"personal":9.1},
{
"manad":"2011K03",
"totalRestaurang":4.5,
"hotell":5.8,
"cafe":6.1,
"snabbmat":5.5,
"LunchKvall":4.4,
"trafiknara":8.1,
"noje":0.9,
"personal":2.5},
{
"manad":"2011K04",
"totalRestaurang":3.4,
"hotell":5.2,
"cafe":6.5,
"snabbmat":7.1,
"LunchKvall":3.7,
"trafiknara":-2.0,
"noje":0.5,
"personal":2.0},
{
"manad":"2012K01",
"totalRestaurang":5.8,
"hotell":5.6,
"cafe":7.0,
"snabbmat":7.1,
"LunchKvall":4.7,
"trafiknara":5.9,
"noje":10.2,
"personal":1.0},
{
"manad":"2012K02",
"totalRestaurang":4.3,
"hotell":5.7,
"cafe":13.8,
"snabbmat":6.3,
"LunchKvall":3.2,
"trafiknara":10.0,
"noje":5.8,
"personal":-12.3},
{
"manad":"2012K03",
"totalRestaurang":4.3,
"hotell":5.6,
"cafe":11.6,
"snabbmat":3.6,
"LunchKvall":3.3,
"trafiknara":3.3,
"noje":6.6,
"personal":-0.5},
{
"manad":"2012K04",
"totalRestaurang":5.2,
"hotell":4.2,
"cafe":10.3,
"snabbmat":5.3,
"LunchKvall":6.8,
"trafiknara":5.0,
"noje":3.3,
"personal":-5.3},
{
"manad":"2013K01",
"totalRestaurang":3.8,
"hotell":2.7,
"cafe":8.0,
"snabbmat":5.5,
"LunchKvall":5.4,
"trafiknara":4.2,
"noje":-0.8,
"personal":-3.9},
{
"manad":"2013K02",
"totalRestaurang":4.9,
"hotell":-0.3,
"cafe":8.3,
"snabbmat":5.3,
"LunchKvall":6.9,
"trafiknara":4.0,
"noje":5.4,
"personal":-7.4},
{
"manad":"2013K03",
"totalRestaurang":4.5,
"hotell":2.3,
"cafe":8.7,
"snabbmat":2.4,
"LunchKvall":7.2,
"trafiknara":1.5,
"noje":2.5,
"personal":-7.3},
{
"manad":"2013K04",
"totalRestaurang":4.8,
"hotell":5.4,
"cafe":9.4,
"snabbmat":-0.5,
"LunchKvall":7.1,
"trafiknara":7.3,
"noje":2.0,
"personal":-3.3},
{
"manad":"2014K01",
"totalRestaurang":5.5,
"hotell":3.1,
"cafe":11.5,
"snabbmat":0.2,
"LunchKvall":7.9,
"trafiknara":8.4,
"noje":3.4,
"personal":-0.3},
{
"manad":"2014K02",
"totalRestaurang":5.3,
"hotell":5.2,
"cafe":8.0,
"snabbmat":2.2,
"LunchKvall":5.3,
"trafiknara":9.5,
"noje":2.2,
"personal":14.3},
{
"manad":"2014K03",
"totalRestaurang":5.3,
"hotell":6.5,
"cafe":6.4,
"snabbmat":1.7,
"LunchKvall":5.5,
"trafiknara":9.2,
"noje":2.6,
"personal":12.4},
{
"manad":"2014K04",
"totalRestaurang":6.5,
"hotell":8.6,
"cafe":6.9,
"snabbmat":6.1,
"LunchKvall":7.3,
"trafiknara":1.6,
"noje":4.1,
"personal":10.7},
{
"manad":"2015K01",
"totalRestaurang":6.6,
"hotell":9.8,
"cafe":8.0,
"snabbmat":7.4,
"LunchKvall":8.2,
"trafiknara":-4.9,
"noje":4.2,
"personal":5.6},
{
"manad":"2015K02",
"totalRestaurang":4.4,
"hotell":10.4,
"cafe":7.6,
"snabbmat":5.2,
"LunchKvall":3.2,
"trafiknara":-5.0,
"noje":8.2,
"personal":0.7},
{
"manad":"2015K03",
"totalRestaurang":5.1,
"hotell":8.8,
"cafe":6.4,
"snabbmat":6.4,
"LunchKvall":5.2,
"trafiknara":-7.0,
"noje":7.7,
"personal":3.2},
{
"manad":"2015K04",
"totalRestaurang":5.2,
"hotell":6.8,
"cafe":9.2,
"snabbmat":6.0,
"LunchKvall":5.6,
"trafiknara":-2.8,
"noje":5.2,
"personal":3.0},
{
"manad":"2016K01",
"totalRestaurang":7.8,
"hotell":7.3,
"cafe":10.2,
"snabbmat":7.5,
"LunchKvall":6.5,
"trafiknara":11.9,
"noje":14.3,
"personal":-2.4},
{
"manad":"2016K02",
"totalRestaurang":8.2,
"hotell":2.2,
"cafe":5.3,
"snabbmat":7.7,
"LunchKvall":10.4,
"trafiknara":17.4,
"noje":6.4,
"personal":-1.9},
{
"manad":"2016K03",
"totalRestaurang":6.7,
"hotell":0.7,
"cafe":9.0,
"snabbmat":8.4,
"LunchKvall":8.8,
"trafiknara":10.5,
"noje":3.8,
"personal":-8.1},
{
"manad":"2016K04",
"totalRestaurang":4.0,
"hotell":2.8,
"cafe":3.5,
"snabbmat":4.3,
"LunchKvall":5.5,
"trafiknara":8.8,
"noje":2.5,
"personal":-8.5},
{
"manad":"2017K01",
"totalRestaurang":7.6,
"hotell":13.9,
"cafe":2.6,
"snabbmat":6.5,
"LunchKvall":8.4,
"trafiknara":6.1,
"noje":9.1,
"personal":-4.4},
{
"manad":"2017K02",
"totalRestaurang":3.4,
"hotell":5.6,
"cafe":7.0,
"snabbmat":6.6,
"LunchKvall":3.6,
"trafiknara":-9.6,
"noje":6.9,
"personal":-6.9},
{
"manad":"2017K03",
"totalRestaurang":2.3,
"hotell":1.6,
"cafe":6.3,
"snabbmat":3.1,
"LunchKvall":2.3,
"trafiknara":-5.8,
"noje":5.2,
"personal":-0.5},
{
"manad":"2017K04",
"totalRestaurang":3.8,
"hotell":4.6,
"cafe":4.9,
"snabbmat":6.9,
"LunchKvall":4.7,
"trafiknara":-4.2,
"noje":3.3,
"personal":-3.3},
{
"manad":"2018K01",
"totalRestaurang":0.5,
"hotell":-3.9,
"cafe":6.3,
"snabbmat":4.2,
"LunchKvall":1.8,
"trafiknara":-6.6,
"noje":-1.8,
"personal":-4.4},
{
"manad":"2018K02",
"totalRestaurang":4.2,
"hotell":13.4,
"cafe":-2.0,
"snabbmat":1.4,
"LunchKvall":4.7,
"trafiknara":15.0,
"noje":-0.3,
"personal":-8.1},
{
"manad":"2018K03",
"totalRestaurang":2.9,
"hotell":11.3,
"cafe":-3.3,
"snabbmat":5.5,
"LunchKvall":3.1,
"trafiknara":12.0,
"noje":-3.8,
"personal":-10.0},
{
"manad":"2018K04",
"totalRestaurang":3.6,
"hotell":12.8,
"cafe":-0.9,
"snabbmat":2.2,
"LunchKvall":3.6,
"trafiknara":11.2,
"noje":-0.5,
"personal":-8.9}
];
 
var total = []        // Skapar variabler med tomma listor, för vaje kategori i ovanstående lista. 
var hotell = []       // Fylls i "for-loopen" nedanför på med data för respektive kategori. 
var manadlist = []
var cafen = []
var snabbmat = []
var lunchkvall = []
var trafiknara = []
var nojes = []
var personals = []

for (var i = 0; i < data.length; i++) {     // Skapar en lista av variabeln Data. 
  manadlist.push(data[i].manad);          
  hotell.push(data[i].hotell);            // Här skapas nya listor med unika värden för varje kategori från Variabeln data, som sedan matas in i respektive variabel för varje kategori. 
  total.push(data[i].totalRestaurang);    // Kategorier är: Hotell-restauranger, Total restaurang-försäljning, caféer,                                            
  cafen.push(data[i].cafe);                // snabbmats-restauranger, Lunch och kvälls-restauranger, Nöjes-restauranger och personal-restauranger.
  snabbmat.push(data[i].snabbmat);
  lunchkvall.push(data[i].LunchKvall);
  nojes.push(data[i].noje);
  personals.push(data[i].personal);

}
 
function cumulative(inVar) {
  var outVar = []

  for (var i = 0; i < inVar.length; i++) {
    if (i == 0) {
      outVar[i] = inVar[i];
    } else {
      outVar[i] = outVar[i-1] + inVar[i];
    }
  }
  return outVar
}


var barChart = [
  {
    y:  [/*'Total restaurangförsäljning',*/ 'Hotellrestauranger', 'Caf\xE9er', "Snabbmatsrestauranger", "Lunch och kv\xE4llsrestauranger", "trafiknara", "nojes", "personal"], // Försäljning per branschkatergori. Belopp i Mkr för februari 2018
    x: [/*9797,*/ 1044, 627, 1190, 4532, 695, 1304, 405],
    type: 'bar',
    orientation: 'h',
    
    
  }
];

var barLayout = {
  height: 400,
  width: 600,

  xaxis:{
    autorange:'reversed'
},
yaxis:{
  font: {
    size: 1,

  },  
  side: "right",
}
}

Plotly.newPlot('myDiv', barChart, barLayout);

function graf(ydata, namedata) {            // Funktion för att fylla Diagram med värden. 
  var ChartMaster = { 
    x: manadlist,
    y: ydata,
    type: "scatter",
    name: namedata,
    mode: 'line',
    showlegend: false,
    hoverinfo: "y+text",
    hovertext: "(%)",
    hoverlabel: {
      bgcolor: "white",
      bordercolor: "Black",
      font:{
        family: "'Ubuntu', Old Standard, serif",
        color: "black", 
      }
    },
    line: {
      color: "#3186cc",
      width: 3,   
    }                  
  }
  return ChartMaster;
}

function funclayout(supertitle){            // Funktion för layout av diagram
  var layout = {
    title: supertitle,
    titlefont: {
      family: "'Ubuntu', Old Standard, serif",
      color: "black"
    },
    paper_bgcolor: 'rgba(0, 0, 0, 0)', 
    plot_bgcolor: 'rgba(0, 0, 0, 0)', 
    autosize: true,
    xaxis: {
      tickvals:['2008K04', '2009K04', '2010K04', '2011K04', '2012K04', '2013K04','2014K04', '2015K04', '2016K04', '2017K04', '2018K04'],
      ticktext : ['Q4 2008', 'Q4 2009', 'Q4 2010', 'Q4 2011', 'Q4 2012', 'Q4 2013', 'Q4 2014', 'Q4 2015', 'Q4 2016', 'Q4 2017', 'Q4 2018'],
      color: "black",
      showgrid: false,
      tickangle: 45,
      showticklabels: true,
      tickfont: {
        family: "'Ubuntu', Old Standard, serif",
        size: 14       
      }
    },
    yaxis: {
      fixedrange: true,
      range: [-13, 15],
      title: "F\xF6r\xE4ndring (%) mot samma kvartal f\xF6eg\xE5ende \xE5r",
      titlefont: {
        family: "'Ubuntu', Old Standard, serif",
        size: 14 
      },
      color: "Black",
      showgrid: true,
      bgcolor: "grey",
      tickfont: {
        family: "'Ubuntu', Old Standard, serif",
        size: 14,
      }
    }         
  }

  return layout;
}

function cumlayout(supertitle){            // Funktion för layout av diagram
  var layout = {
    title: supertitle,
    titlefont: {
      family: "'Ubuntu', Old Standard, serif",
      color: "black"
    },
    paper_bgcolor: 'rgba(0, 0, 0, 0)', 
    plot_bgcolor: 'rgba(0, 0, 0, 0)', 
    autosize: true,
    xaxis: {
      tickvals:['2008K04', '2009K04', '2010K04', '2011K04', '2012K04', '2013K04','2014K04', '2015K04', '2016K04', '2017K04', '2018K04'],
      ticktext : ['Q4 2008', 'Q4 2009', 'Q4 2010', 'Q4 2011', 'Q4 2012', 'Q4 2013', 'Q4 2014', 'Q4 2015', 'Q4 2016', 'Q4 2017', 'Q4 2018'],
      color: "black",
      showgrid: false,
      tickangle: 45,
      showticklabels: true,
      tickfont: {
        family: "'Ubuntu', Old Standard, serif",
        size: 14       
      }
    },
    yaxis: {
      title: "F\xF6r\xE4ndring (%) mot samma kvartal f\xF6eg\xE5ende \xE5r",
      titlefont: {
        family: "'Ubuntu', Old Standard, serif",
        size: 14 
      },
      color: "Black",
      showgrid: true,
      bgcolor: "grey",
      tickfont: {
        family: "'Ubuntu', Old Standard, serif",
        size: 14,
      }
    }         
  }

  return layout;
}

  Plotly.newPlot("Cafe", [graf(cafen, "cafediagram")], funclayout("Caf\xE9er") );
  Plotly.newPlot("Hotell", [graf(hotell, "HotellDiagram")], funclayout("Hotellrestauranger"));
  Plotly.newPlot("Total", [graf(total, "TotalDiagram")], funclayout("Total restaurangf\xF6rs\xE4ljning"));
  Plotly.newPlot("Snabbmat", [graf(snabbmat, "snabbmatDiagram")], funclayout("Snabbmatsrestauranger"));
  Plotly.newPlot("LK", [graf(lunchkvall, "LKDiagram")], funclayout("Lunch och kv\xE4llsrestauranger"));
  Plotly.newPlot("Pers", [graf(personals, "PersonalDiagram")], funclayout("Personalrestauranger"));
  Plotly.newPlot("NojesDiv", [graf(nojes, "nojesDiagram")], funclayout("N\xF6jesrestauranger"));

  Plotly.newPlot("cumCafe", [graf(cumulative(cafen), "cumCafediagram")], cumlayout("cumCaf\xE9er"));












//                                                               ----------Städat bort kod som inte används--------


  // var HotellChart = { // Hotell-restauranger linjediagram
  //   x: manadlist,
  //   y: hotell,
  //   mode: 'line',
  // };

  // var TotalChart = { // Total restaurang försäljning linjediagram
  //   x: manadlist,
  //   y: total,
  //   mode: 'line',
  // };
    // var snabbmatChart = { // Snabbamtsrestauranger linjediagram
  //   x: manadlist,
  //   y: snabbmat,
  //   mode: 'line',
  // };

  // var LunchKvallChart = { // Lunch och kvällrestauranger linjediagram
  //   x: manadlist,
  //   y: lunchkvall,
  //   mode: 'line',
  // };

  // var NojesChart = { // Nöjes-restauranger linjediagram
  //   x: manadlist,
  //   y: nojes,
  //   mode: 'line',
  // };

  
  //var SnabbmatLine = [snabbmatChart];
  //var HotellLine = [HotellChart];
  // var TotalLine = [TotalChart];
  //var CafeLine = [graf(cafe, "Dickslinger")];
  // var LunchkvallLine = [LunchKvallChart];
  // var NojesLine = [NojesChart]



  // var layoutGrund = {
  //   autosize: false,
	//   height: 600,
  //   width: 800,
  //   xaxis:    
  //   {
  //     tickvals:['2008K04', '2009K04', '2010K04', '2011K04', '2012K04', '2013K04','2014K04', '2015K04', '2016K04', '2017K04', '2018K04'],
  //         ticktext : ['Q4 2008', 'Q4 2009', 'Q4 2010', 'Q4 2011', 'Q4 2012', 'Q4 2013', 'Q4 2014', 'Q4 2015', 'Q4 2016', 'Q4 2017', 'Q4 2018'],
  //         color: "black",
  //         showgrid: false,
  //         tickangle: 45,
  //         showticklabels: true,
  //         tickfont: {
  //           family: "Old Standard, serif",
  //           size: 14,
            
  //         }
  //   },
  //   yaxis: {
  //     title: "F\xF6r\xE4ndring (%) mot samma kvrtal f\xF6eg\xE5ende \xE5r",
  //     font: "old stanard, serif",
  //     color: "Black",
  //     bgcolor: "grey",
  //     tickfont: {
  //       family: "Old Standard, serif",
  //       size: 14,
  //     }

  //   }
          
  // }