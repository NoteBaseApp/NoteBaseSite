import Google from "@auth/core/providers/google"
import { SvelteKitAuth } from "@auth/sveltekit"
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AUTH_SECRET } from '$env/static/private';

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
  const authOptions = {
    providers: [
      Google({
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET
      })
    ],
    // callbacks: {
    //   async session({ session, token, user }) {
    //     // Send properties to the client, like the id. The problem is that token.sub cant be used as the user id because it keeps FUCKING CHANGING WHENEVER THE USER LOGS OUT AND BACK IN! EVEN THO GOOGLE SAYS ITS THE USERS UUID
    //     console.log("user token? " + user);
    //     session.user.id = await GetGoogleSub(token.id);
    //     return session;
    //   },
    // },
    secret: AUTH_SECRET,
    trustHost: true,
  }
  return authOptions
})

// async function GetGoogleSub(token: string):Promise<string> {
//   let userId = "";
  
//   try {
//     var response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json`,
//         {
//             headers: {
//                 'Authorization':`Bearer ${token}`
//             }
//         }
//     );
//     var result = await response.json();
// }
// catch {
//     return userId
// }

// return userId
// }