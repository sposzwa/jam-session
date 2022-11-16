<template>
  <form class="d-flex flex-column p-4">
    <input type="text" placeholder="Login" />
    <input type="text" placeholder="Password" />
    <div class="d-flex justify-content-between">
      <a href="#">Forgot your password?</a>
      <div>
        <input type="checkbox" value="lsRememberMe" id="rememberMe" />
        <label for="rememberMe">Remember me</label>
      </div>
    </div>
    <button class="button_base button_base--primary">Sign in</button>
    <button class="button_base button_base--secondary">Sign out</button>
    <SignInWithSocial></SignInWithSocial>
  </form>
</template>

<script>
import SignInWithSocial from '../ui/SignInWithSocial.vue'

export default {
  name: 'SignInForm',
  components: { SignInWithSocial },
}
</script>

<style lang="scss">
@use '@/styles/basics/_button.scss';
</style>
