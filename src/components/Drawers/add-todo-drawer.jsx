import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import AddTodoForm from "@/components/Forms/add-todo-form";
import { Button } from "../ui/button";
const addTodoDrawer = ({ children }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="w-full ">
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription hidden>
            This action cannot be undone.
          </DrawerDescription>
        </DrawerHeader>
        <AddTodoForm />
        <DrawerFooter>
          <DrawerClose>
            <Button className="w-full" variant="outline">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default addTodoDrawer;
