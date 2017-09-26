<template>
  <div style="padding: 171px 19px 10px 900px;">
   <p v-if="$route.query.redirect">
      You need to login first.
    </p>
	<div class="wrapper">
	<form @submit.prevent="login" autocomplete="off" class="form-signin">
	  <h2 class="form-signin-heading">Cargill - Okta Login</h2> <br/>
      <label><input v-model="email" placeholder="Email Address" type="text" v-focus class="form-control" required=""></label><br>
      <label><input v-model="pass" placeholder="Password" type="password" class="form-control" required=""></label><br/>
      <button class="btn-default" type="submit">Login</button>
      <p v-if="error" class="error">Bad login information</p>
    </form>
	</div>
	</div>
</template>

<script>
  import auth from '../auth'
  export default {
    data () {
      return {
        email: '',
        pass: '',
        error: false
      }
    },
    methods: {
      login () {
        auth.login(this.email, this.pass, loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            this.$router.replace(this.$route.query.redirect || '/')
          }
        })
      }
    }
  }
</script>

<style>
  .error {
    color: red;
  }
body {
	background: rgb(25, 152, 139);	
}
</style>
