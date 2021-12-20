import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

class InputTags extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [
                // { id: "BMW", text: "BMW" },
                { id: "vip", text: "vip" }
             ],
            suggestions: [
                { id: 'TeslaL', text: 'teslaL' },
                { id: 'FerrariLuxury', text: 'ferrariLuxury' },
                { id: 'FordMass', text: 'fordMass' },
                { id: 'PorscheLuxury ', text: 'porscheLuxury ' },
                { id: 'HondaMass', text: 'hondaMass' },
                { id: 'ToyotaMass', text: 'toyotaMass' }
             ]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }

    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }

    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: newTags });
    }

    render() {
        const { tags, suggestions } = this.state;
        return (
            <div>
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters} />
            </div>
        )
    }
};
export default InputTags