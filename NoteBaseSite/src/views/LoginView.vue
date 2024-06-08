<template>
    <h2 v-if="isAuthenticated">Welcome {{ user?.email }}</h2>
    <div>
      <button @click="login">Log in</button>
      <button @click="login">Log in</button>
    </div>
</template>
<script lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { loginWithRedirect, user, isAuthenticated } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        },
        user,
        isAuthenticated
      };
    }
  };
</script>