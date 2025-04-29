import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
import DisplayOrder from './DisplayOrder';

function OrderBody(props) {
    const o = props.order

    return <Tabs
        defaultActiveKey="Select_Ingredients"
        id="order page"
        className="mb-3"
        >
        <Tab eventKey="Select_Ingredients" title="Select Ingredients">
            Tab content for Make order page
        </Tab>

        <Tab eventKey="Order Resume" title="Order Resume">
            <div className="mt-5 pt-4">
                <DisplayOrder order={o} />
            </div>
        </Tab>


    </Tabs>;
}

export default OrderBody