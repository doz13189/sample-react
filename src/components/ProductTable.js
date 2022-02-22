import React from 'react';


import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>

                    <thead>
                        <ProductCategoryRow />
                        <ProductRow />
                    </thead>

                </table>
            </div>
        );
    }
}
