let XMLHttpRequest=require('xhr2');
let xhr=new XMLHttpRequest();
//console.log(xhr);
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload= function () {
    
    let countries=JSON.parse(xhr.response);



//  A.Get all the countries from Asia continent/region using filter function:
/*
const asiaCountries = countries.filter(country => country.region === 'Asia');
console.log(asiaCountries.length);
console.log(asiaCountries);

*/
//  B.Get all the countries with a population less than 2 lakhs using filter function

/*

let filteredCountries=countries.filter(country=>country.population<200000);
 
console.log(filteredCountries.length,countries.length);

filteredCountries.forEach(country=>{
   console.log(country.name.common);
});
  console.log(filteredCountries.map(country=>country.population));

*/




//C.print details using forEach function
/*

console.log(countries.length);
countries.forEach(country=>{
    console.log(`Name:${country.name.common}`);
    console.log(`Capital:${country.capital}`);
    console.log(`Flag:${country.flags.svg}`);
});

*/


//D.Print total population using reduce function
/*
const totalPopulation=countries.reduce((acc,country)=>acc+country.population,0);
console.log(`Total population of Countries:${totalPopulation}`);
*/


//E.Print the country that uses US dollars as currency

    console.log(`Countries that uses USD dollars as currency:`);
    console.log(countries.filter(country=>{
    let currencies;
    if(country.currencies){
        currencies=Object.keys(country.currencies);
        return currencies.includes('USD');
    }
}).map(country=>country.name.common).join('\n'));



}