import { authHeader, config } from './service';
import axios from 'axios';

export default function HandleLoginClick (user, password) {
  return axios.get('http://199.98.27.118:6969/api/user/' + user, {
    header: { 'Content-Type': 'application/json'},
    data: JSON.stringify({ "username": user})
  })
    .then(function (response) {
      if (response.data.password != password ){
        alert("Login error: Check username or password");
        return false;
      } 
      else {
        return true;
        //window.location.href = "/matches"
        //alert("Correct Password")
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}