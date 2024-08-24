const city = 'noida';
const APIKey = '46362dd6acc46810f83278bad6b3c462';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
.then(response => response.json())
.then(
      data => console.log(data)
)