//react
import { forwardRef, useImperativeHandle, useState, Fragment } from "react";
//mui
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
} from "@mui/material";
import {
	ZoomIn,
	ZoomOut,
	SkipNext,
	RotateLeft,
	RotateRight,
} from "@mui/icons-material";

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
				<DialogContent className="controls">
					<span>[ENTER]</span>
					<span>
						<SkipNext /> <i>(Next Planet)</i>
					</span>
					<Divider className="divider" textAlign="center" sx={{ color: "divider" }}>
						Zoom
					</Divider>
					<span>[W]</span>
					<span>
						<ZoomIn />
					</span>
					<span>[S]</span>
					<span>
						<ZoomOut />
					</span>
					<Divider className="divider" textAlign="center" sx={{ color: "divider" }}>
						Rotation <i>(stops animation for current Planet)</i>
					</Divider>
					<span>[A]</span>
					<span>
						<RotateLeft />
					</span>
					<span>[D]</span>
					<span>
						<RotateRight />
					</span>
					<span>[R]</span>
					<span>
						<i>Start Animation (again)</i>
					</span>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Got it!</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
});
