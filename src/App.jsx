import {LayoutContextProvider} from "./Context/LayoutContext/LayoutContext.jsx";
import { MainRouter } from './router.jsx';

function App() {
    return (
        <>
            <LayoutContextProvider>
               <MainRouter/>
            </LayoutContextProvider>
        </>
    )
}

export default App
