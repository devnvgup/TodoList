// src/pages/Login.jsx
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../config/firebase.js";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export default function Login() {
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential != null) {
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          if (user) {
            navigate("/home");
          }
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    // localStorage.setItem('user', JSON.stringify(result.user));
    // navigate('/dashboard');
  };

  const loginWithFacebook = async () => {
    // const result = await signInWithPopup(auth, facebookProvider);
    // localStorage.setItem('user', JSON.stringify(result.user));
    // navigate('/dashboard');
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Login to Your Account
        </h2>
        <p className="text-gray-500 mb-6">Choose a method to continue</p>

        <button
          onClick={loginWithGoogle}
          className="w-full mb-4 py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
        >
          Login with Google
        </button>

        <button
          onClick={loginWithFacebook}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          Login with Facebook
        </button>
      </div>
    </div>
  );
}
