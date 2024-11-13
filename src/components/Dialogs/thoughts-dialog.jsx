import React from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "../ui/dialog";
const ThoughtsDialog = ({ title, text, children }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="h-52 max-w-[400px] rounded-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription hidden>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <p>{title}</p>
      </DialogContent>
    </Dialog>
  );
};

export default ThoughtsDialog;
