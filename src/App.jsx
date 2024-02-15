import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DateTime from './Components/DateTime'
import Pencil from './Images/pencil-edit-01.svg'
import Check from './Images/checkmark-circle-02.svg'

function App() {

  const [background, setbackground] = useState("bg-gradient-to-r from-black to-gray-500")

  return (
    <>
      <div className={`nav h-[20vh] w-[100%] flex align-middle justify-center relative ${background}`}>
        <div className="circle absolute right-0 flex gap-6 my-14 mx-16">
          <button className='border-[3px] border-solid border-black w-12 h-12 rounded-[50%] bg-gradient-to-r from-gray-800 to-gray-300' onClick={() => { setbackground("bg-gradient-to-r from-gray-800 to-gray-300") }}></button>
          <button className='border-[3px] border-solid border-black w-12 h-12 rounded-[50%] bg-gradient-to-r from-gray-900 to-gray-400' onClick={() => { setbackground("bg-gradient-to-r from-gray-900 to-gray-400") }}></button>
          <button className='border-[3px] border-solid border-black w-12 h-12 rounded-[50%] bg-gradient-to-r from-black to-gray-500' onClick={() => { setbackground("bg-gradient-to-r from-black to-gray-500") }}></button>
        </div>
      </div>

      <div className={`nav h-[35vh] w-[100%] flex flex-col gap-16 align-middle justify-center ${background}`}>
        <div className="heading flex justify-center align-middle">
          <h1 className='text-9xl text-white'>Just Do It.|</h1>
        </div>
        <div className="input flex justify-center align-middle">
          <input type="text" id='task' className='w-[37%] h-[43px] rounded-l-[50px] bg-[#222222] text-white outline-none pl-6' />
          <span className='w-20 h-[43px] text-black bg-white font-bold rounded-r-[50px] border-solid border-black border-2 flex flex-col align-middle justify-around pl-2'>Lets Go</span>
        </div>
      </div>
      <DateTime req={background} />
      <div className={`p-4 nav h-[41vh] w-[100%] flex align-middle justify-center ${background}`}>
        <div className="flex flex-col align-top gap-2 overflow-auto">
          <div className="text-white info flex justify-between bg-[#353839] border-[#353839] rounded-[50px] border-2 border-solid p-4 max-h-[4rem] max-w-[23rem] min-w-[23rem] ">
            <p className='pl-2'>Tasks goes here</p>
            <div className="btns flex gap-4">
              <button className='invert'><img src={Pencil} alt="" /></button>
              <button className='invert'><img src={Check} alt="" /></button>
            </div>
          </div>
          <div className="text-white info flex justify-between bg-[#353839] border-[#353839] rounded-[50px] border-2 border-solid p-4 max-h-[4rem] max-w-[23rem] min-w-[23rem] ">
            <p className='pl-2'>Tasks goes here</p>
            <div className="btns flex gap-4">
              <button className='invert'><img src={Pencil} alt="" /></button>
              <button className='invert'><img src={Check} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
