/* globals localStorage */
const OktaAuth = require('@okta/okta-auth-js')
const authClient = new OktaAuth({url: 'https://dev-414554.oktapreview.com'})

export default {
  login (email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    return authClient.signIn({
      username: email,
      password: pass
    }).then(response => {
      if (response.status === 'SUCCESS') {
        return authClient.token.getWithoutPrompt({
          clientId: '0oac0e9xu9ohzs1Z40h7',
          responseType: ['id_token', 'token'],
          scopes: ['openid', 'email', 'profile'],
          sessionToken: response.sessionToken,
          redirectUri: 'http://localhost:8080/'
        }).then(tokens => {
          localStorage.token = tokens[1].accessToken
          localStorage.idToken = tokens[0].idToken
          if (cb) cb(true)
          this.onChange(true)
        })
      }
    }).fail(err => {
      console.error(err.message)
      if (cb) cb(false)
      this.onChange(false)
    })
  },

  getToken () {
    return localStorage.token
  },

  getName () {
    console.log(localStorage.idToken)
    const claims = this.parseJwt(localStorage.idToken)
    console.log(claims.name)
    console.log(claims.jti)
    return claims
  },

  parseJwt (token) {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
  },

  logout (cb) {
    console.log(localStorage.token)
    delete localStorage.token
    delete localStorage.idToken
    if (cb) cb()
    this.onChange(false)
    return authClient.signOut()
  },

  loggedIn () {
    return !!localStorage.token
  },

  onChange () {
  }
}
