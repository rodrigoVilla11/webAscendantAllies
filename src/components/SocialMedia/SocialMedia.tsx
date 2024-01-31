import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Box, Text } from '@chakra-ui/react';

export default function SocialMedia() {
    return(
        <Box width="100%" height="100vh" position="absolute" display="flex" justifyContent="flex-end" alignItems="flex-end" padding="20px" zIndex="50">
        <Box display="flex" flexDirection="column" width="50px">
            <FontAwesomeIcon icon={faLinkedin} color='blue'  size="2x"/>
            <FontAwesomeIcon icon={faFacebook} color='blue'  size="2x"/>
            <FontAwesomeIcon icon={faXTwitter} size="3x"/>
            <FontAwesomeIcon icon={faInstagram} color='orange'/>
        </Box>
        </Box>
    )
}