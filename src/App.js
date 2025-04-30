import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import arya from './arya-picture.webp' ;
class App extends React.Component {
  state={
    person:{
      fullName: "arya stark" ,
      bio : "no one , trained" ,
      imgSrc: arya ,
      profession:"assassin" , 
    },
    shows: false,
    timeSinceMount: 0
  };
  

 
  // Lifecycle: called once when the component mounts
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  // Cleanup when component unmounts
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState(prev => ({ shows: !prev.shows }));
  };

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="App" style={{ textAlign: "center", padding: "2rem" }}>
        <button onClick={this.toggleShow} style={{ padding: "10px 20px", marginBottom: "20px" }}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "10px" }}>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt="profile" style={{ width: "200px", borderRadius: "10px" }} />
            <p><strong>Profession:</strong> {person.profession}</p>
            <p><strong>Bio:</strong> {person.bio}</p>
          </div>
        )}

        <p style={{ marginTop: "30px", color: "gray" }}>
          ⏱ Time since component mounted: {timeSinceMount} seconds
        </p>
      </div>
    );
  }
}

export default App;


