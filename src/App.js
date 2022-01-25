import Reac from 'react';
import { Home } from './pages/Home';
import { Layout } from './layout/layout';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
   <>
     <Layout>
       <Home/>
     </Layout>
   </>  
    
  );
}

export default App;
