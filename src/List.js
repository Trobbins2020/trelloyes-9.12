import React from "react";
import Card from "./Card";
import "./List.css";

function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) => (
          <Card
            title={card.title}
            key={card.id}
            id={card.id}
            listid={props.listid}
            content={card.content}
            onDelete={props.onDelete}
          />
        ))}
        <button
          type="button"
          className="List-add-button"
          onClick={() => props.onAdd(props.listid)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
