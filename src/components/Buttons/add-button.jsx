import React from "react";
import { PencilLine } from "lucide-react";
import { Button } from "../ui/button";
const addButton = () => {
  return (
    <Button className="" variant={"destructive"} size={"icon"}>
      <PencilLine />
    </Button>
  );
};

export default addButton;
