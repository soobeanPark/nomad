//<!--todo3. form과 ul 가져오기--> 
const todoForm = document.getElementById("todoForm");
//<!--todo5. html의 input value 얻어오기--> 
const todoValue = todoForm.querySelector("input");
const todoUl = document.getElementById("todo-list");

const TODOS_KEY = "todos"

//<!--todo16. 새로고침해도 사라지지 않는 todolist 만들기(paintTodo array로 만들기)-->
 //<!--todo19. (const>let)으로 바꿔서 기존 내용 값 유지시키기-->
let toDos = [];

 //<!--todo16.3 local storage에 newTodo 넣기-->
function saveTodo(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//<!--todo15. button에 eventListener function 만들기-->
function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
}

//<!--todo7. todo를 그리는 function 만들기-->
function paintTodo(newTodo){
  //<!--todo9. handleTodoSubmit에서 받아온 value를 html 상에서 list 그리고 그 안에 span으로 나타내기-->
  const li = document.createElement("li");
  const span = document.createElement("span");
  //<!--todo10. span 안에 todoValue.value 값 받아오기-->
    span.innerText = newTodo;
  //<!--todo12. 버튼 생성하기-->
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  //<!--todo13. li 안에 버튼 넣기(왜 span 안에 넣으면 안 될까?)-->
  li.appendChild(button);
  //<!--todo14. button에 eventListener 만들기-->
  button.addEventListener("click", deleteTodo);
  //<!--todo11. html의 ul안에 li 넣기-->
  todoUl.appendChild(li);
} 

//<!--todo4. handleTodoSubmit function, event listener 만들기-->
function handleTodoSubmit(event){
  event.preventDefault();
  //<!--todo6. html의 input value 얻어오고 등록 후 빈칸으로 다시 만들기--> 
  const newTodo = todoValue.value;
  todoValue.value = "";
  //<!--todo16.2-->
  toDos.push(newTodo);
  //<!--todo8. handleTodoSubmit function이 paintTodo function을 사용하기-->
  paintTodo(newTodo);
  saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

 //<!--todo17. local storage에 newTodo array로 바꾸어 넣기-->
 const savedTodos = localStorage.getItem(TODOS_KEY);

 if(savedTodos !== null){
   const parsedTodos = JSON.parse(savedTodos);
    //<!--todo19.2 (const>let)으로 바꿔서 기존 내용 값 유지시키기-->
   toDos = parsedTodos;
    //<!--todo18. array 하나하나를 paintTodo로 꾸며서 화면에 나타내기-->
   parsedTodos.forEach(paintTodo);
 }
