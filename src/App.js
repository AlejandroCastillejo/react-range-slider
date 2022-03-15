import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Exercise1 from './pages/Exercise1';
import Exercise2 from './pages/Exercise2/Exercise2';

const App = () => (
    <div>
        {/* <h1>Hello React</h1> */}
        {/* <Exercise1 /> */}
        {/* <BrowserRouter> */}
        <Routes>
            <Route path="exercise1" element={<Exercise1 />} />
            <Route path="exercise2" element={<Exercise2 />} />
        </Routes>
        {/* </BrowserRouter> */}
    </div>
);

export default App;
