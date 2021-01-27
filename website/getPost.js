// Personal API Key for OpenWeatherMap API
let baseurl = "http://api.openweathermap.org/data/2.5/weather?zip=";
let apikey = '&appid=da3e98303b985e1e3706c2b146edd48e';
let user_zip = document.getElementById('zip')

/* Function to GET Web API Data*/     
  
  getweather = async (url, zip , key)=> {

  let res = await fetch(url + zip + key)

  try{
    const data = await res.json();
    console.log(data)
  }
  catch(error){
    console.log("error" , error)
  }
}
/* Function called by event listener */
let call = function getapidata (url , user , key){
  
  if ( user.value == 'empty') {
  alert('Sorry My App Cant Send Empty Request to the API ');
} else {
        getweather(url ,user.value , key) 
    } 
  }
  // Event listener to add function to existing HTML DOM element
let clicking = document.getElementById('generate'); 
clicking.addEventListener("click",
      call(baseurl , user_zip , apikey ));


/* Function to POST data */


/* Function to GET Project Data */
