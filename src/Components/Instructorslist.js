import React from 'react'
import {people as instructorslist} from "../inputdata/inputdatafile"
import { useDispatch, useSelector } from 'react-redux'
import { addition, deletion } from '../Redux/ReduxAction'

function Instructorslist(){
    let pupil = useSelector((store) => store.addel.instructors);
    const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center flex-col">
        <nav className='h-[5rem] bg-[#c84342] w-[100%] flex items-center justify-between'>
        <div className='pl-[10rem] text-white font-bold text-[1.5rem] tracking-wide flex gap-[1rem]'>
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-10 h-10">
  <path 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
            SKI SCHOOL</div>
            <div className='mr-[10rem] relative'>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="white" 
            className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
<div className='bg-[white] absolute rounded-[50%] w-[1.5rem] h-[1.5rem] flex justify-center items-center top-[-.75rem] right-[-.75rem]'>{pupil.length}</div>
            </div>
        </nav>
        <div className='w-[100%] flex px-[5rem] py-[5rem]'>
            <div className='w-[50%] flex justify-center flex-col gap-[5rem]'>
                <div className='flex justify-center text-[2rem] font-bold'>Instructors</div>
            <div className='grid grid-cols-5 bg-[#2196F3] text-[black]'>
                <div className='font-semibold p-[1rem]  text-center border-[1px] border-indigo-600 border-collapse'>ID</div>
                <div className='font-semibold p-[1rem] text-center border-[1px] border-indigo-600 border-collapse'>Name</div>
                <div className='font-semibold p-[1rem] text-center border-[1px] border-indigo-600 border-collapse'>Level</div>
                <div className='font-semibold p-[1rem] text-center border-[1px] border-indigo-600 border-collapse'>Snb | Ski</div>
                <div className='font-semibold p-[1rem] text-center border-[1px] border-indigo-600 border-collapse'>Action</div>
                {
                    instructorslist.instructors.map((peep) => {
                        return (
                            <>
                            <div className='bg-[#D3EAFD] border-[1px] border-indigo-600 text-center border-collapse'>{peep.id}</div>
                            <div className='bg-[#D3EAFD] border-[1px] border-indigo-600 text-center border-collapse'>{peep.name}</div>
                            <div className='bg-[#D3EAFD] border-[1px] border-indigo-600 text-center border-collapse'>{peep.class}</div>
                            <div className='bg-[#D3EAFD] border-[1px] border-indigo-600 text-center border-collapse'>{peep.rollno}</div>
                            <div className='bg-[#D3EAFD] border-[1px] border-indigo-600 text-center border-collapse flex justify-around'>
                            <svg 
                                onClick={() => {
                                    dispatch(addition(peep.id));
                                }}
                        
                            xmlns="http://www.w3.org/2000/svg" 
fill="none" 
viewBox="0 0 24 24" 
stroke-width="1.5" 
stroke="green" 
class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                                <svg 
                                    onClick={() => {
                                        dispatch(deletion(peep.id));
                                    }}
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="red" 
                                class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</div>
</>
                        );
                    })}
                </div>
             </div>
             <div className='w-[50%] flex flex-col items-center gap-[5rem]'>
             <div className='font-bold text-[2rem]'>Instructors selected to teach</div>
                <div className='grid grid-cols-4 bg-[#2196F3] text-black w-[70%]'>
                <div className='font-semibold p-[1rem] text-center border-[1px] border-indigo-600 border-collapse'>ID</div>
                <div className='font-semibold p-[1rem] text-center border-[1px] border-indigo-600 border-collapse'>Name</div>
                <div className='font-semibold p-[1rem] text-center border-[1px] border-indigo-600 border-collapse'>Class</div>
                <div className='font-semibold p-[1rem] text-center border-[1px] border-indigo-600 border-collapse'>Snb | Ski</div>
                {
                    pupil.length === 0 ? (<div className='col-span-4 text-center bg-[#D3EAFD] p-[2rem] text-[red] font-bold'>
                        No Instructors Selected
                        </div>
                        ) : (
                        <></>
                )}
                {pupil && 
                pupil.map((peep) => {
                        return(
                            <>
                            <div className='bg-[#D3EAFD border-[1px] border-indigo-600 text-center border-collapse'>{peep.id}</div>
                            <div className='bg-[#D3EAFD border-[1px] border-indigo-600 text-center border-collapse'>{peep.name}</div>
                            <div className='bg-[#D3EAFD border-[1px] border-indigo-600 text-center border-collapse'>{peep.class}</div>
                            <div className='bg-[#D3EAFD border-[1px] border-indigo-600 text-center border-collapse'>{peep.rollno}</div>

                            </>
                        );
                    })
                }
              </div>
            </div>
        </div>
        <div className='w-[100%] bg-[#c84342] text-white absolute bottom-0 h-[4rem] flex justify-center items-center font-extrabold'>
            @All Rights Reserved BT 2024
        </div>
    </div>
  )
}

export default Instructorslist