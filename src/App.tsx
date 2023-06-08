import React from 'react';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

import Nav from './Components/Nav/Nav';
import Slider from './Components/Slider/Slider';

const App: React.FC = () => {
    return (
        <div className="flex-col items-center w-ful">
            <Nav />
            <Slider />
            <About />
            <Footer />
        </div>
    );
};

export default App;
