<script>
  import { auth } from "../firebase";
  import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user, isLoggedIn } from "../stores";
  import { goto } from "$app/navigation";

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      $user = res.user;
      $isLoggedIn = true;
      goto("/profile");
    } catch (error) {
      console.error(error);
    }
  };
</script>

<button
  on:click={login}
  class="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md text-white"
>
  Google Login
</button>
