export default function CardService(){
    return(
        <div className="flex flex-col items-center w-74 h-96 bg-white m-10 rounded-xl shadow-xl">
            <h2 className="font-primary text-3xl mt-2">TITLE</h2>
            <div className="border w-auto h-20 m-4"><p>ICONO RELACIONADO</p></div>
            <p className="font-secondary text-l px-2"><span className="font-bold">(EXPLICACION)</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam ducimus distinctio veritatis, ab consequuntur eius optio incidunt sit debitis omnis quia expedita dicta, consequatur quae perferendis vero quos consectetur? <span className="font-bold">(EXPLICACION)</span></p>
        </div>
    )
}