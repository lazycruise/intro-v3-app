import TodoList from "@/components/TodoList";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";

const getData = async () => {
  // await new Promise((resolve) => setTimeout(() => resolve(0), 2000));
  const todos = await db.todo.findMany({});

  return todos;
};

const ToDosPage = async () => {
  const todos = await getData();
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default ToDosPage;
