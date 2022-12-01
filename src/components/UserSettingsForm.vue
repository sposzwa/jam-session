<template>
  <form class="flex flex-col items-center">
    <h2 class="text-5xl mt-5 mb-20">Profile settings</h2>
    <input class="input mt-0" type="text" value="Joe" required />
    <input class="input" type="text" value="Doe" required />
    <input class="input" type="text" value="joeDoe" required />
    <input class="input" type="email" value="joeDoe@mail.com" required />
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
    <label
      class="transition button w-[338px] text-center hover:cursor-pointer mb-10"
    >
      <input type="file" class="hidden" />
      Image
    </label>

    <textarea
      class="w-[363px] resize-none rounded-md h-[150px] p-2 mb-10 text-[1.25rem]"
    >
    Lorem ipsum dolor sit amet...</textarea
    >
    <button
      class="transition block button button--primary w-[338px]"
      type="submit"
    >
      Update
    </button>
    <button class="transition block button button--secondary" type="button">
      Go back
    </button>
  </form>
</template>
