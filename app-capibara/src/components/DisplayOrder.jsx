import { Table, Container, Card } from 'react-bootstrap';

function DisplayOrder(props) {
    const o = props.order;

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
                                <th>Base</th>
                                <th>Ingredients</th>
                                <th>Proteins</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <DisplayBowls bowls={o.bowls} />
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}

function DisplayBowls(props) {
    const bowls = props.bowls;

    const rows = [];
    for (const item of bowls) {
        rows.push(
            <tr key={item.bowl.base + item.quantity}>
                <td>{item.bowl.base}</td>
                <td>{item.bowl.ingredients.join(', ')}</td>
                <td>{item.bowl.proteins.join(', ')}</td>
                <td>{item.quantity}</td>
            </tr>
        );
    }

    return <>{rows}</>;
}

export default DisplayOrder;