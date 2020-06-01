import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

export default class App extends Component {

  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };

  removeCharacter= indeX => {
     const  {characters}= this.state;
     this.setState({
         characters: characters.filter((item,index)=>{
return index!==indeX
         }),
     })
  };
handleSubmit= character=>{
    this.setState({
        characters: this.state.characters.concat(character)
    })
}
  render() {
    return (
      <div className="container">
        <Table
          charactersData={this.state.characters}
       removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
