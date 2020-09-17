import React from 'react';
import './App.css';
//import HomePage from './components/Homepage';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Hotliquid from './components/hotliquid';
import KhajaItem from './components/khajaitem';
import Remaining from './components/Remaining';
import Coldliquid from './components/coldliquid';
import Bakery from './components/bakery';
import Sidebar from './components/sidebar';
import Heading from './components/heading';
//import Footer from './components/footer';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';//



class App extends React.Component {
  render() {
    return (


      <BrowserRouter>
        <div className='canteen'>
          <Heading />
        </div>

        <Sidebar />

        {/* <Route path='/' exact component={HomePage} /> */}
        <Route path='/khajaitem' component={KhajaItem} />
        <Route path='/hotliquid' component={Hotliquid} />
        <Route path='/remainitem' component={Remaining} />
        <Route path='/colditem' component={Coldliquid} />
        <Route path='/bakeryitem' component={Bakery} />
        {/* <div className="carousel-wrapper">
          <Carousel infiniteLoop useKeyboardArrows autoPlay>
            <div>
              <img src="../1.jpg" />
            </div>
            <div>
              <img src="../2.jpg" />
            </div>

          </Carousel>
        </div> */}
      </BrowserRouter>

    );

  }
}
export default App;
