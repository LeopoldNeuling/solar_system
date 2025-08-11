//react
import { forwardRef, useImperativeHandle, useState, Fragment } from "react";
//mui
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import { ZoomIn, ZoomOut, SkipNext } from "@mui/icons-material";

export const UserInfoDialog = forwardRef((_, ref) => {
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};

	useImperativeHandle(ref, () => ({
		openDialog: () => setOpen(true),
	}));

	return (
		<Fragment>
			<Dialog fullWidth open={open} onClose={handleClose}>
				<DialogTitle sx={{ textDecoration: "underline" }}>Controls</DialogTitle>
				<DialogContent>
					[ENTER] - <SkipNext />
					(next Planet)
					<br />
					[W] - <ZoomIn />
					<br />
					[S] - <ZoomOut />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Got it!</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
});
