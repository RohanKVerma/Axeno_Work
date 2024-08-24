const city = 'noida';
const APIKey = '<Your API Key>';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
.then(response => response.json())
.then(
      data => console.log(data)
)