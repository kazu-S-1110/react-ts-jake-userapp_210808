import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Button colorScheme="blackAlpha">test</Button>
    </ChakraProvider>
  );
}

export default App;
