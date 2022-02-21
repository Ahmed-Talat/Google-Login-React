import './App.css';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const responseGoogle = (response) => {
  console.log(response);
}

function App() {
  return (
    //npm install react-google-login
    <div className="App">
      <GoogleLogin
      clientId="899049708358-7fbnkhuv36gecus10ji59ae0jrhpgrq0.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={onSignIn}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}/>
    </div>
  )
}

function onSignIn(googleUser) {

  var id_token = googleUser.getAuthResponse().id_token;

  axios.post('https://localhost:7015/WeatherForecast/Login', id_token, {
    headers: {
        'Content-Type': 'application/json'
    }}).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default App
