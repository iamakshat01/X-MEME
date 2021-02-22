import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Memes from './MemeComponent';
import SingleMeme from './SingleMemeComponent';
import EditMeme from './EditMeme';
const Main = () => 
{
  return ( <div>
      <HashRouter>
      <Header/> 
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/memes" component={Memes}/>
        <Route exact path="/memes/:memeId" component={SingleMeme}/>
        <Route path="/memes/edit/:memeId" component={EditMeme}/>
      </Switch>
      </HashRouter>
  </div>
  )
}
export default Main;

