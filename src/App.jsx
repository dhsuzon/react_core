// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Suspense } from 'react'
import './App.css'
import Batsman from './batsman' 
// import User from './users'
import Friends from './friends'

// const FetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())

const FriendsUsers = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json()
}
function App() {
   const FriendsRes = FriendsUsers()
//   function handleclick(){
//     alert("hey i am react")
    
  
//   }
//   const handleclick2=()=>{
//     alert("hey i am react")
    
  
//   }
//  const handleclick3=(num)=>{
//     alert(num +7);
    
  
//   };

  return (
    <>
{/*     
          <h3>Your questions, answered</h3>
          <button onClick={handleclick}>click Me 1</button>
      
          <button onClick={handleclick2}>click Me 2</button>
          <button onClick={()=>handleclick3(5)}>click Me 2</button> */}
          <Batsman></Batsman>
          {/* <Suspense fallback={<h1>Data Loading...</h1>}>
            <User fetchUsers = {FetchUsers}></User>
          </Suspense> */}

          <Suspense fallback={<h1>friends data loading</h1>}>
            <Friends FriendsRes={FriendsRes}></Friends>
          </Suspense>
    </>
  )
}

export default App
