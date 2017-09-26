/* globals localStorage */
import axios from 'axios'
export default {
  login (email, firstname, lastname, company) {
    const headers = {'Accept': 'application/json', 'Content-Type': 'application/json;charset=UTF-8;application/x-www-form-urlencoded', 'Authorization': 'SSWS 00-NP11rVjcqNBCZB_xHovLsSDZdaRHmx83GtkQA2x', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': true, 'Access-Control-Request-Method': 'POST'}
    const signup = {'profile': {'firstName': 'Mani', 'lastName': 'Dharma', 'email': 'manikandanprabhu91@yahoo.com', 'login': 'manikandanprabhu91@yahoo.com'}, 'credentials': {'password': {'value': 'India@2019'}, 'recovery_question': {'question': 'what is ur pet name?', 'answer': 'Okta'}}}
    const result = axios.post('http://dev-414554-admin.oktapreview.com/api/v1/users?activate=true', signup, headers).then(function (response) { Promise(function (resolve, reject) { }) })
    return result
  }
}
