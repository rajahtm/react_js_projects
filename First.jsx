import React, { useEffect, useState } from 'react'
import Task from './Task';
export const First = () => {
    const[count,setcount]=useState(0);
    const[datae ,setdata] =useState("");
    const[mytask ,setmytask]=useState([])
    const[completedtask,setcompletedtask]=useState("");
    const handle=(e)=>{
        let newdata = e.target.value;
        setdata(newdata)
      
    

        
    }
      function newtask (){
            setmytask(prev => [...prev, datae])
             console.log(mytask)
             setdata("")

     }
     function delatetask(taskName){
      
                let delatetask =mytask.filter(x=>x!=taskName)
               
                setmytask(delatetask )
     }
      function completed(taskName){
      
                let currrect =mytask.filter(x=>x==taskName)
                let afterfiltering =mytask.filter(x=>x==taskName)
                  setmytask( afterfiltering)

               setcompletedtask(prev =>[...prev,completed[0]])
               console.log(currrect)

                setmytask(currrect )
     }

  return (
    <div className='maincontainer d-flex justify-content-center align-items-center' >
        <div className='firstbox' d flex>
            <h3>TODO lIST</h3>
            <div>
                <input type="text" name='todo-app' placeholder='enter your todo -task' onChange={(data)=>{
                handle(data)
                }} value={datae} />
                <button className='butoon' onClick={()=>{
                    newtask()
                }}> +</button>
                {
                    mytask.map((task,index)=>   <Task mytask= {task} key ={index} delatetask ={delatetask} completed ={completed}/>)
                }
              
                     
            </div>
        </div>
    </div>


  )
}
