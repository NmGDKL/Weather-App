//! CATCH

// const input = document.getElementsByTagName("input")[0];
// const submit = document.getElementsByTagName("button")[0];
// const message = document.getElementsByClassName("msg")[0];
// const cities = document.getElementsByClassName("cities")[0];
// const myKey = '091aa3985d82e56827ee47765e6e3897';
// const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
// const citiesArr = [];
// submit.addEventListener("click", (e)=>{
//     let city = input.value;
//     showWeather(city);
//     input.value = "";
//     e.preventDefault()
// })
// function showWeather(city){
//     const url = `${baseURL}${city}&appid=${myKey}&units=metric&lang=tr`;
//     fetch(url).then(response=>response.json()).then(response =>{
//         if(citiesArr.includes(response.name)){
//             message.innerText = `You already know the weather for ${response.name},Please search for another city`;
//             setTimeout(() => {
//                 message.innerText = ""
//             }, 3000);
//         }
//         else {
//             cities.innerHTML += `<ul class="city">
//             <li class="city-name"> ${response.name}<sup>${response.sys.country}</sup></li>
//             <li class="city-temp"> ${Math.round(response.main.temp)}<sup>${"°C"}</sup></li> 
//             <li><img class="city-icon" src="http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png" alt="icon"></li>
//             <li><figcaption>${response.weather[0].description}<figcaption></li>
//             </ul>`
//             citiesArr.push(response.name);
//         }
//     })
//     .catch(err =>{
//         message.innerText = `No city with this name found`;
//             setTimeout(() => {
//                 message.innerText = ""
//             }, 3000);
//     })
// }

//! AWAİT 


const input = document.getElementsByTagName("input")[0];
const submit = document.getElementsByTagName("button")[0];
const message = document.getElementsByClassName("msg")[0];
const cities = document.getElementsByClassName("cities")[0];
const myKey = '091aa3985d82e56827ee47765e6e3897';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const citiesArr = [];
submit.addEventListener("click", (e)=>{
    let city = input.value;
    showWeather(city);
    input.value = "";
    e.preventDefault()
})
async function showWeather(city){
    const url = `${baseURL}${city}&appid=${myKey}&units=metric&lang=tr`;
    try {
        const data = await fetch(url)
        const response = await data.json()
        console.log(data);
        if(!response.ok){
            message.innerText = `Fetching Error`;
            setTimeout(() => {
                message.innerText = ""
            }, 3000);
        }
        if(citiesArr.includes(response.name)){
            message.innerText = `You already know the weather for ${response.name},Please search for another city`;
            setTimeout(() => {
                message.innerText = ""
            }, 3000);
        }
        else {
            cities.innerHTML = `<div  class="city">
            <div class="city-name"> ${response.name}<sup>${response.sys.country}</sup></div>
            <div class="city-temp"> ${Math.round(response.main.temp)}<sup>${"°C"}</sup></div> 
            <div><img class="city-icon" src="http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png" alt="icon"></div>
            <div class="figcaption">${response.weather[0].description}</div>
            </div>`
            citiesArr.push(response.name);
            document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city +"')"
            
        }
    } catch (error) {
        message.innerText = `No city with this name found`;
            setTimeout(() => {
                message.innerText = ""
            }, 3000);
    }
}


//? AXİOS

// const input  = document.querySelector("input");
// const submit = document.querySelector("button");
// const msg    = document.querySelector(".msg");

// const cities = document.querySelector(".cities");

// const myKey  = "5149084a770f00d9c29edfadb4a0981d";
// const baseURL= "https://api.openweathermap.org/data/2.5/weather?q=";

// const citiesArr = [];

// submit.addEventListener("click",(e)=>{
//       const city = input.value;
//       showWeather(city);
//       input.value = "";
      
//       e.preventDefault();
// });


// const showWeather = async (city) => {
//       const url = `${baseURL}${city}&appid=${myKey}&units=metric&lang=tr`;
//       try{      
//             const response = await axios(url)
//       const {data} = response;
//       if(city == ""){
//             msg.innerText = `No city name. Please enter a city name`;
//             setTimeout(() => {msg.innerText = ""}, 3000);
//             }
//             else if (citiesArr.includes(data.name)){
//             msg.innerText = `You already show the weather for ${data.name}, Please search for another city`;
//             setTimeout(() => {msg.innerText = ""}, 3000);
//       }

//       else {
//             cities.innerHTML+= `
//                                     <ul class="city">
//                                           <li class="city-name"> ${data.name} <sup> ${data.sys.country}</sup></li>
//                                           <li class="city-temp"> ${Math.round(data.main.temp)}<sup>${"°C"}</sup></li>
//                                           <li><img class="city-icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon"></li>
//                                           <li><figcaption> ${data.weather[0].description} <figcaption></li>
//                                     </ul> `;
//                   citiesArr.push(data.name);
//       }
//       }
//       catch(error){
//             msg.innerText = `There is no city founded name with "${city}"`;
//             setTimeout(() => {msg.innerText = ""}, 3000);
//       }
// }