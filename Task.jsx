import React from 'react'

const Task = ({mytask,delatetask,completedtask},latetask) => {
  return (
    <div>
      <ul className='unorderlist'>
                
                    <li className='firstlist'>{mytask}
                        <div className='notes'> 
                            <button class="bg-success p-2 text-white" onClick={()=>{completedtask(mytask)}} >complete</button>
                           <button class="bg-success p-2 text-white" onClick={()=>{delatetask(mytask)
                          
                           }}>delate</button>
                        </div>
                    </li>
                    </ul>
    </div>
  )
}

export default Task