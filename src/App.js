import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [news, setNews] =useState([])
  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-10-26&sortBy=publishedAt&apiKey=f480e4e646c5425d84654b1c99d76f6b")
    .then( res => res.json())
    .then( data =>setNews(data.articles))
  },[])
  return (
    <div className="App">
    {
      news.length === 0 ?
      <Spinner animation="border" />
      :
      <Row xs={4} md={2} className="g-4">
      {
        news.map( nw => <News news={nw}></News>)
      }
  </Row>
    }
    </div>
  );
}

export default App;
