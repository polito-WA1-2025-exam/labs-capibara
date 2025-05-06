import { Button, ButtonGroup, Card, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Bowl, validBases, validIngredients, validProteins, validSizes } from "../resources/poke.mjs";
import {useState} from "react";
import {Plus, Dash}from "react-bootstrap-icons"
import { useRef } from "react";


import '../App.css'

function MakeOrder(props){
    // state for the new bowl
    //const [bowl, setBowl] = useState(null);
    const [bowlBase, setBowlBase] = useState(null);
    const [bowlSize, setBowlSize] = useState(null);
    const [bowlIngredients, setBowlIngredients] = useState([]);
    const [bowlProteins, setBowlProteins] = useState([]);

    /// BOWL
    // create
    /*const createBowl = () => {
        setBowl(() => {
            if(!!bowlBase && !!bowlSize){
                let b = new Bowl(bowlSize, bowlBase);
    
                bowlIngredients.forEach((ingr) => b.addIngredient(ingr));
                bowlProteins.forEach((prot) => b.addProtein(prot));
    
                b.updatePrice();
    
                return b
            }
        })
    }*/

    // delete
    // todo!

    // modify
    // todo!

    /// BASE
    const addBase = (base) => {
        if (validBases.includes(base)) {
            setBowlBase(base);
        } 
    }

    /// SIZE
    const addSize = (size) => {
        if (validSizes.includes(size)){
            console.log("debug onChange")
            setBowlSize(size);
        } 
    }

    /// INGREDIENTS
    const addIngredient = (ingredient) => {
        setBowlIngredients((oldIngr) => {
            let newIngr = [...oldIngr, ingredient];
            return newIngr;
        });
    }

    const delIngredient = (id) => {
        setBowlIngredients((oldIngr) =>{
            let newIngr = [...oldIngr];
            newIngr.map((ingr, i) => {

            })
            return newIngr;
        });
    }

    // to be completed
    const manageIngredient = (id, ingredient) => {
        if(id > bowlIngredients.size){
            addIngredient();
        }
    }

    /// PROTEINS
    const addProtein = (protein) => {
        setBowlProteins((oldProt) => {
            let newIngr = [...oldProt, protein];
            return newIngr;
        });
    }

    const delProtein = () => {
        setBowlProteins((oldProt) =>{
            let newProt = [...oldProt];
            newProt.pop();
            return newProt;
        });
    }


    /////////////////////////////////////////////////

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
        setIngredientsEntry([...ingredientsEntry, <SelectIngredient key={ingredientsEntry.length} childKey={ingredientsEntry.length} ingredients={ingredients} />]);
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
        setProteinsEntry([...proteinsEntry, <SelectProtein key={proteinsEntry.length} childKey={proteinsEntry.length} proteins={proteins} />]);
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

    const submitBowl = (e) => {
        e.preventDefault(); // prevent the page from reloading (defult behavior)
        e.stopPropagation()

        if(!!bowlBase && !!bowlSize){
            let b = new Bowl(bowlSize, bowlBase);

            bowlIngredients.forEach((ingr) => b.addIngredient(ingr));
            bowlProteins.forEach((prot) => b.addProtein(prot));

            b.updatePrice();
            console.log(b.size, " ", b.base);
            props.addBowlToOrder(b);
            
        }
        console.log("debug send caller")

    }
    
    return(<Container>
        <Form>
            <Card>
            <h4 className="mt-3 mb-3">Select bowl size and base</h4>

            <SelectSize addSize={addSize}/>
            <SelectBase addBase={addBase}/>

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
            <Button type="button" variant="primary" onClick={submitBowl}> Ahhhhhhhhhhh! </Button>
        </Form>
    </Container>);
}

function SelectSize(props){
    return (<Form.Select className=" mb-1" aria-label="select size" onChange={(e) => props.addSize(e.target.value)}>
      <option value={null}>Select bowl size</option>
      <option value="R">Regular (R)</option>
      <option value="M">Medium (M)</option>
      <option value="L">Large (L)</option>
    </Form.Select>);
}

function SelectBase(props){
    return (<Form.Select className="mt-1 mb 1" aria-label="select base" onChange={(e) => props.addBase(e.target.value)}>
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
    return(<InputGroup elementKey={props.childKey} className=" mb-1" aria-label="select ingredient">
        
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
    

    return(<InputGroup elementKey={props.childKey} className=" mb-1" aria-label="select protein">
        <Form.Select>
            <option>Select protein</option>

            {props.proteins}

        </Form.Select>
        <Form.Control type="number" placeholder="Quantity" defaultValue={1} min={1} max={10}>

        </Form.Control>
    </InputGroup>)
}




export default MakeOrder