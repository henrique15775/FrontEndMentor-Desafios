/* Navigator.geolocation */

const  ipSearch = document.getElementById('ipSearch')
ipSearch.value = "8.8.8.8"

const  buttonSearch = document.getElementById('buttonSearch')

buttonSearch.addEventListener("click",(event)=>{
  event.preventDefault();
  if(ipSearch.value != ''){
    init();
  }
});


const init= async()=>{
const ip = document.getElementById('ipAdress');
const cidade = document.getElementById('city');
const estado = document.getElementById('region');
const codigoPostal = document.getElementById('postalCode');
const timeZone = document.getElementById('timeZone');
const isp = document.getElementById('ISP');
/*
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", `http://ip-api.com/json/${ipSearch.value}` , false );*/

var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", `https://api.ipgeolocation.io/ipgeo?apiKey=&ip=${ipSearch.value}&output=json` , false );

xmlHttp.send( null );
a = xmlHttp.responseText;

res = JSON.parse(a);
console.log(res);
ip.innerHTML = res.ip;
cidade.innerHTML = res.city;
estado.innerHTML = res.state_prov;
codigoPostal.innerHTML = res.zipcode;
timeZone.innerHTML = res.time_zone.name;
isp.innerHTML = res.isp;
var container = L.DomUtil.get('map');

if(container.innerHTML != ''){
map.remove();
}
map = L.map('map').setView([res.latitude, res.longitude], 13);
  L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=e956j9rC7m3x1IDcL0l1',{
        attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      }).addTo(map);
     
      L.marker([res.latitude, res.longitude]).addTo(map);
    
      return true;
/*
Necessito exibir em tela:

 1- Endereço de IP do usuario - Completo
 2- Location (Cidade,Estado, Código Postal) - 
 3- Timezone
 4- ASN  (Sistema autonônomo do roteamento)
 */
}

window.onload = init;
