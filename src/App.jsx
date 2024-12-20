
import { useState } from 'react';
import Item from './components/Item';
import Form from './components/Form';

function App() {
  const [userTasks, setUserTasks] = useState([])

  return (
    <div>
      <div className="">
        <h1
          className="text-[2rem] text-[#99ffff] lg:text-[2rem]"
        >To-do list</h1>
      </div>

      <Form setUserTasks={setUserTasks} />

      <div className="py-8">
        <ul className='text-left'>
          {
            userTasks.map(function (task, index) {
              return (
                <Item
                  key={index}
                  index={index}
                  task={task}
                  setUserTasks={setUserTasks}
                />
              )
            })
          }
        </ul>
      </div >

    </div >
  )
}

export default App
