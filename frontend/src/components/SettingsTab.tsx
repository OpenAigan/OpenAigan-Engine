import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const SettingsTab = () => {
	const [count, setCount] = useState(0);

	return (
		<Box>
			<Typography variant="h6">Settings Content</Typography>
			<Typography>Counter: {count}</Typography>
			<Button variant="contained" onClick={() => setCount(count + 1)}>
				Increment
			</Button>
		</Box>
	);
};

export default SettingsTab;
