import React, { useState } from 'react'
import { createSuper } from 'typescript';


interface Props {
  count?: number;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
  user?: Array<{name: string, id: number}>;
  setUser?: React.Dispatch<React.SetStateAction<string>>;
  id?: number;
}

let i = 0;

let userArray: Array<{user: string, id: number}> = [];

const App : React.FC<Props> = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState('');

  const createUser = (name: string, number: number) => {
    return {
      user: name,
      id: number,
    }
  }

  const clickHandlerIterate = (e: React.MouseEvent) => {
    setCount(count + 1);
    e.preventDefault();
  }

  const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    // sets the user as current
    setUser(e.target.value);


    e.preventDefault();
  }

  const clickHandleUser = (e: React.FormEvent<HTMLFormElement>) => {
    i = userArray.length | 0;
    i++;
    const person: any = {
      user: e.target.value,
      id: i,
    };
    userArray.push(person);
    console.log(userArray);
    userArray.push({user, id: 2});
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button className="button" onClick={clickHandlerIterate}>You Push My Buttons</button>
      <form className="submitForm" onSubmit={clickHandleUser} >
        <input type="text" className="submitText" onChange={formChangeHandler} />
        <input type="submit" className="submitBtn" />
      </form>

      <ul>
        {userArray.map((user, id) => (
          <ul>
            <li>{user}</li>
            <li>{id}</li>
          </ul>
        ), [])
    }
      </ul>
    </div>
  );
}

export default App;