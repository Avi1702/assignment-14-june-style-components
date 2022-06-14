import React from 'react';
import {ChakraProvider, theme, Button, Box} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
      display="flex"
      justifyContent="space-around"
      width="60%"
      margin="auto"
      marginTop="50px"

      >
     <Button colorScheme="blue">Primary Button</Button>
     <Button border="0.5px solid gray">Default Button</Button>
     <Button border="0.5px dashed gray">Dashed Button</Button>
     </Box>
     <br/>
     <Box 
      width="25%"
     display="flex"
     justifyContent="space-around"
   
     margin="auto"
     >
     <Button bgColor="white">Text Button</Button>
     <Button color="blue" bgColor="white">Link Button</Button>
     </Box>
    
    </ChakraProvider>
  );
}

export default App;
