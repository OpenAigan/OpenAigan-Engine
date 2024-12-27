import { createTheme } from "@mui/material/styles";

// https://mui.com/material-ui/customization/color/

// dark mode
export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#ff5252",
		},
		background: {
			default: "#181818",
		},
		text: {
			primary: "#F2F2F2",
		},
	},
});

// light mode
export const lightMode = createTheme({
	palette: {
		mode: "light",
	},
});

// TEST mode
export const pinkTest = createTheme({
	palette: {
		primary: {
			main: "#880e4f",
		},
		secondary: {
			main: "#ec407a",
		},
	},
});
