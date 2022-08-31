let weather = {
    apiKey: "d88d0d7e9d218678666784c90cc97822",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
       // .then((data) => this.displayWeather(data));
       .then((data) =>{
        console.log(data);
        this.displayInfo(data);
       })
    },
    displayInfo : function(data){
       const name = data.name;
       const { icon, description } = data.weather[0];
       const  temp  = data.main['temp'];
       const country= data.sys['country'];


       /**  adding data to html **/

       

       document.querySelector(".location").innerHTML= name;
       document.querySelector(".description").innerHTML= description;
       document.querySelector(".country").innerHTML = country;
       document.querySelector(".temp").innerHTML = temp + "&deg;C";

    }
}



document
  .querySelector(".submit")
  .addEventListener("click", function (event) {
   event.preventDefault();
 
     weather.fetchWeather(document.querySelector(".input").value);
    
  });


  window.stop();
