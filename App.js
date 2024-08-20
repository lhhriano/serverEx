import "./App.css";
import {useEffect, useState} from "react";
import Input from "./Input";
import Output from "./Output";
import axios from "axios";

const App = ()=>{
    // 전역변수를 state로 만들어 주어야 re rendering 된다.
    // 구조분해 할당 = state변수, setter함수
    const [name, setName] = useState("Todo List");
    const [todoList, setTodoLilst] = useState([]);
    // const [noCnt, setNoCnt] = useState(105);
    const serverURL = 'http://localhost:5000/todo';

    useEffect(()=>{
        axios.get(serverURL).then(function (response) {
            setTodoLilst(response['data']);
        });
    }, []);

    const onClickEvent = (newTotoTitle) => {
        axios.post(serverURL, {title: newTotoTitle}).then(function (response) {
            setTodoLilst(response.data); // setTodoLilst(response['data']);
        });
    }

    const onDelete = ({no, title, done}) => {
        console.log("프론트 no: ", no);
        axios.delete(serverURL + "/"+no).then(function (response) {
            console.log(response.data);
            setTodoLilst(response.data); // setTodoLilst(response['data']);
        });
    };

    const onDoneFlag = (todoItem)=>{
        todoItem.done = !todoItem.done;
        axios.put(serverURL, todoItem).then(function (response) {
            setTodoLilst(response.data); // setTodoLilst(response['data']);
        });
    };

    const onEdit = (todoItem)=>{
        axios.put(serverURL, todoItem).then(function (response) {
            setTodoLilst(response.data); // setTodoLilst(response['data']);
        });
    };

    // 취소선 스타일 설정
    const lineThroughClass = {textDecoration:"line-through", color:"blue"}

    return (<div className="todoList">
        <div className="App-header">
            <h1>{name} App</h1>
        </div>
        {/* todo 타이틀 입력 콤포넌트 위치 */}
        <Input onClickEvent={onClickEvent} />

        {/* todo 목록이 출력 되는 콤포넌트 위치 */}
        <Output todoList={todoList} onDelete={onDelete} onDoneFlag={onDoneFlag} onEdit={onEdit} />
    </div>);
}

export default App;