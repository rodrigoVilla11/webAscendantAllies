export default function CardService({title, description} : any){
    return(
        <div className="flex flex-col items-center w-74 h-96 bg-white m-10 rounded-xl shadow-xl">
            <h2 className="font-primary text-2xl mt-2">{title}</h2>
            <p className="font-secondary text-lg px-2"> {description} 
            <div className="w-auto h-20 m-4"><p>ICONO RELACIONADO</p></div>
            </p>
        </div>
    )
}