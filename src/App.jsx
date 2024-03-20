import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGetPostsQuery } from './redux/api'

import { PostItemList } from './component/PostItemList.jsx'
function App() {
  const [count, setCount] = useState(0)
const {isLoading,isError,isSuccess,data,error} =useGetPostsQuery("")
console.log(data)
  return (
    <>
     <div ><h1>my Post</h1>
     {data?.map(item=>{
   return   (<PostItemList key={item.id} title={item.title} body={item.body}/>)
     })}
     </div>

    </>
  )
}

export default App
