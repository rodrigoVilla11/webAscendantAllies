import "./styles.css"
export default function HeadBanner({children,header,aboutUs} : any){
    return(
        <div className={`flex justify-center items-center w-full h-auto ${header? "p-20" : ""}`}>
            <div className={`${header ? "bg-image_Header" : aboutUs ? "bg-image-AboutUs" : "bg-image-Contact"} w-full h-screen flex justify-center items-center`}>
                {children}
            </div>
        </div>
    )
}