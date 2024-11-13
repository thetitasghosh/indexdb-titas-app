import React from "react";
import Addbutton from "@/components/Buttons/add-button";
import AddTodoDrawer from "@/components/Drawers/add-todo-drawer";
const Footer = () => {
  return (
    <div className="w-full items-center justify-center flex h-14 border">
      <AddTodoDrawer>
        <Addbutton />
      </AddTodoDrawer>
    </div>
  );
};

export default Footer;
