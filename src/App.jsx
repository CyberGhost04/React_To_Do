import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DateTime from './Components/DateTime'
import Pencil from './Images/pencil-edit-01.svg'
import Check from './Images/checkmark-circle-02.svg'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [val, setval] = useState("")
  const [tasks, settasks] = useState([])

  const [background, setbackground] = useState("bg-gradient-to-r from-black to-gray-500")

  const EditTask = (e, id) => {
    e.stopPropagation()
    tasks.filter((item) => {
      if (item.id === id) {
        setval(item.val)
      }
    })
    DelTask(e, id)
  }

  const DelTask = (e, id) => {
    e.stopPropagation()                       // stops parent on click method
    let newtasks = tasks.filter((item) => {
      return item.id != id
    })

    settasks(newtasks)

  }

  const AddTask = () => {
    settasks([...tasks, { id: uuidv4(), val, isComplete: false }])
    setval("")
  }

  const ValChanged = (e) => {
    setval(e.target.value)
  }

  const checkbox = (e, id) => {
    let eleid = id
    let index = tasks.findIndex((item) => {
      return item.id === eleid
    })
    let newTasks = [...tasks]
    newTasks[index].isComplete = !newTasks[index].isComplete
    settasks(newTasks)
  }

  function childFunction(event) {
    event.stopPropagation()
  }

  return (
    <>
      <div className={`nav h-[20vh] w-[100%] flex align-middle justify-center relative ${background}`}>
        <div className="circle absolute right-0 flex gap-6 my-14 mx-16">
          <button className='border-[3px] border-solid border-black w-12 h-12 rounded-[50%] bg-gradient-to-r from-gray-800 to-gray-300 cursor-pointer' onClick={() => { setbackground("bg-gradient-to-r from-gray-800 to-gray-300") }}></button>
          <button className='border-[3px] border-solid border-black w-12 h-12 rounded-[50%] bg-gradient-to-r from-gray-900 to-gray-400 cursor-pointer' onClick={() => { setbackground("bg-gradient-to-r from-gray-900 to-gray-400") }}></button>
          <button className='border-[3px] border-solid border-black w-12 h-12 rounded-[50%] bg-gradient-to-r from-black to-gray-500 cursor-pointer' onClick={() => { setbackground("bg-gradient-to-r from-black to-gray-500") }}></button>
        </div>
      </div>

      <div className={`nav h-[35vh] w-[100%] flex flex-col gap-16 align-middle justify-center ${background}`}>
        <div className="heading flex justify-center align-middle">
          <h1 className='text-9xl text-white'>Just Do It.|</h1>
        </div>
        <div className="input flex justify-center align-middle">
          <input type="text" placeholder='Now or Never' id='task' className='w-[37%] h-[43px] rounded-l-[50px] bg-[#222222] text-white outline-none pl-6' value={val} onChange={ValChanged} />
          <button disabled={val.length < 1} className='w-20 h-[43px] text-black bg-white font-bold rounded-r-[50px] border-solid border-black border-2 flex flex-col align-middle justify-around pl-2 cursor-pointer disabled:bg-[#222222] disabled:border-[#222222] disabled:text-[#222222] disabled:cursor-default' onClick={AddTask}>Lets Go</button>
        </div>
      </div>
      <DateTime req={background} />
      {tasks.length === 0 && <div className={`p-4 flex justify-center ${background} text-[17px] text-white`}>Consistency will always beat Talent</div>}
      <div className={`p-4 nav h-[38vh] w-[100%] flex align-middle justify-center ${background}`}>
        <div className="flex flex-col align-top gap-2 overflow-auto">
          {tasks.map((items) => {
            return <div key={items.id} onClick={(e) => { checkbox(e, items.id) }} className="text-white info flex justify-between bg-[#353839] border-[#353839] rounded-[50px] border-2 border-solid p-4 max-h-[40rem] min-w-[23rem] cursor-vertical-text">
              <p className={`overflow-y-auto overflow-x-hidden break-all max-w-[16rem] max-h-[20rem] pl-2 ${items.isComplete ? "line-through" : ""}`}>{items.val}</p>
              <div className="btns flex gap-4" onClick={childFunction(event)}>
                <button className='invert min-h-2 min-w-2 cursor-pointer' onClick={(e) => { EditTask(e, items.id) }}><img src={Pencil} alt="" /></button>
                <button className='invert min-h-2 min-w-2 cursor-pointer' onClick={(e) => { DelTask(e, items.id) }}><img src={Check} alt="" /></button>
              </div>
            </div>
          })}

        </div>
      </div>
      <div className={`nav h-[4vh] w-[100%] flex align-middle justify-center ${background}`}>
        <input type="checkbox" />
      </div>
    </>
  )
}

export default App
