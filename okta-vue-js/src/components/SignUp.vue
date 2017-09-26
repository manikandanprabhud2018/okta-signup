<template>
<div style="padding: 171px 19px 10px 900px;">
  <div>
  <form @submit.prevent="login" autocomplete="off" class="form-signin">
    <label><input v-model="email" placeholder="Email Address" type="text" v-focus class="form-control" required=""></label><br>
	  <label><input v-model="firstname" placeholder="First Name" type="text" v-focus class="form-control" required=""></label><br>
	    <label><input v-model="lastname" placeholder="Last Name" type="text" v-focus class="form-control" required=""></label><br>
		  <label><input v-model="company" placeholder="Company" type="text" v-focus class="form-control" required=""></label><br>
		  <button class="btn-default" type="submit">Sign Up</button>
   </form>
  </div>
  </div>
</template>

<script>
  import signup from '../signup'
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
        signup.login(this.email, this.firstname, this.lastname, this.company, loggedIn => {
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
