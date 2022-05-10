import React from 'react';
import {NameInput} from "./Components/NameInput";
import {store} from "./store";
import {Provider} from "react-redux";


const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <NameInput/>
            </Provider>
        </div>
    );
}

export default App;
