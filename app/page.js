"use client"
import Todo from "@/components/Todo";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [formData,setFormData] = useState({
      title:"",
      description:""
  })

  const onChangeHandler=(e)=>{
    const name = e.target.name
    const value = e.target.value
    setFormData(form=>({...form,[name]:value}))
    console.log(formData)
  }

  const onSubmitHandler=async(e)=>{
    e.preventDefault()
    try {

      toast.success('Success')
    } catch (error) {
      toast.error("Error")
    }
  }

  return (
    <>
    <ToastContainer/>
    <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
      <input value={formData.title} onChange={onChangeHandler}type="text" name="title" placeholder="Enter Title" className="px-3 py-2 border-2 w-full"/>
      <textarea value={formData.description} onChange={onChangeHandler} name="description" placeholder="Enter description" className="px-3 py-2 border-2 w-full"></textarea>
      <button type="submit" className="bg-orange-600 py-3 px-11 text-white">Add Todo</button>
    </form>

    

<div class="relative overflow-x-auto mt-24 w-[60%] mx-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    S No
                </th>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          <Todo/>
        </tbody>
    </table>
</div>

    </>
  );
}
