import { Button, ButtonGroup, Card, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Bowl } from "../../../poke.mjs";
import {useState} from "react";
import {Plus, Minecart, Dash}from "react-bootstrap-icons"


import '../App.css'

function MakeOrder(props){
    const [ingredientsEntry, setIngredientsEntry] = useState([<SelectIngredient key={0} />]);

    const addIngredientField = () => {
        setIngredientsEntry([...ingredientsEntry, <SelectIngredient key={ingredientsEntry.length} />]);
    };

    const removeIngredientField = () => {
        setIngredientsEntry((oldIngr) => {
            let newIngr = [...oldIngr];
            newIngr.pop();
            return newIngr;
        } )
    }


    const order = props.order;
    
    return(<Container>
        <Form>
            <Card>
            <h4 className="mt-3 mb-3">Select bowl size and base</h4>

            <SelectSize/>
            <SelectBase/>

            <h4 className="mt-3 mb-3">Select ingredients</h4>
            <SelectIngredients ingredientsEntry={ingredientsEntry} addIngredientField={addIngredientField} removeIngredientField={removeIngredientField}/>
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

function SelectIngredients(props) {
    return (
        <>
            {props.ingredientsEntry}
            <div className="d-flex justify-content-center mt-3">
                <ButtonGroup>
                    <Button
                        className="btn small-button add-ingredient me-2"
                        onClick={props.removeIngredientField}
                        variant="outline-danger"
                    >
                        <Dash />
                    </Button>
                    <Button
                        className="btn small-button add-ingredient"
                        onClick={props.addIngredientField}
                        variant="outline-success"
                    >
                        <Plus />
                    </Button>
                </ButtonGroup>
            </div>
        </>
    );
}

function SelectIngredient(){

    return(<InputGroup className=" mb-1" aria-label="select ingredient">
        <Form.Select>
            <option isInvalid>Select ingredient</option>
            <option value="R">Roba</option>
            <option value="M">Altra Roba</option>
            <option value="L">Boh</option>
        </Form.Select>
        <Form.Control type="number" placeholder="Quantity" defaultValue={1} min={1} max={10}>

        </Form.Control>
    </InputGroup>)
}

function SelectProteins(){
    return(<>
    </>)

}




export default MakeOrder