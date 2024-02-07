export default function Contact(){
    return(
        <div className="w-full h-4/5 md:mx-24  flex justify-center items-center mt-10">
            <form className="w-full md:w-3/5 border border-violetDawn p-10 md:rounded-2xl bg-violetDawn opacity-80">
            <div>
              <label htmlFor="name" className="font-secondary text-2xl text-black opacity-100">Nombre:</label>
            </div>
            <div className=' w-full h-12 flex justify-center rounded-xl'>
              <input  className='bg-eggshell w-full h-full text-2xl rounded-xl border-2 border-violetDawn  focus:outline-black font-secondary  text-black' type="text" name="name" placeholder="Tu nombre..."/> 
            </div>

            <div>
              <label htmlFor="email" className="font-secondary text-2xl text-black opacity-100">Correo:</label>
            </div>
            <div className=' w-full h-12 flex justify-center rounded-xl'>
              <input  className='bg-eggshell w-full h-full text-2xl rounded-xl  border-2 border-violetDawn  focus:outline-black font-secondary  text-black' type="text" name="name" placeholder="Tu correo electronico..."/> 
            </div>

            <div>
              <label htmlFor="message" className="font-secondary text-2xl text-black opacity-100">Cuentanos sobre tu negocio y objetivos</label>
            </div>
            <div  className='w-full h-28 flex justify-center rounded-xl'>
              <textarea className='bg-eggshell w-full h-full text-2xl rounded-xl border-2 border-violetDawn focus:outline-black font-secondary  text-black' name="message" />
            </div>
            </form>
        </div>
    )
}