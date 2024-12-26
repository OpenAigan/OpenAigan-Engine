import { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";

const ControlTab = () => {
	const [text, setText] = useState("");

	return (
		<Box>
			<Typography variant="h6">Control Content</Typography>
			<TextField
				label="Type something"
				value={text}
				onChange={(e) => setText(e.target.value)}
				variant="outlined"
			/>
		</Box>
	);
};

export default ControlTab;
