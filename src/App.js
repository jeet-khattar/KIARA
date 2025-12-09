import './App.css';
import Header from './Components/Header/Header';
import Collectionheading from './Components/Collectionheading/Collectionheading';
import Cards from './Components/Cards/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Provides from './Components/Provides/Provides';
import Category from './Components/Category/Category';
import NewArrivals from './Components/NewArrivals/NewArrivals';
import Wintercollection from './Components/Wintercollection/Wintercollection';
import Bestsellingitem from './Components/Bestsellingitem/Bestsellingitem';
import BestCard from './Components/BestCard/BestCard';
import BlogPosts from './Components/BlogPosts/BlogPosts';
import SignUp from './Components/SignUp/SignUp';
import Instapage from './Components/InstaPage/Instapage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'lucide-react';

function App() {
  return (
    <div className="App">
      <Header/>
      <Collectionheading/>
      <Cards/>
      <Provides/>
      <Category/>
      <NewArrivals/>
      <Wintercollection/>
      <Bestsellingitem/>
      <BestCard/>
      <BlogPosts/>
      <SignUp/>
      <Instapage/>
      <Footer/>
    </div>
  );
}

export default App;
