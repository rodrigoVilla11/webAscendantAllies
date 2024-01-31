import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Box, Text } from '@chakra-ui/react';

export default function SocialMedia() {
    return(
        <Box width="100%" height="100vh" position="absolute" display="flex" justifyContent="flex-end" alignItems="flex-end" padding="20px" zIndex="50">
        <Box display="flex" flexDirection="column" width="50px">
            <a target='blank' href='https://www.linkedin.com/company/ascendant-allies/'>
            <FontAwesomeIcon icon={faLinkedin} color='blue'  size="2x" />
            </a>
            <a target='blank' href='https://www.facebook.com/profile.php?id=61556158228843'>
            <FontAwesomeIcon icon={faFacebook} color='blue'  size="2x" />
            </a>
            <a target='blank'  href='https://twitter.com/AscendantAllies'>
            <FontAwesomeIcon icon={faXTwitter} size="3x" />
            </a>
            <a target='blank' href='https://www.instagram.com/ascendantallies/'>
            <FontAwesomeIcon icon={faInstagram} color='orange' />
            </a>
        </Box>
        </Box>
    )
}