// import React, { useState } from 'react';

// function TaskList() {
//   const [tasks, setTasks] = useState(["Buy groceries", "Clean the house", "Pay bills"]);

//   const addTask = () => {
//     setTasks([...tasks, "New Task"]); // Thêm một công việc mới vào danh sách
//   };

//   return (
//     <div>
//       <h3>Task List:</h3>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//       <button onClick={addTask}>Add Task</button>
//     </div>
//   );
// }

// export default TaskList;

import React, { useState } from 'react';

function TaskList() {
  const [user, setUser] = useState({ name: "John Doe", age: 25 });

  const updateName = () => {
    setUser({ ...user, name: "Jane Smith" }); // Cập nhật tên mà không làm mất các thuộc tính khác
  };

  const updateAge = () => {
    // setUser({ ...user, age: 30 }); 
    // Cập nhật tuổi mà không làm mất các thuộc tính khác
     setUser({ ...user, age: user.age+5}); 
  };

  return (
    <div>
      <h3>User Info:</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
}

export default TaskList;
