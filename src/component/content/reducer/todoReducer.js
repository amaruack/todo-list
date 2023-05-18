export default function todoReducer(todoList, action){
    console.log(action);

    switch (action.type) {
        case 'updated': {
            const {todoItem, status} = action;
            return todoList.map((todo) => {
                if(todo.todoItem === todoItem) {
                    return {todoItem, status}
                }
                return todo;
            })
        }
        case 'added' : {
            if (todoList.find(t => t.todoItem === action.todoItem)) {
                // alert('같은 항목 있음');
                return [...todoList]
            }
            const addTodo = {
                todoItem : action.todoItem,
                status : 'active'
            }
            return [...todoList, addTodo]

        }
        case 'deleted' : {
            return todoList.filter(m => m.todoItem !== action.todoItem)
        }

        default:{
            throw Error(`알수없는 액션 타입이다. : ${action.type}`)
        }

    }
}
