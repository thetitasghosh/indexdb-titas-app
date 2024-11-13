"use client";
import React from "react";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children, onPendingText }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full">
      {pending && <Loader className="animate-spin" />}
      {pending ? onPendingText : children}
    </Button>
  );
};

export default SubmitButton;
