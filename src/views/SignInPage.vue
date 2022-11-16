<template>
  <div class="login-page-wrapper d-flex flex-column align-items-center">
    <LogoLarge></LogoLarge>
    <SignInForm></SignInForm>
  </div>
</template>

<script>
import LogoLarge from '../components/common/LogoLarge.vue'
import SignInForm from '../components/pages/SignInForm.vue'

export default {
  name: 'login-page',
  components: { LogoLarge, SignInForm },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: red;
}
h1 {
  color: red;
}
</style>
