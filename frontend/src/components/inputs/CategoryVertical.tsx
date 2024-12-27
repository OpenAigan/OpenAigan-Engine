import React, { ReactNode } from "react";
import { Paper, Typography, Box } from "@mui/material";

// Define the props for the component
interface WrapperProps {
	title: string;
	children: ReactNode;
}

const CategoryVertical: React.FC<WrapperProps> = ({ title, children }) => {
	return (
		<Paper elevation={2} sx={{ padding: 2 }}>
			<Typography variant="h6" gutterBottom>
				{title}
			</Typography>

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 2,
					width: "100%",
					flexDirection: "column",
				}}
			>
				{children}
			</Box>
		</Paper>
	);
};

export default CategoryVertical;
