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
import { ZoomIn, ZoomOut, RotateLeft, RotateRight } from "@mui/icons-material";

export const UserInfoDialog = forwardRef((_, ref) => {
	const [open, setOpen] = useState(false);

	useImperativeHandle(ref, () => ({
		openDialog: () => setOpen(true),
		closeDialog: () => setOpen(false),
	}));

	return (
		<Fragment>
			<Dialog fullWidth open={open} onClose={() => ref.current.closeDialog()}>
				<DialogTitle sx={{ textDecoration: "underline" }}>Controls</DialogTitle>
				<DialogContent className="controls">
					<span>[ENTER]</span>
					<span>
						<i>Next Planet</i>
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
					<span>[Q]</span>
					<span>
						<RotateLeft />
					</span>
					<span>[E]</span>
					<span>
						<RotateRight />
					</span>
					<span>[R]</span>
					<span>
						<i>Start Animation (again)</i>
					</span>
					<Divider className="divider" textAlign="center" sx={{ color: "divider" }}>
						Background
					</Divider>
					<span>[X]</span>
					<span>
						<i>Toggle Milky Way (on/off)</i>
					</span>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => ref.current.closeDialog()}>Got it!</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
});
