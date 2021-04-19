// import React, { Component } from 'react';

// import axios from 'axios';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state= {
//       items:[],
//     }
//   }

//   componentDidMount(){
//     axios.get('https://api.akbaroff.com/lale')
//       .then(res => {
//          const items = res.data;
//          this.setState({items});
//       })
//     }

//     render(){
//       return(
//         <ul>
//             {this.state.items.test_data}
//         </ul>
//       )
//     }
  
//   }
    
// export default App;

import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';


function App(){
  return(
    <div className="App">
      <div className="sidebar">
        <NavBar/>
      </div>
      <div className="main-content">
        <div className="content">
           <Switch>
             <Route path = "/" exact >
               <HomePage/>
             </Route>
             <Route path="/about" exact>
               <AboutPage/>
             </Route>
             <Route path="/portfolios" exact>
               <PortfolioPage/>
             </Route>
             <Route path="/blogs" exact>
               <BlogPage/>
             </Route>
             <Route path="/contact" exact>
               <ContactPage/>
             </Route>
           </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
