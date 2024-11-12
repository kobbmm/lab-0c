import { mysqlPool } from "@/app/utils/db"

export default async function TodoPage({}) {
    const promisepool = mysqlPool.promise()
    const todos = await promisepool.execute("Select * from todos")
    const [rows, fields] = todos;
    console.log(todos)    
    return( <>
    <div>
        <h1>Todo list page</h1>

        <ul>
            {rows.map(row => (<li key={row.id} >{row.title}</li>))}
        </ul>
    </div>
    </>)
}