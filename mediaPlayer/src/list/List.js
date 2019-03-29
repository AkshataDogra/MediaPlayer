import React, { Component } from 'react';
import pick from 'lodash/pick'
import Card from "./../card/Card";
import "./../list/List.css"

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

const update = require('immutability-helper');

class List extends Component {

    moveCard = (dragIndex, hoverIndex) => {
        const { songList } = this.props
        const dragCard = songList[dragIndex]

        this.props.updateList(
            update(pick(this.props, ['songList']), {
            songList: {
                $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
            },
            }),
        )
    }

    render() {
        return (
            <div className="item-container">
                { this.props.songList.map((card, i) => (
                    <Card
                    key={ card.id }
                    index={ i }
                    id={ card.id }
                    text={ card.songName }
                    sequence={card.sequence}
                    moveCard={ this.moveCard }
                />
                ))}
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(List)