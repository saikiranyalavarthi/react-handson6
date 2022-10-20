import './App.css';

import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

import Students from './components/Students';

import ContactUs from './components/ContactUs';

import Navbar from './components/Navbar';

import Add from "./components/Add"

import Edit from './components/Edit';


import { useState } from 'react';




const App = () => {

  let [students, editStudents] = useState([]);

  const updateStudents = (s) => {
      editStudents(students.append(s));
  }

  const editStudent = (n, a, c, b, ind) => {
    let arr = students;

    // arr[ind][0] = n;
    // arr[ind][1] = a;
    // arr[ind][2] = c;
    // arr[ind][3] = b;

    if(n !== " ") {
      arr[ind][0] = n;
    }
    if(a !==  "") {
      arr[ind][1] =  a;
    }
    if(c !== "") {
      arr[ind][2] =  c;
    }
    if(b !== "") {
      arr[ind][3] =  b;
    }

    editStudents(arr);
  }

  
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students stud={students}/>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/students/add" element={<Add stud={students} method={updateStudents}/>}/>
            <Route path="students/edit" element={<Edit stud={students} edit={editStudent}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )

  
}

export default App;