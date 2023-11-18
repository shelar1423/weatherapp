const input = document.getElementById("input");
const button = document.getElementById("searchbutton");
const cityN = document.getElementById("cityname");
const citytemp = document.getElementById("citytemp");
const citytime = document.getElementById("citytime")
const lastcheck = document.getElementById("lastcheck")
const current_c = document.getElementById("current-city");
const current_temp = document.getElementById("current-temp");
const current_time = document.getElementById("current-time");
async function weather(cityname){
    const api = await fetch(`http://api.weatherapi.com/v1/current.json?key=fb3dd9895eaa4351bb3135101231806&q=${cityname}}&aqi=yes
`);
return  await api.json();

}
async function currentl(lat,long){
    const apic = await fetch(`http://api.weatherapi.com/v1/current.json?key=fb3dd9895eaa4351bb3135101231806&q=${lat},${long}&aqi=yes
`);
return  await apic.json();

}

button.addEventListener("click", async ()=>{
    const val = input.value;
    localStorage.setItem("name",val);
    const result = await weather(val);
    console.log(result);
    cityN.innerText = `${result.location.name},${result.location.country}`;
    citytemp.innerText = `${result.current.temp_c} °C` ;
    citytime.innerText = result.location.localtime;

    
   
})
 window.addEventListener("load",async ()=>{
    const di =  localStorage.getItem("name");
    lastcheck.innerText = `last location checked: ${di}`;
    navigator.geolocation.getCurrentPosition(async (position)=>{
    const cc = await currentl(position.coords.latitude,position.coords.longitude);
    current_c.innerText=cc.location.name;
    current_temp.innerText=`${cc.current.temp_c} °C` ;
   current_time.innerText=cc.location.localtime
   
      

    })

}) 




