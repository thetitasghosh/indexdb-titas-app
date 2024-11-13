"use client";
import React from "react";
import { Label } from "../ui/label";
import IndexDB from "@/db/IndexDB";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { delay } from "@/lib/utils";
import SubmitButton from "@/components/Buttons/submit-button";
import { Textarea } from "../ui/textarea";
const addTodoForm = () => {
  const addTodo = async (formData) => {
    const name = formData.get("name");
    const text = formData.get("text");
    const checked = false;
    const id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    await delay(1000);
    await IndexDB.todos.add({ id, name, text, checked });
    toast("Added new Thought of yours");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await addTodo(formData);
    event.target.reset();
  };
  return (
    <form
      // action={CreateTodo}
      onSubmit={handleSubmit}
      className="flex h-full w-full flex-col items-center justify-center gap-5 px-5"
    >
      <div className="w-full">
        <Label htmlFor="name" className="pl-2">
          Name
        </Label>
        <Input
          id="name"
          required
          type="text"
          name="name"
          placeholder="Add..."
        />
      </div>
      <div className="w-full">
        <Label htmlFor="text" className="pl-2">
          Thoughts..
        </Label>
        <Textarea
          rows={4}
          id="text"
          type="text"
          name="text"
          placeholder="Ok..."
          required
        />
      </div>
      <div className="w-full">
        <SubmitButton onPendingText={"Adding..."}>Add</SubmitButton>
      </div>
    </form>
  );
};

export default addTodoForm;
