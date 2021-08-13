import React from 'react';
import './index.css'
interface User{
  name: string,
  age: number,
  email: string
};


function App() {
  
  const user: User = {
    name: "John Doe",
    age: 32,
    email: "johndoe@email.com"
  }
  
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h3>{user.age}</h3>
      <h5>{user.email}</h5>
    </div>
  );
}

export default App;
