import { Button, ButtonGroup, Card, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Bowl, validIngredients, validProteins } from "../resources/poke.mjs";
import {useState} from "react";
import {Plus, Dash}from "react-bootstrap-icons"


import '../App.css'

function MakeOrder(props){

    // Take ingredients from the validIngredients and validProteins vectors
    let ingredientsList = validIngredients;
    let proteinsList = validProteins;

    let ingredients = [];
    let proteins = [];
    
    // Transform the two vectors int the right format: option for a React.Select
    ingredientsList.forEach(ingredient => {
        ingredients.push(<option value={ingredient}>{ingredient}</option>)
    });
    proteinsList.forEach(protein => {
        proteins.push(<option value={protein}>{protein}</option>)
    });

    // State for ingredient form select entries
    const [ingredientsEntry, setIngredientsEntry] = useState([<SelectIngredient key={0} ingredients={ingredients} />]);

    const addIngredientField = () => {
        setIngredientsEntry([...ingredientsEntry, <SelectIngredient key={ingredientsEntry.length} ingredients={ingredients} />]);
    };

    const removeIngredientField = () => {
        setIngredientsEntry((oldIngr) => {
            let newIngr = [...oldIngr];
            if(oldIngr.length > 1){
                newIngr.pop();
            }
            return newIngr;
        } )
    }

    // State for protein form select entries
    const [proteinsEntry, setProteinsEntry] = useState([<SelectProtein key={0} proteins={proteins} />]);

    const addProteinField = () => {
        setProteinsEntry([...proteinsEntry, <SelectProtein key={proteinsEntry.length} proteins={proteins} />]);
    };

    const removeProteinField = () => {
        setProteinsEntry((oldProt) => {
            let newProt = [...oldProt];
            if(oldProt.length > 1){
                newProt.pop();
            }
            return newProt;
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
            <SelectIngredients
                ingredientsEntry={ingredientsEntry} 
                addIngredientField={addIngredientField} 
                removeIngredientField={removeIngredientField}
            />
            

            <SelectProteins
                proteinsEntry={proteinsEntry} 
                addProteinField={addProteinField} 
                removeProteinField={removeProteinField}
            />

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
            <div className="d-flex justify-content-center mt-3 mb-3">
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

function SelectIngredient(props){
    

    return(<InputGroup className=" mb-1" aria-label="select ingredient">
        <Form.Select>
            <option isInvalid>Select ingredient</option>

            {props.ingredients}

        </Form.Select>
        <Form.Control type="number" placeholder="Quantity" defaultValue={1} min={1} max={10}>

        </Form.Control>
    </InputGroup>)
}

function SelectProteins(props){
    return (
        <>
            {props.proteinsEntry}
            <div className="d-flex justify-content-center mt-3 mb-3">
                <ButtonGroup>
                    <Button
                        className="btn small-button rem-protein me-2"
                        onClick={props.removeProteinField}
                        variant="outline-danger"
                    >
                        <Dash />
                    </Button>
                    <Button
                        className="btn small-button add-protein"
                        onClick={props.addProteinField}
                        variant="outline-success"
                    >
                        <Plus />
                    </Button>
                </ButtonGroup>
            </div>
        </>
    );

}

function SelectProtein(props){
    

    return(<InputGroup className=" mb-1" aria-label="select protein">
        <Form.Select>
            <option>Select protein</option>

            {props.proteins}

        </Form.Select>
        <Form.Control type="number" placeholder="Quantity" defaultValue={1} min={1} max={10}>

        </Form.Control>
    </InputGroup>)
}




export default MakeOrder