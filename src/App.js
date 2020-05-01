import React, { Fragment } from 'react';
import './App.css';
import Header from '../components/Header'
import Card from '../components/Card';
import MiniCard from '../components/MiniCard'

const App = () =>( 
  <Fragment>
  <Header followers = {43}/>
  <div className="wrapper">
    <div className="aling">
    <div className="grid">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <h1>Overview - Today</h1>
    <div className="grid">
    <MiniCard/>
    <MiniCard/>
    <MiniCard/>
    <MiniCard/>
    </div>
    <div className="grid">
    <MiniCard/>
    <MiniCard/>
    <MiniCard/>
    <MiniCard/>
    </div>
    </div>
  </div>
  </Fragment>
)

export default App;
