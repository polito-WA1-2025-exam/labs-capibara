import { Table, Container, Card, ButtonGroup, Button } from 'react-bootstrap';

function DisplayOrder(props) {
    const order = props.order;


    return (
        <Container className="mt-4">
            <Card>
                <Card.Header className="bg-primary text-white">
                    <h4 className="mb-0">Order Summary</h4>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover responsive>
                        <thead className="table-dark">
                            <tr>
                                <th>n</th>
                                <th>Size</th>
                                <th>Base</th>
                                <th>Ingredients</th>
                                <th>Proteins</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <DisplayBowls bowls={order} />
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}

function DisplayBowls(props) {
    const bowls = props.bowls;
    let k = 0;
    const rows = [];
    for (const item of bowls) {
        rows.push(
            <tr key={k}>
                <td>{k+1}</td>
                <td>{item.bowl.size}</td>
                <td>{item.bowl.base}</td>
                <td>{item.bowl.ingredients.join(', ')}</td>
                <td>{item.bowl.proteins.join(', ')}</td>
                <td>{item.quantity}</td>
                <td> 
                    <ButtonGroup>
                        <Button variant='warning'> Edit </Button>
                        <Button variant='danger'> Delete </Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
        k++;
    }

    return <>{rows}</>;
}

export default DisplayOrder;