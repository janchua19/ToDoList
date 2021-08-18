import './App.css';
import TodoList from './features/todos/components/TodoList';
import {Route, Link, BrowserRouter, Switch} from "react-router-dom";
import PageNotFound from './features/PageNotFound/PageNotFound';
import DoneList from './features/todos/components/DoneList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to = "/"> Todo List </Link>
        </ul>
        <ul>
          <Link to = "/done"> Done List </Link>
        </ul>
        <Switch>
          <Route exact path="/" component={TodoList}></Route>
          <Route exact path="/done" component={DoneList}></Route>
          <Route path="*" component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
