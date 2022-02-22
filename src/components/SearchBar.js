import React from 'react';


export default class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text"></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <label>only show products in stock</label>
                </div>
            </div>
        );
    }
}
