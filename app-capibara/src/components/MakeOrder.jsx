import { Card, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Bowl } from "../../../poke.mjs";

function MakeOrder(props){
    const order = props.order;
    
    return(<Container>
        <Form>
            <Card>
            <SelectSize/>
            <SelectBase/>

            <h4 className="mt-3 mb-3">Select ingredients</h4>
            <SelectIngredients/>
            </Card>
        </Form>
    </Container>);
}

function SelectSize(){
    return (<Form.Select className=" mb-1" aria-label="select size">
      <option isInvalid>Select bowl size</option>
      <option value="R">Regular (R)</option>
      <option value="M">Medium (M)</option>
      <option value="L">Large (L)</option>
    </Form.Select>);
}

function SelectBase(){
    return (<Form.Select className="mt-1 mb 1" aria-label="select base">
        <option isInvalid>Select bowl base</option>
        <option value="Rice">Rice</option>
        <option value="Black_rice">Black rice</option>
        <option value="Salad">Salad</option>
      </Form.Select>);
}

function SelectIngredients(){
    return (<SelectIngredient/>);
}

function SelectIngredient(){

    return(<InputGroup className=" mb-1" aria-label="select ingredient">
        <Form.Select>
            <option isInvalid>Select ingredient</option>
            <option value="R">Roba</option>
            <option value="M">Altra Roba</option>
            <option value="L">Boh</option>
        </Form.Select>
        <Form.Control 
            type="number"
            placeholder="Quantity" 
            
            value="1"
        >

        </Form.Control>
    </InputGroup>)
}

function SelectProteins(){


}




export default MakeOrder