<template>
  <div style="padding: 89px 41px 23px 29px;">
   
  <div >
		<img alt="Cargill location international flags" src="https://www.cargill.com/image/1432079677619/hero-ag-market-landing.jpg">
	</div>
	<div style="">
	<p><span style="color:#006600"><b>Okta Response values </b>!</span></p>
	<p><lable><span style="color:#004d99"><b>Name : </b><span style="color:#00001a"> {{name.name}}</span></span></lable></p>
	<p><lable><span style="color:#004d99"><b>JTI : </b><span style="color:#00001a"> {{name.jti}}</span></span></lable></p>
	<p><lable><span style="color:#004d99"><b>NONCE : </b><span style="color:#00001a"> {{name.nonce}}</span></span></lable></p>
	<p><lable><span style="color:#004d99"><b>Expiery : </b><span style="color:#00001a"> {{name.exp}}</span></span></lable></p>
	<p><lable><span style="color:#004d99"><b>IAT : </b><span style="color:#00001a"> {{name.iat}}</span></span></lable></p>
	</div>
  </div>
</template>
<script>
  import auth from '../auth'
  export default {
    data () {
      return {
        name: auth.getName()
      }
    }
  }
</script>
<style>
.mod-heroslider .slider-image-content {
    padding: 20px 45px 90px 45px;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    /* top: 0px; */
    left: 0px;
    bottom: 20px;
}
</style>
