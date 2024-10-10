import { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Item from './components/Item';

function App() {
  const [input, setInput] = useState("");
  // const [isLineThrough, setIslineThrough] = useState(false)
  const [userTasks, setUserTasks] = useState(["Code"])

  function handleSubmit(event) {
    event.preventDefault();

    if (input.trim() === "") {
      return
    }

    setUserTasks((prevValue) => {
      return [...prevValue, input]
    })

    setInput("")
  }

  function handleDelete(index) {
    const selectedTaskIndex = index;

    setUserTasks((prevValue) => {
      const newUserTasks = prevValue.filter((task, index) => {
        return index !== selectedTaskIndex
      })

      return newUserTasks
    })
  }

  function handleChange(e) {
    const value = e.target.value;

    setInput(value)
  }

  // create our own map filter and reduce functions
  // create destructuring assignment

  return (
    <div>
      <div className="">
        <h1
          className="text-[2rem] text-[#99ffff] lg:text-[2rem]"
        >To-do list</h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-[2rem]">
        <input
          type="text"
          className="bg-[transparent] border-[1px] border-white p-4 rounded-lg w-[300px]"
          placeholder="What do you want to do today"
          onChange={handleChange}
          value={input}
        />

        <button
          className='button24 bg-[transparent] border-primary border-[1px] mx-4 p-4 rounded-xl'
        >submit <FaLongArrowAltRight className='inline' />
        </button>
      </form>

      <div className="py-8">
        <ul className='text-left'>
          {
            userTasks.map(function (task, index) {
              return (
                <Item
                  key={index}
                  index={index}
                  task={task}
                  handleDelete={handleDelete}
                />
              )
            })
          }
        </ul>
      </div >

    </div >
  )
}

export default App;