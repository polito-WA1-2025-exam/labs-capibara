import { Table, Col, Container, Row } from 'react-bootstrap'
import { Bowl } from '../../../poke.mjs'


function MakeOrder(props){

    const o = props.order

    return(
        <Container fluid>
        <Table>
            <thead>
            <tr>
                <th>Bowl num</th>
                <th>Base</th>
                <th>Ingredients</th>
                <th>Proteins</th>
            </tr>
            </thead>
        </Table>
        </Container>
    )
}

function DisplayBowls(props){
    !todo
}

function DisplayBowl(props){
    !todo
}



export default MakeOrder