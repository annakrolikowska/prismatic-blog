
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'

import { PrismicProvider } from '@prismicio/react'
import GlobalStyle from './style/GlobalStyle';
import { client } from './prismic'
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Category} from "./components/Category";
import NotFound from './components/NotFound';

import {CategoryPosts} from "./components/CategoryPosts";
import { Post } from './components/Post';
import Footer from './components/Footer';

function App() {
  return (
    <PrismicProvider client={client} >
    <BrowserRouter>
    <GlobalStyle/>
      <Header/>
      <Routes>
          <Route path='/' element={<Navigate to='/home/1'/>}/>
          <Route path='/home/:page' element={<Home/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/category/:uid' element={<CategoryPosts/>}/>
          <Route path='/post/:id' element={<Post/>}/>
          <Route path='/404.html' element={<NotFound/>}/> 
          <Route path='/*' element={<Navigate to='/404.html'/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
</PrismicProvider>
  );
}

export default App;
