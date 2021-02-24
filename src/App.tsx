import React, { useState } from 'react'

// use to pass props to App component
interface Props {

}

const App : React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [nameStore, setNameStore] = useState('');

  const [birthday, setBirthday] = useState<number>();
  const [birthdayStore, setBirthdayStore] =useState('');

  const runNum = (props: string) => {
    let x = props.split('-');
    let xMonth = parseInt(x[2]);
    let date = new Date();
    let currentMonth = date.getUTCMonth();
    let monthsLeft: number = xMonth - currentMonth;
    return monthsLeft;
  }


  return (
    <div className="App">
      <h1>{name ? `Nice to meet you, ` + name + `!` : `What is your name?`}</h1>
      <form className="submitForm" onSubmit={((e) => {
        setName(nameStore);
        let y = runNum(birthdayStore);
        setBirthday(y);
        e.preventDefault();
      }
      )} >
        <input type="text" className="submitText" onChange={((e) => {
          setNameStore(e.target.value);
          e.preventDefault();
        })} />
        <label>When is your birthday?
          <input type="date" name="birthday" onChange={((e) => {
            setBirthdayStore(e.target.value);
            e.preventDefault();
          })} />
        </label>
        <input type="submit" className="submitBtn" value="submit" />
      </form>
      
      <div>
        {birthday ? 
        `You have ` + birthday + ` months until your birthday!`
        : '' }
      </div>

    </div>
  );
}

export default App;