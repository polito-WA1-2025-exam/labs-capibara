import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
import DisplayOrder from './DisplayOrder';


import { useState } from 'react';
import { Order } from '../../../poke.mjs';
import MakeOrder from './MakeOrder';

function OrderBody(props) {
    const [order, setOrder] = useState(new Order(props.user));

    

    const o = props.order

    return <Tabs
        defaultActiveKey="Select_Ingredients"
        id="order page"
        className="mb-3"
        >
        <Tab eventKey="Select_Ingredients" title="Select Ingredients">
            
            <MakeOrder order = {o} />

        </Tab>

        <Tab eventKey="Order Resume" title="Order Resume">
            <div className="mt-5 pt-4">
                <DisplayOrder order={o} />
            </div>
        </Tab>


    </Tabs>;
}

export default OrderBody