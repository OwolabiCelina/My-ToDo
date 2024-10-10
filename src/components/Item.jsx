import { FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
// import { FaTrash } from 'react-icons/fa';
// import { FaEdit } from 'react-icons/fa';

const Item = ({ task, index, handleDelete, handleEdit }) => {

    function handleItemDelete() {
        handleDelete(index)
    }

    function handleItemEdit(){ 
        handleEdit()
    }

    return (
        <div
            className={`
                  border-[1px] flex items-center justify-between border-white p-4 w-[80%] lg:w-[60%] mx-auto my-4 rounded-lg
                `} >
            <li >
                {task}
            </li>

            <div >
                <button className="mr-[10px]"
                    onClick={handleItemEdit}
                >
                    <FaPencil size={18} className='hover:text-[blue]' />
                </button>

                <button
                    onClick={handleItemDelete}
                >
                    <FaTrash size={18} className='hover:text-[blue]' />
                </button>
            </div>
        </div>
    );
}

export default Item;