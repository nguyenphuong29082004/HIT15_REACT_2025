import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Counter from './components/Header/Header';
import TextFiled from './components/Header/Text_filed';
import PostItem from './components/PostItem';
import Card from './components/card';
import TaskList from './components/Demo_state';

function App() { 
  const user = {
    name: "a",
    age: 18
  }
  const numArr = [
    {
      name: "A",
      age: 20,
      gender: "Nam"
    },
    {
      name: "B",
      age: 20,
      gender: "Nam"
    },
    {
      name: "C",
      age: 20,
      gender: "Nam"
    },
    {
      name: "D",
      age: 20,
      gender: "Nam"
    },
    {
      name: "E",
      age: 20,
      gender: "Nam"
    },

  ];
  const [peoples, setPeoples] = useState(numArr)
  const [people, setPeople] = useState({
    name: "",
    age: "",
    gender: "",
  });
  
  const addPeople = () => {
    setPeoples([...peoples, people]);
  }

  

  return (
    <>
      {/* <Counter/>
      <TextFiled/>
      <PostItem props={user} title="Caculator" number="5" >
        <Counter title="Caculator"/>
      </PostItem>
       */}
      {/* <label htmlFor='email' >Email</label>
      <input  id='email' type="text" name="" /> */}
      
      {
        // su dung map
        // luu ngoac tron
        // numArr.map((item) => (
        //   <div>{item}</div>
        //   // <div key={item}>
        //   //   <p>=================</p>
        //   //     <Counter/>
        //   // </div>
        // ))
        peoples.map((item, index) => {
          return <Card item={item}/>
          // <Counter title={item}/>

          // <div key={index}>{item}</div>
        })
      }
      <label htmlFor="">Name: </label>
      <input type="text" name="name" id="" value={people.name} onChange={(e)=>{
        setPeople({...people, name: e.target.value});
      }}/> <br />
      <label htmlFor="">Age: </label>
      <input type="text" name="age" id=""
      value={people.age} onChange={(e)=>{
        setPeople({...people, age: e.target.value});
      }}
      /> <br />
      <label htmlFor="">Gender: </label>
      <input type="text" name="gender" id=""
      value={people.gender} onChange={(e)=>{
        setPeople({...people, gender: e.target.value});
      }}
      />
    <button onClick={addPeople}>Theem</button>

    <br /><br /><br />
    <br /><br /><br />
    <h1 style={{color: "red"}}>Them cong viec</h1>
      <TaskList/>
    </>
  );
}
//map co hai tham so 
// numArr.map(item, index) 
// index: chi so cac phan tu trong mang
export default App;
