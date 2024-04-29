
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
import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return savedClicks;
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
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
