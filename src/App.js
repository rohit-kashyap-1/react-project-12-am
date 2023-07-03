import logo from './logo.svg';
import './App.css';

import {Form,name} from './components/Form';
import Header from './components/Header';
import Banner from './components/Banner';
import Middle from './components/Middle';
import Footer from './components/Footer';
import ContactComponent from './components/ContactComponent';
import BlogList from './BlogList';

function App() {
  console.log(name)
  return (
    <div className="App">
      <Header title="TGC India" />
      <Banner />
      <Middle />
      <ContactComponent title="Hello world" />
      <ContactComponent title="Contact Us" />
      <ContactComponent title="About us" />
      <BlogList />
   
      <Footer />
     
    </div>
  );
}

export default App;

//ngnix server
//apache server
//XAMP :   A Apache, MySQL, PHP

