import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGetPostsQuery, useNewPostMutation } from './redux/api'

import { PostItemList } from './component/PostItemList.jsx'
function App() {
  const [body, setBody] = useState("")
  const [title, setTitle] = useState("")



const {isLoading,isError,isSuccess,data,error} =useGetPostsQuery("")

const [newPost]= useNewPostMutation()


const submit=(e)=>{
  e.preventDefault();
  newPost({title: title , body : body,id:Math.random*1000,userId:Math.random*1000})
  setBody("")
  setTitle("")
}

  return (
    <>
     <div ><h1>my Post</h1>
     <div>
< form onSubmit={submit}>
<input
type='text'
placeholder='Enter Title'
value={title}
onChange={e=>setTitle(e.target.value)}
></input>
<input
type='text'
placeholder='Enter Body'
value={body}
onChange={e=>setBody(e.target.value)}
></input>
<button type='submit'>Add</button>
</form>

     </div>
     {data?.map(item=>{
   return   (<PostItemList key={item.id} title={item.title} body={item.body}/>)
     })}
     </div>

    </>
  )
}

export default App
