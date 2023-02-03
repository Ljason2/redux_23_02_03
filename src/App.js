import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Cart1 from './components/Cart1';
import Cart2 from './components/Cart2';
import Cart3 from "./components/Cart3";
import Cart4 from './components/Cart4';
import {Provider} from "react-redux";
import store from './store4';

function App({children}){
    return(
        <div>

        <Provider store={store}>
        <BrowserRouter>
        <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart1" element={<Cart1 />}/>
        <Route path="/cart2" element={<Cart2 />}/>
        <Route path="/cart3" element={<Cart3 />}/>
        <Route path="/cart4" element={<Cart4 />}/>
        </Routes>
        </div>
        </BrowserRouter>
        </Provider>
      </div>
        )
}



export default App;