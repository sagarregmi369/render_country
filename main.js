const searchButtonDiv = document.getElementById('search_btn');
const searchBoxDiv= document.getElementById('search_box');
const resultDiv=document.querySelector('.result');

searchButtonDiv.onclick=()=>{
    getCountryData();
};

let userInput;
const getCountryData= async()=>{
  userInput=searchBoxDiv.value;
  const responseData= await fetch(`https:restcountries.com/v3.1/name/${userInput}`);
  const data= await responseData.json();
  const countryFlag=data[0].flags.png;
  const country=userInput.toUpperCase();
  const countryLanguage=Object.values(data[0].languages);
  const countryCapital=data[0].capital;
  const countryCurrency=Object.values(data[0].currencies)[0].name;
  resultDiv.innerHTML= displayResult(countryFlag,country,countryLanguage,countryCapital,countryCurrency);
  resultDiv.classList.add("show-result");
};

const displayResult=(flag,country,language,capital,currency)=>{
  return `<div class="box">
          <div class="box_1">
            <img src="${flag}" alt="" class="box_img">
            <h1 class="box_country">${country}</h1>
          </div>
          <div class="box_2">
            <ul class="box_info">
              <li class="box_info-currency"><span>Language : </span>${language}</li>
              <li class="box_info-capital"><span>Capital City : </span>${capital}</li>
              <li class="box_info-population"><span>Currency : </span>${currency}</li> 
            </u1>
          </div>
        <button class="box_btn" onclick="closeBox()">Close</button>
        </div>`
}

const closeBox=()=>{
  resultDiv.classList.remove("show-result");
  searchBoxDiv.value="";
}





