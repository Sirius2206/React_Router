import React, {useState} from 'react';
import Main from './components/menu/Main';
import './App.css';

function App() {
  const [app, setApp] = useState(<Main />);
  const [currentClass, setCurrentClass] = useState("Task1");
  const apps = [
    {
      name: "Task1",
      component: <Main />
    },
    {
      name: "json-fetch",
      component: ''
    },
    {
      name: "authentication",
      component: ''
    }
  ]

  const handleClick = e => {
    const curApp = apps.find(item => item.name === e.target.className);
    setApp(curApp.component);
    setCurrentClass(curApp.name);
  }
  
  return (
    <div>
      <header className="header_main">
        <button className='Task1' onClick={handleClick}>Задание №1(Карточки)</button>
        <button className='' onClick={handleClick}>Задание №2(Кастомный хук)</button>
        <button className="" onClick={handleClick}>Задание №3(Collapse)</button>
      </header>
      <div className={"app_" + currentClass}>{app}</div>
    </div>
  );
}

export default App;
