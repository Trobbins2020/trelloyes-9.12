import React from "react";
import List from "./List";
import "./App.css";
import STORE from "./store";

function omit(obj, keyToOmit) {
  let { [keyToOmit]: _, ...rest } = obj;
  return rest;
}
class App extends React.Component {
  state = {
    store: STORE,
  };

  handlerDelete = (id) => {
    const allCards = omit(this.state.store.allCards, "foo");
    let lists = [];
    this.state.store.lists.map((item) => {
      let list = {};
      list.id = item.id;
      list.header = item.header;
      list.cardIds = item.cardIds.filter((itm) => itm !== id);
      lists.push(list);
      return list;
    });
    this.setState({
      store: { lists: lists, allCards: allCards },
    });
  };

  handlerRandomCard = (rand) => {
    const id =
      Math.random().toString(36).substring(2, 4) +
      Math.random().toString(36).substring(2, 4);
    let card = { id, title: `Random Card ${id}`, content: "lorem ipsum" };
    var stateObject = () => {
      let returnObj = this.state.store.allCards;
      returnObj[id] = card;
      return returnObj;
    };
    this.state.store.lists[rand - 1].cardIds.push(id);
    this.setState({
      store: {
        lists: this.state.store.lists,
        allCards: stateObject(),
      },
    });
  };

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.store.lists.map((list) => (
            <List
              key={list.id}
              listid={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => this.state.store.allCards[id])}
              onDelete={this.handlerDelete}
              onAdd={this.handlerRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
