import React from "react";
import ThoughtsDialog from "@/components/Dialogs/thoughts-dialog";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
const ThoughtsCard = ({ title, text }) => {
  return (
    <ThoughtsDialog text={text} title={title}>
      <Card className="min-w-32">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{text}</CardContent>
      </Card>
    </ThoughtsDialog>
  );
};

export default ThoughtsCard;
