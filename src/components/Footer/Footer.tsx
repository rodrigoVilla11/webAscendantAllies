import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <div className="w-full h-auto bg-black p-10 border-t-2 border-white text-white flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 h-44 border-b-2 md:border-r-2 flex flex-col justify-center items-center">
                <h2 className="text-2xl md:text-4xl font-primary text-white ">CLIENTES:</h2> {/*ACA IRIA CON QUE TRABAJAMOS NOSOTROS*/}
                <div className="flex justify-center items-center">
                    <Image src="/assets/logo_sake_sushi.png" alt="logo_aliado" width="200" height="200" />
                    <Image src="/assets/logo_emilu.png" alt="logo_aliado" width="200" height="200" />

                </div>
                </div>
                <div className="w-full md:w-1/2 h-44 border-t-2 md:border-l-2 flex flex-col justify-center items-center">
                    <h3 className="text-2xl md:text-2xl font-primary text-white ">ascendantallies@gmail.com</h3> 
                    <div className="flex space-x-5 mt-8">
                        <a href="https://www.instagram.com/ascendantallies/" target="blank">
                            <FontAwesomeIcon icon={faInstagram} size='2x'  />
                        </a>
                    <FontAwesomeIcon icon={faFacebook}  size='2x' />
                    <a href="https://twitter.com/AscendantAllies" target="blank">
                        <FontAwesomeIcon icon={faXTwitter} size='2x' />
                    </a>
                    <a href="https://www.linkedin.com/company/ascendant-allies/" target="blank">
                        <FontAwesomeIcon icon={faLinkedin}  size='2x' />
                    </a>
                    <FontAwesomeIcon icon={faWhatsapp}  size='2x' />
                    </div>
                </div>
        </div>
    )
}