import React,{ Component } from 'react';
import './App.css'
class App extends Component{

  constructor(props){
    super(props);
    this.state={
      items:[],
      isLoaded:false,
    }
  }
  componentDidMount(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=CS2fsIJfwh1g7jKnajlCuBkrW9ETiB6BMKVpopLH')
    .then(res => res.json())
    .then( json =>{
      this.setState({
        isLoaded:true,
        items:json,

      })
    });
  }

render(){
    var{ isLoaded,items } =this.state;

    if(!isLoaded){
      return <div><center><h1>Loading...</h1></center></div>;
    }
    else{
      return (
        <div className='App'>
          <div className='container'>
            <br></br>
          <h1>Astronomy Picture of the Day</h1>
          <br></br>
            <ul>
             <h2>{items.title}</h2>
             <img className='image' src={items.hdurl}></img>
             <p>{items.explanation}</p>
            </ul>
          </div>
          
        </div>
      );
    }


}
}
export default App;
