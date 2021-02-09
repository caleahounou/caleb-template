import './App.css';
import Menu from './component/Menu';
import Header from './component/Header';
import CarouselRecette from './component/CarouselRecette';
import Service from './component/Service';
import { Component } from 'react';
import baseServices from './component/baseServices';


class App extends Component {
  state = {
    baseServices: {}
  }

  render(){
    return (
    <div className="App">
      <Menu />
      <Header/>
      <CarouselRecette/>
      <Service/>
    </div>
    )
  }
}

export default App;
