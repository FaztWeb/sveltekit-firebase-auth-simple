<script>
  import "../app.css";

  import { user, isLoggedIn } from "../stores";
  import { auth } from "../firebase";
  import { signOut, onAuthStateChanged } from "firebase/auth";

  const logout = async () => {
    try {
      await signOut(auth);
      $user = {};
      $isLoggedIn = false;
    } catch (error) {
      console.error(error);
    }
  };

  onAuthStateChanged(auth, (authUser) => {
    $user = authUser;
    $isLoggedIn = !!authUser;
  });
</script>

<nav class="bg-neutral-800 p-4 text-white">
  <div class="container m-auto">
    <ul class="flex">
      <li class="mr-6">
        <a href="/" class="text-blue-500 hover:text-blue-800">home</a>
      </li>
      {#if $isLoggedIn}
        <li class="mr-6">
          <a href="/profile">profile</a>
        </li>
        <li class="mr-6">
          <!-- logout and redirect with /# -->
          <a
            href="/#"
            on:click={logout}
            class="text-blue-500 hover:text-blue-800"
          >
            logout
          </a>
        </li>
      {:else}
        <li class="mr-6">
          <a href="/login" class="text-blue-500 hover:text-blue-800">login</a>
        </li>
      {/if}
    </ul>
  </div>
</nav>

<main class="bg-zinc-900 text-white h-screen">
  <div class="container m-auto py-10 h-full flex justify-center items-center">
    <div>
      <slot />
    </div>
  </div>
</main>

<style>
</style>
