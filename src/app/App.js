import { Routes, Route } from 'react-router-dom';
//offer
import konsultacjaLogopedyczna from '../pages/oferta-konsultacja-logopedyczna';

const App = () => {
   return (
      <>
         <Routes>
            <Route path='/oferta-konsultacja-logopedyczna' element={<konsultacjaLogopedyczna/>}/>
         </Routes>
      </>
   );
};
 
export default App;