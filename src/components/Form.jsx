import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Form = ({setUserTasks}) => {
    const [input, setInput] = useState("");

    function handleChange(e) {
        const value = e.target.value;

        setInput(value)
    }

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

    return (
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
    );
}

export default Form;