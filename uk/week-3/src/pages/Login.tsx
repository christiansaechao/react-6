import { useState } from "react";

/**
 * In local storage:
 * Username
 * Password
 * Validate username and password in form with the ones in the local storage
 *
 */

interface User {
  username: string;
  password: string;
}

const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [user, setUser] = useState<User>();

  const saveUser = () => {
    const user = localStorage.getItem("user");

    const savedUser = user ? JSON.parse(user) : null;
    if (!saveUser) return console.log("no user");
    setUser(savedUser);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={saveUser}
        action="submit"
        className="flex flex-col items-center"
      >
        <h1 className="text-[20px] mt-10">Login</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="email"
          className="mt-10 p-5"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="mt-10 p-5"
        />
        <button className="mt-10">Login</button>
      </form>
    </div>
  );
};

export default Login;
