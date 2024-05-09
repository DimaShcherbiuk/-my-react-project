// import { useId } from "react";
import { useState } from "react";

// const LoginForm = ({ onLogin }) => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     onLogin({
//       login: login.value,
//       password: password.value,
//     });

//     form.reset();
//   };

//   const loginId = useId();
//   const passwordId = useId();

const LoginForm = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSumit = (evt) => {
    evt.preventDefault();

    console.log(values);

    setValues({
      login: "",
      password: "",
    });
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor={loginId}>Login</label>
    //   <input type="text" name="login" id={loginId} />

    //   <label htmlFor={passwordId}>Password</label>
    //   <input type="password" name="password" id={passwordId} />

    //   <button type="submit">Login</button>
    // </form>
    <form onSubmit={handleSumit}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
