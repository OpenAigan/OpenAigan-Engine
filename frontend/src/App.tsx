import { useState } from "react";
import "./styles/App.css";

import { Button, Typography } from "@mui/material";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<Typography variant="h4">Hello, MUI!</Typography>
				<Button variant="contained" color="primary">
					Click Me
				</Button>
			</div>

			<Button
				variant="contained"
				color="primary"
				onClick={() => setCount((count) => count + 1)}
			>
				count is {count}
			</Button>
		</>
	);
}

export default App;
