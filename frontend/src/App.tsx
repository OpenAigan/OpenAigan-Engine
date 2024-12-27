// Core
import React, { useState } from "react";
// MUI Nav
import { Tabs, Tab } from "@mui/material";
// MUI Icons
import SettingsIcon from "@mui/icons-material/Settings";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
// More MUI Components
import { Typography, Box, Switch } from "@mui/material";
// Custom Components
import SettingsTab from "./components/SettingsTab";
import ControlTab from "./components/ControlTab";
import BotTab from "./components/BotTab";
// Theme
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import * as palettes from "./styles/MUI_palettes";

// Assets
// Ensure /assets is beside /frontend
import meta from "../../assets/meta.json";

// Quick thank you
console.log("Thank you for using OpenAigan - " + meta.version + "!");
console.log("Made by " + meta.author);
console.log("Supporting bot types: " + meta.supported);

// Bacl to main app
const App = () => {
	const [activeTab, setActiveTab] = useState<number>(0);

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setActiveTab(newValue);
	};

	return (
		<ThemeProvider theme={palettes.lightMode}>
			<CssBaseline />

			{/* Parent container with flexbox */}
			<Box sx={{ display: "flex", height: "100vh" }}>
				{/* 
				
				*/}

				{/* DEV GUI */}
				<Box
					sx={{
						flex: 1,
						width: "40%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					{/* Tab Navigation */}
					{/* Icons from MUI: https://mui.com/material-ui/material-icons/ */}
					<Tabs value={activeTab} onChange={handleChange}>
						<Tab
							icon={<SettingsIcon />}
							iconPosition="start"
							label="Settings"
						/>
						<Tab
							icon={<SportsEsportsIcon />}
							iconPosition="start"
							label="Control"
						/>
						<Tab label="{bot}" />
					</Tabs>

					{/* Tab Content */}
					<Box sx={{ flex: 1, margin: 2 }}>
						<Box hidden={activeTab !== 0}>
							<SettingsTab />
						</Box>
						<Box hidden={activeTab !== 1}>
							<ControlTab />
						</Box>
						<Box hidden={activeTab !== 2}>
							<BotTab />
						</Box>
					</Box>

					{/* Bottom Box */}
					<Box
						sx={{
							padding: 2,
							borderTop: 1,
							borderColor: "divider",
							textAlign: "center",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						{/* Engine Version */}
						<Typography variant="body1">{meta.version}</Typography>

						{/* Slide Toggle for simulation only */}
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
							}}
						>
							<Typography variant="body2">
								Simulation Only
							</Typography>
							<Switch />
						</Box>
					</Box>
				</Box>

				{/* SIM DISPLAY */}
				<Box
					sx={{
						flex: 2,
						width: "60%",
						padding: 2,
						backgroundColor: "#1976d2",
					}}
				>
					<Typography variant="h1">sim</Typography>
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default App;
