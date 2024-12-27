import { useState } from "react";
import { Box, Typography, Paper, FormControl, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import SaveCheckBar from "./SaveCheckBar";
import CategoryVertical from "./inputs/CategoryVertical";

// Import SETTINGS.json
import SETTINGS from "../../../assets/SETTINGS.json";

// MAYBE DO NEED TO USE THE GLOBAL STATE WRAPPER WHOOP

const SettingsTab = () => {
	//
	// Theme GUI state
	//
	const [theme, setTheme] = useState(SETTINGS.devgui_settings.theme);
	// Hold selected theme
	const handleTheme = (event: SelectChangeEvent) => {
		// UPDATE JSON
		// UPDATE APP.tsx THEME
		console.log("Theme set to: ");
		setTheme(event.target.value);
	};

	// Track changes
	// const [showSaveCheckBar, setShowSaveCheckBar] = useState(true);

	// const handleSave = () => {
	// SAVE SETTINGS.json
	// 	console.log("Settings saved!");
	// 	setShowSaveCheckBar(false);
	// };

	// const handleReset = () => {
	// REVERT TO JSON
	// 	console.log("Settings reset!");
	// 	setShowSaveCheckBar(false);
	// };

	return (
		<>
			{/* Save changes action bar MAYBE STILL THINKING ON ARC */}
			{/* {showSaveCheckBar && (
				<SaveCheckBar onSave={handleSave} onReset={handleReset} />
			)} */}

			{/* Settings content */}
			<Box
				sx={{
					padding: 2,
					display: "flex",
					gap: 2,
					flexDirection: "column",
				}}
			>
				{/*  */}
				{/* GUI Settings */}
				{/*  */}
				<CategoryVertical title="GUI Settings">
					{/* Theme select */}
					{/* 👇👇👇👇 need to make own component for reuse */}
					{/* call like input w  */}
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2,
							width: "100%",
						}}
					>
						<Box>Theme</Box>
						<FormControl fullWidth>
							<Select
								displayEmpty
								value={theme}
								onChange={handleTheme}
							>
								<MenuItem value="light">Light</MenuItem>
								<MenuItem value="dark">Dark</MenuItem>
							</Select>
						</FormControl>
					</Box>
					{/* 👆👆👆👆👆 */}
				</CategoryVertical>

				{/*  */}
				{/* DEV Settings */}
				{/*  */}
				<CategoryVertical title="Developer Settings">
					{/* yay */}
					<em>child</em>
					{/* robo select */}
				</CategoryVertical>
			</Box>
		</>
	);
};

export default SettingsTab;
