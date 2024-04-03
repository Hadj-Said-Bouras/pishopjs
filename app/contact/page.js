"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";


function Contact() {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    console.log(title, body, isLoading)

  return (
    <div className="flex  mb-20 flex-wrap md:flex-nowrap">
      <div className="flex flex-col ">

          <h3 className=" text-left ml-20 absolute mt-3">Home / Contact</h3>
        <div className="pl-2 w-4/6 mt-20   border-2  h-[500px] sm:h-[450px] relative ml-20 flex flex-col gap-5 ">
          <div className="flex flex-row gap-2 items-center mt-2 ">
          <div className="p-2 bg-red-500 rounded-full">
            <LuPhone className="bg-red-500 text-white "/>
          </div>
            <h1 className="font-bold ">Call To Us</h1>
          </div>
            <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +399328r083029</p>
          <div className="mx-auto mt-5 w-40 border-1 bg-black"></div>

          <div className="flex flex-row gap-2 items-center mt-2">
          <div className="p-2 bg-red-500 rounded-full">
            <AiOutlineMail className="bg-red-500 text-white "/>
          </div>
            <h1 className="font-bold ">Call To Us</h1>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
          
        </div>
        
      </div>
      

      <form className="flex flex-col mt-10 w-4/6 mx-auto sm:w-3/6">
        <div className="flex md:flex-wrap xl:flex-nowrap sm:flex-row flex-col mb-10 mt-10   gap-7">
        <input
          type="text"
          max={20}
          min={3}
          placeholder="Your Name *"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className=" bg-gray-100 p-2"
          />
        <input
          type="email"
          max={20}
          min={3}
          placeholder="Your Email *"
          required
          className="bg-gray-100 p-2"
          
          />
        <input
          type="number"
          placeholder="Your Phone *"
          required
          className=" bg-gray-100 p-2"
          />

          </div>
        <textarea 
        placeholder="Your Message"
        rows={5} 
        cols={50} 
        onChange={(e) => setBody(e.target.value)}
        value={body}
        
        className="border-2 bg-gray-100" />
        <button
        disabled={isLoading}
        className="xl:ml-[600px] mt-5  p-2 bg-red-500 text-white text-center rounded mb-20"
        >
            {isLoading && <span>Submitting....</span>}
            {!isLoading && <span>Submit</span>}

        </button>
      </form>
      </div>
  );
}

export default Contact;
