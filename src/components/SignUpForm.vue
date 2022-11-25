<template>
  <form class="flex flex-col items-center">
    <h2 class="text-5xl mt-5 mb-20">Sign up</h2>
    <input class="input mt-0" type="text" placeholder="Type in your first name" required />
    <input class="input" type="text" placeholder="Type in your second name" required />
    <input class="input" type="text" placeholder="Type in your login name" required />
    <input class="input" type="email" placeholder="Type in your email" required />
    <input
      type="password"
      id="register"
      class="input block"
      placeholder="Type in your password"
      required
    />
    <input
      type="password"
      id="register"
      class="input block mb-10"
      placeholder="Repeat your password"
      required
    />
    <button class="transition block button button--primary" type="submit">Sign Up</button>
    <button class="transition block button button--secondary" type="button">Go back</button>
  </form>
</template>
