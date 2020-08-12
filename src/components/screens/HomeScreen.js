import React, { Component } from 'react';
import Products from '../Products';
import Filter from '../Filter';
import Cart from '../Cart';

export class HomeScreen extends Component {
    render() {
        return (
            <div>
               <div className='content'>
                <div className='main'>
                    <Filter/>
                    <Products></Products>
                </div>
                <div className='sidebar'>
                    <Cart />
                </div>
              </div>
            </div>
        )
    }
}

export default HomeScreen
