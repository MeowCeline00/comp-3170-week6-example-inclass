import { useState } from 'react';
import './App.css';

const initialStudents = [
  {
    firstName: 'Alice',
    lastName: 'Smith',
    age: 26
  },
  {
    firstName: 'Barack',
    lastName: 'Obama',
    age: 68
  }
];

function App() {
  
  // const state = useState('John Doe');

  // const name = state(0);
  // const setName = state(1);

  console.log('Component rendered');

  const [name, setName] = useState('John Doe'); // use square brackets for destructuring useState

  const [students, setStudents] = useState(initialStudents);

  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    age: ''
  });

  const studentListUI = students.map((student, index) => (
    <p key={index}>{student.firstName} {student.lastName}, {student.age} years old.</p>
  ));

  // let name = 'John Doe';

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      // name = e.target.value;
      setName(e.target.value);
      console.log(e.target.value); // log the new value from input
      e.target.value = '';

      // const state = useState('John Doe');

      // console.log(state);

      // console.log(name);

      // e.target.value = '';
    }
  }

  function handleChange(e) {
    setName(e.target.value); // update the name state on change
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStudents([...students, student]);

    setStudent({
      firstName: '',
      lastName: '',
      age: '' // Reset age to an empty string for next input
    });
  }

  function handleStudentChange(e) {
    const { name, value } = e.target;
    setStudent(prevStudent => ({
      ...prevStudent,
      [name]: value
    }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={student.firstName}
          onChange={handleStudentChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={student.lastName}
          onChange={handleStudentChange}
          placeholder="Last Name"
        />
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleStudentChange}
          placeholder="Age"
        />
        <button type="submit">Save</button>
      </form>

      {studentListUI} {/* Render the student list here */}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        value={name}
        onChange={handleChange}
      />
      <h1>Hello, {name}</h1>
      <Tile />
      <Tile />
      <Tile />
    </>
  );
}

function random(n) {
  return Math.floor(Math.random() * n);
}

function Tile() {
  const [color, setColor] = useState('blue');

  function handleClick() {
    const red = random(255);
    const green = random(255);
    const blue = random(255);

    setColor(`rgb(${red}, ${green}, ${blue})`); // Add commas between RGB values for valid CSS
  }

  return (
    <div
      className="tile"
      style={{ background: color }}
      onClick={handleClick}
    >
    </div>
  );
}

export default App;
