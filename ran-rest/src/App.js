import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],

    };
  }

  componentDidMount() {
    fetch("https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972")
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
  
        })
      });
  }
  render() {

    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    else {
      return (
        <div className="App">
          Data has been loaded!
        </div>
      );
    }
    
    }
}

export default App;
