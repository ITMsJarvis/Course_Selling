import {useEffect, useState} from 'react'

const Courses = () => {
let [data , dataFnx] = useState({})

useEffect(()=> {
fetch("http://localhost:4000/login/courses" , {
    method : 'POST',
    headers : {
        "Content-Type" : 'application/json', 
        "token" : localStorage.getItem("token")
    } 
}).then(x=> x.json()).then(data=> dataFnx(data))
}, [])

console.log(data)

  return <div>This is courses</div>;
};

export default Courses;
