import Image from "next/image";

export default function AboutUs(){
    return(
        <div className="w-full h-4/5 mx-24 flex justify-center items-center">
            <div className="w-1/3 h-4/5 flex justify-center items_center">
                <Image src="/assets/sketch_margeting02.png" alt="sketchAboutUs" width="400" height="200"/>
            </div>
            <div className="w-2/3 h-4/5 flex justify-center items-center ">
                <p className="font-secondary text-xl px-2"> <span className="font-bold"> (ABOUT US)</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis libero, voluptas natus iste error vitae perspiciatis consequatur nam dicta autem amet recusandae distinctio culpa? Fugiat animi nulla iure quis perferendis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore molestias officia, odit, reprehenderit placeat commodi iure exercitationem at pariatur rem vel expedita ducimus. Consequuntur ducimus neque adipisci labore, quaerat repellendus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum atque impedit eos quidem iste, natus minima quo reprehenderit nihil quas explicabo aperiam culpa quod, quibusdam alias ipsa, voluptas deleniti sit. <span className="font-bold">(ABOUT US)</span></p>
            </div>
        </div>

    )
}