import React from "react";
import axios from "axios";

export default class Kanyequotes extends React.Component {
  state = {
    quotes: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const quotes = res.data;
      this.setState({ quotes });
    });
  }

  render() {
    return (
      <div>
        {this.state.quotes.map((quotes) => (
          <h1 key={quotes.id}>{quotes.title}</h1>
        ))}
      </div>
    );
  }
}
