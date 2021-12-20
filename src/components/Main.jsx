import { Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';
import Campaigns from '../pages/Campaigns';
import Characters from '../pages/Characters';


const Main = (props) => {
    return (
        <main className='Main'>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/campaigns' element={<Campaigns />} />
                <Route path='/characters' element={<Characters />} />
            </Routes>
        </main>
    )
}

export default Main;