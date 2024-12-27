import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

interface SaveCheckBarProps {
	onSave: () => void;
	onReset: () => void;
}

const SaveCheckBar: React.FC<SaveCheckBarProps> = ({ onSave, onReset }) => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: 2,
				marginBottom: 1,
				borderBottom: 1,
				borderColor: "divider",
				width: "100%",
			}}
		>
			{/* Text on the left */}
			<Typography variant="body1" sx={{ flexGrow: 1 }}>
				Save changes?
			</Typography>

			{/* Buttons on the right */}
			<Box sx={{ display: "flex", gap: 1 }}>
				{/* Reset Button */}
				<Button
					variant="outlined"
					color="error"
					startIcon={<CloseIcon />}
					onClick={onReset}
				>
					Reset
				</Button>

				{/* Save Button */}
				<Button
					variant="contained"
					color="success"
					startIcon={<CheckIcon />}
					onClick={onSave}
				>
					Save
				</Button>
			</Box>
		</Box>
	);
};

export default SaveCheckBar;
