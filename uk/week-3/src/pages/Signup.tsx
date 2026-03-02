import { useState } from "react";
import { setUser } from "../stores/slices/userSlice";
import { useDispatch } from "react-redux";

/**
 * Store in local storage:
 * Username
 * Password
 * Validate username and password in form with the ones in the local storage
 */

/**
 * Homework
 * Create Protected Layout
 * Validate user is logged in
 * Logout Button - updates local storage and logs user out
 */

export const Signup = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const dispatch = useDispatch();

  const saveInfo = () => {
    const user = {
      username,
      password,
    };

    if (!username || !password || username.length <= 0) {
      throw new Error("No username or password provided")
    }

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loggedIn", JSON.stringify(true));
    dispatch(setUser(user.username || ""));
  };

  return (
    <div className="flex justify-center items-center">
      <h2>CREATE AN ACCOUNT</h2>
      <h3>Name</h3>
      <input type="text" placeholder="Enter your name" />
      <h3>Email</h3>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter your password"
      />
      <h3>Password</h3>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Enter your password"
      />
      <button onClick={saveInfo}>Sign up</button>
    </div>
  );
};
