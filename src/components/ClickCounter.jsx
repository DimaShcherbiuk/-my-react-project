// import { useState } from 'react';

const ClickCounter = ({ value, onUpdate }) => {
	return <button onClick={onUpdate}>Current: {value}</button>
};

export default ClickCounter;