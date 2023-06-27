import React , {useContext}from 'react'
import { MyContext } from '../App';
import InsteramPage from './InsteramPage';


function Posts() {
    const context = useContext(MyContext);
  return ( <div>
    {context?.map((item:any)=>{
        return <InsteramPage user={item} key={item.id}/>
        })}
</div>)
}

export default Posts