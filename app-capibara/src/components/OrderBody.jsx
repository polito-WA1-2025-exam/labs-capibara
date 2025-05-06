import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
import DisplayOrder from './DisplayOrder';


import { useRef, useState } from 'react';

import { Order } from "../resources/poke.mjs";
import MakeOrder from './MakeOrder';

function OrderBody(props) {
    const [order, setOrder] = useState([]);
    
    const addBowl = (bowl) => {
        setOrder((oldOrder) => {
            let newOrder = [...oldOrder]
            // If the bowl is already in the order
            newOrder.forEach(b => {
                if(JSON.stringify(bowl) === JSON.stringify(b.bowl)){
                    b.quantity += 1;
                    return;
                }
            });
            // If the  desired bowl is not yet in the order
            newOrder.push({"bowl": bowl, "quantity": 1});
            return newOrder;
        });
    }


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