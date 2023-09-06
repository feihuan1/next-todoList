//start json server:  npx json-server -w db.json -p 3500 -H 127.0.0.1

import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

export const revalidate = 0

export default function Home() {

  return (
    <>
      <AddTodo />
      {/* @ts-expect-error Server Component */}
      <TodoList />
    </>
  )
}
