import { Button, ButtonGroup, Card, Container, Form} from "react-bootstrap";
import { Bowl, validBases, validSizes } from "../resources/poke.mjs";
import {useEffect, useState} from "react";
import {Plus, Dash}from "react-bootstrap-icons"
import { useRef } from "react";


import '../App.css'

function MakeOrder(props){
    
    const submitBowl = (e) => {
        e.preventDefault(); // prevent the page from reloading (defult behavior)
        e.stopPropagation()

        if(!!props.bowlBase && !!props.bowlSize){
            let b = new Bowl(props.bowlSize, props.bowlBase);

            props.bowlIngredients.forEach((ingr) => b.addIngredient(ingr));
            props.bowlProteins.forEach((prot) => b.addProtein(prot));

            b.updatePrice();
            console.log(b.size, " ", b.base);
            props.addBowlToOrder(b);
            
        }
        console.log("debug send caller")

    }
    
    

    return(<Container on>
        <Form>
            <Card>
            <h4 className="mt-3 mb-3">Select bowl size and base</h4>

            <SelectSize addSize={props.addSize}/>
            <SelectBase addBase={props.addBase}/>

            <h4 className="mt-3 mb-3">Select ingredients</h4>
            <SelectIngredients
                ingredientsEntry={props.ingredientsEntry} 
                addIngredientField={() => props.addIngredientField(props.manageIngredient)} 
                removeIngredientField={props.removeIngredientField}
            />
            

            <SelectProteins
                proteinsEntry={props.proteinsEntry} 
                addProteinField={() => props.addProteinField(props.manageProtein)} 
                removeProteinField={props.removeProteinField}
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

    // initialization
    // props.addIngredientField()

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


export default MakeOrder