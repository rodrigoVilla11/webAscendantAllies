import "./styles.css"
import {Box, Heading, Image, Text} from "@chakra-ui/react";


export default function Spinner() {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
            <div className="content">
            <Box
        width="100%"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
        >
      <Image 
        src="/assets/Logo_AscendantAllies (1).png" 
        alt="logo_AscendantAllies"
        height="50%"/>
      <Text fontWeight="bold" fontSize="30px"><span style={{ color: 'grey', fontWeight:"normal"}}> Ascendant</span> Allies</Text>
      <Text>La pagina web esta bajo <span style={{ color: 'black', fontWeight: 'bold' }}>Mantenimiento</span></Text>
      <Text>En unos pocos dias <span style={{ color: 'black', fontWeight: 'bold' }}>Estaremos de vuelta</span></Text>
      </Box>
            </div>
        </div>
    )
}