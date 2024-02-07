import Image from "next/image";

export default function CardService({title, description, icon} : any){
    return(
        <div className="flex flex-col items-center w-74 min-h-96 bg-white m-10 rounded-xl shadow-xl">
            <h2 className="font-primary text-2xl mt-2">{title}</h2>
            {icon && <div className="w-auto h-20 m-4">
                <Image src={icon} alt="icon" width="100" height="100"/>
            </div>}
            <p className="font-secondary text-lg px-2"> {description}</p>
            
        </div>
    )
}