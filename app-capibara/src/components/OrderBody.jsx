import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
import DisplayOrder from './DisplayOrder';


import { useState } from 'react';

import { Order } from "../resources/poke.mjs";
import MakeOrder from './MakeOrder';

function OrderBody(props) {
    const [order, setOrder] = useState([]);
    
    const addBowl = (bowl) => {
        setOrder(oldOrder => {
            const idx = oldOrder.findIndex(item => {return JSON.stringify(item.bowl) === JSON.stringify(bowl)});
            if (idx !== -1) {
            return oldOrder.map((item, i) =>
                i === idx ?
                    { ...item, quantity: item.quantity + 1 } :
                    item
            );
            } else {
            return [...oldOrder, { bowl, quantity: 1 }];
            }
        });
      };


    const o = props.order

    return <Tabs
        defaultActiveKey="Select_Ingredients"
        id="order page"
        className="mb-3"
        mountOnEnter
        unmountOnExit
        >
        <Tab eventKey="Select_Ingredients" title="Select Ingredients">
            
            <MakeOrder order={order} addBowlToOrder={addBowl} />

        </Tab>

        <Tab eventKey="Order Resume" title="Order Resume">
            <div className="mt-5 pt-4">
                <DisplayOrder order={order}/>
            </div>
        </Tab>


    </Tabs>;
}

export default OrderBody