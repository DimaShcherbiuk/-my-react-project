// import { Alert } from "./Alert";

// const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };

// import ClickCounter from './ClickCounter';
// import Modal from "./Modal";
// import { useState, useEffect } from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SearchBar from "./SearchBar";
import LangSwitcher from "./LangSwitcher";

const App = () => {
  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };
  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />

      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
          onChange={handleSizeChange}
        />
        Meduim
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </label>

      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={hasAccepted}>
        Proceed
      </button>
    </div>
  );
};

// const App = () => {
//   // const [clicks, setClicks] = useState(0);
//   // const [isOpen, setIsOpen] = useState(false);

//   // const handleClick = () => {
//   //   setClicks(clicks + 1);
//   // };

//   // const handleToggle = () => {
//   //   setIsOpen(!isOpen);
//   // };
//   const [clicks, setClicks] = useState(0);

// 	// Функція, яку будемо передавати в ClickCounter
// 	// для виклику під час кліку
// 	const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
// 			<ClickCounter value={clicks} onUpdate={handleClick}/>
//       {/* <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>} */}
//     </>
//   );
// };

// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
// 	});

// 	const updateX = () => {
// 			setValues({
// 			...values,
// 			x: values.x + 1
// 		});
// 	};

// 	const updateY = () => {
// 		setValues({
// 			...values,
// 			y: values.y + 1
// 		});
// 	};

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

export default App;
