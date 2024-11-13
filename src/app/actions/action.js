"use server";
import IndexDB from "../../db/IndexDB";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export async function CreateTodo(formData) {
  let name = formData.get("name");
  let text = formData.get("text");
  let checked = false;
  let id = Date.now() + "-" + Math.floor(Math.random() * 10000);
  await delay(1000);
  await IndexDB.todos.add({ id, name, text, checked });
  alert("Add new Thoughts of your's");
}
export async function DeleteTodo(id) {
  await IndexDB.todos.delete(id);
}
export async function CheckedTodo(id, status) {
  await IndexDB.todos.update(id, { checked: status });
}
