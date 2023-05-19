

export default function todoReducer(todoList, action){

    switch (action.type) {
        case 'updated': {
            const {todoId, status} = action;
            const updated = todoList.map((todo) => {
                if(todo.todoId === todoId) {
                    return {todoId, todoItem:todo.todoItem, status}
                }
                return todo;
            })
            localStorage.setItem("todoList", JSON.stringify(updated));
            return updated
        }
        case 'added' : {
            if (todoList.find(t => t.todoItem === action.todoItem)) {
                // alert('같은 항목 있음');
                return [...todoList]
            }
            const addTodo = {
                todoId : action.todoId,
                todoItem : action.todoItem,
                status : 'active'
            }
            const added = [...todoList, addTodo];
            localStorage.setItem("todoList", JSON.stringify(added));
            return added

        }
        case 'deleted' : {
            const deleted = todoList.filter(m => m.todoId !== action.todoId);
            localStorage.setItem("todoList", JSON.stringify(deleted));
            return deleted;
        }

        default:{
            throw Error(`알수없는 액션 타입이다. : ${action.type}`)
        }

    }
}
