// import { getAuth, signInWithRedirect } from "firebase/auth";
// import { GoogleAuthProvider, getRedirectResult} from "firebase/auth";

// const auth = getAuth();

// const provider = new GoogleAuthProvider();
// signInWithRedirect(auth, provider);

// getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
    
//     let credential;
//     let token;
//     let user;
//     if (result) {
//       credential = GoogleAuthProvider.credentialFromResult(result);
//       token = credential?.accessToken;
//       user = result.user;
//     }
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//     console.log(`Token: ${token}`);
//     console.log(`User: ${user}`);
//   }).catch((error) => {
//     console.log(error)
//     // Handle Errors here.
//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     // // The email of the user's account used.
//     // const email = error.customData.email;
//     // // The AuthCredential type that was used.
//     // const credential = GoogleAuthProvider.credentialFromError(error);
//     // // ...
//   });
const LoginPage = () => {
  return (
    <div>
      
    </div>
  )
}

export default LoginPage