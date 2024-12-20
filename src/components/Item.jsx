import { useState } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';

const Item = ({ task, index, setUserTasks }) => {
    const [isLineThrough, setIslineThrough] = useState(false);
    const [isItemEditClicked, setItemEditIsClicked] = useState(false);
    const [newInputValue, setNewInputValue] = useState(task);

    function handleItemDelete(passedIndex) {

        setUserTasks((prevValue) => {

            const newUserTasks = prevValue.filter((task, index) => {
                return index !== passedIndex
            })

            return newUserTasks
        })
    }

    function handleItemEdit() {
        setItemEditIsClicked(true);
    }

    function handleEditSubmit() {
        setUserTasks((prevValue) => {
            const updatedTasks = [...prevValue];
            updatedTasks[index] = newInputValue;
            
            return updatedTasks
        })

        setItemEditIsClicked(false);
    }

    return (
        <div
            onClick={() => setIslineThrough(!isLineThrough)}
            className={`
                  border-[1px] flex items-center justify-between border-white p-4 w-[80%] lg:w-[60%] mx-auto my-4 rounded-lg
              ${isLineThrough ? "line-through" : null}
                `} >

            <li >
                {
                    isItemEditClicked ?

                        <input
                            type='text'
                            className='text-black px-2'
                            value={newInputValue}
                            onChange={(e) => setNewInputValue(e.target.value)}
                        /> :

                        task
                }
            </li>

            <div >
                <button className="mr-[10px]" >
                    {
                        isItemEditClicked ?
                            <FaCheck
                                onClick={handleEditSubmit}
                                size={18}
                                className='hover:text-[blue]'
                            /> :
                            <FaPencil
                                onClick={handleItemEdit}
                                size={18}
                                className='hover:text-[blue]'
                            />
                    }
                </button>

                <button
                    // onClick={handleItemDelete}
                    onClick={() => handleItemDelete(index)}
                >
                    <FaTrash size={18} className='hover:text-[blue]' />
                </button>
            </div>
        </div>
    );
}

export default Item;