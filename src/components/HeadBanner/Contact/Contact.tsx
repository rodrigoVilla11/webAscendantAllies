"use client"
import React,{useState} from 'react'
import axios from "axios"

export default function Contact(){
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e : any) =>{
    const property = e.target.name;
    const value = e.target.value

    e.preventDefault();
    setForm({...form, [property]: value})
  }

  const handleSubmit = async (e : any) => {
        if(!form.name || !form.email || !form.message){
            alert("Please complete the form correctly.");
        }else{
          try {
            await axios.post('https://back-ascendantallies.onrender.com/send-email', form);
            alert('Email send successfully');
          } catch (error) {
            console.error('Error sending email', error);
            alert('Error sending email');
          }
            setForm({
                name: '',
                email: '',
                message: ''
            })
        }
  }
    return(
        <div className="w-full h-4/5 md:mx-24  flex justify-center items-center mt-28">
            <form onSubmit={handleSubmit} className="w-full md:w-3/5 border border-violetDawn p-10 md:rounded-2xl bg-violetDawn opacity-80">
            <div>
              <label htmlFor="name" className="font-secondary text-2xl text-black opacity-100">Nombre:</label>
            </div>
            <div className=' w-full h-12 flex justify-center rounded-xl'>
              <input onChange={handleChange}  className='bg-eggshell w-full h-full text-2xl rounded-xl border-2 border-violetDawn  focus:outline-black font-secondary  text-black' type="text" name="name" placeholder="Tu nombre..."/> 
            </div>

            <div>
              <label htmlFor="email" className="font-secondary text-2xl text-black opacity-100">Correo:</label>
            </div>
            <div className=' w-full h-12 flex justify-center rounded-xl'>
              <input onChange={handleChange} className='bg-eggshell w-full h-full text-2xl rounded-xl  border-2 border-violetDawn  focus:outline-black font-secondary  text-black' type="text" name="email" placeholder="Tu correo electronico..."/> 
            </div>

            <div>
              <label htmlFor="message" className="font-secondary text-2xl text-black opacity-100">Cuentanos sobre tu negocio y objetivos</label>
            </div>
            <div  className='w-full h-28 flex justify-center rounded-xl'>
              <textarea onChange={handleChange} className='bg-eggshell w-full h-full text-2xl rounded-xl border-2 border-violetDawn focus:outline-black font-secondary  text-black' name="message" />
            </div>
            <div className="w-full flex justify-center items-center">
            <button type="submit" className='h-20 w-64 hover:shadow-2xl bg-white rounded-xl my-4 flex items-center justify-center text-violetDawn hover:bg-black hover:text-white hover:cursor-pointer'>ENVIAR</button>  
            </div>
            </form>
        </div>
    )
}