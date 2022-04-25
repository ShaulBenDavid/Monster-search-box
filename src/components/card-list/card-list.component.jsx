import { Component } from "react";
import './card-list.component.css'
import Cards from "../cards/card.component";

class CardList extends Component {

    render() {
        const { monsters } = this.props;
        
        return (
            <div className="card-list">
                {monsters.map((monster) => {

                    return(
                        <Cards monster={monster} key={monster.id}/>
                    );      
                })}
            </div>
        );
    }
}

export default CardList;