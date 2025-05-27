import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button, ButtonGroup, Card, Container, Form, InputGroup, Row } from "react-bootstrap";
import DisplayOrder from './DisplayOrder';

import { validIngredients, validProteins, validBases, validSizes } from '../resources/poke.mjs';


import { useState } from 'react';

import { Order } from "../resources/poke.mjs";
import MakeOrder from './MakeOrder';
import { Routes } from 'react-router';

import "../App.css";

function OrderBody(props) {
    const [order, setOrder] = useState([]);
    
    const addBowl = (bowl) => {
        setOrder(oldOrder => {
            const idx = oldOrder.findIndex(item => {return JSON.stringify(item.bowl) === JSON.stringify(bowl)});
            if (idx !== -1) {
                return oldOrder.map((item, i) =>
                    i === idx ?
                        { ...item, quantity: item.quantity + 1 } :
                        item
                );
            } else {
                return [...oldOrder, { bowl, quantity: 1 }];
            }
        });
    };

    const editBowlInOrder = (id) => {
        
    }

    const deleteBowlFromOrder = (id) => {
        console.log("delete bowl debug: id: "+id);
        setOrder(oldOrder => {
            let newOrder;
            if(oldOrder[id].quantity == 1){
                newOrder = oldOrder.filter((value ,index) => index != id)
            }else{
                newOrder = oldOrder.map((item, index) => index === id ?
                        { ...item, quantity: item.quantity - 1 } :
                        item)
            }
            return newOrder
        });
    }

    //////////////////////////////////////////////////////////

    
    // state for the new bowl
    //const [bowl, setBowl] = useState(null);
    const [bowlBase, setBowlBase] = useState(null);
    const [bowlSize, setBowlSize] = useState(null);
    const [bowlIngredients, setBowlIngredients] = useState([]);
    const [bowlProteins, setBowlProteins] = useState([]);

    /// BASE
    const addBase = (base) => {
        if (validBases.includes(base)) {
            setBowlBase(base);
        } 
    }

    /// SIZE
    const addSize = (size) => {
        if (validSizes.includes(size)){
            setBowlSize(size);
        } 
    }
    
    const manageIngredient = (id, ingredient) => {

        let newIngr;
        
        if(id >= bowlIngredients.length || bowlIngredients.length-1 == 0){
            
            setBowlIngredients((oldIngr) => {
                newIngr = [...oldIngr];
                newIngr.push(ingredient);
                return newIngr;
            });
        } else {
            setBowlIngredients((oldIngr) =>{
                newIngr = [...oldIngr];
                newIngr.map((ingr, i) => {
                    if(id == i){
                        ingr = ingredient;
                        return ingr
                    }   
            });
                //newIngr[id] = ingredient;
                return newIngr;
            });


        }

        /*useEffect(() => {
            console.log("Whole ingr vector: "+bowlIngredients+"\n")
        }, [bowlIngredients]);*/
    }

    /// PROTEINS

    const manageProtein = (id, protein) => {

        let newProt;
        
        if(id >= bowlProteins.length || bowlProteins.length-1 == 0){
            
            setBowlProteins((oldProt) => {
                newProt = [...oldProt];
                newProt.push(protein);
                return newProt;
            });
        } else {
            setBowlProteins((oldProt) =>{
                newProt = [...oldProt];
                newProt.map((prot, i) => {
                    if(id == i){
                        prot = protein;
                        return prot
                    }   
            });
                //newIngr[id] = ingredient;
                return newProt;
            });


        }

        /*useEffect(() => {
            console.log("Whole ingr vector: "+bowlIngredients+"\n")
        }, [bowlIngredients]);*/
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

    /// State for ingredient form select entries ///
    const [ingredientsEntry, setIngredientsEntry] = useState([<SelectIngredient key={0} id={0} ingredients={ingredients} manageIngredient={manageIngredient} bowlIngredients={bowlIngredients}/>]);

    const addIngredientField = () => {
        setIngredientsEntry([...ingredientsEntry, <SelectIngredient key={ingredientsEntry.length} id={ingredientsEntry.length} ingredients={ingredients} manageIngredient={manageIngredient} bowlIngredients={bowlIngredients}/>]);
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

    /// State for protein form select entries ///
    const [proteinsEntry, setProteinsEntry] = useState([<SelectProtein key={0} id={0} proteins={proteins} manageProtein={manageProtein} bowlProteins={bowlProteins} />]);

    const addProteinField = () => {
        setProteinsEntry([...proteinsEntry, <SelectProtein key={proteinsEntry.length} id={proteinsEntry.length} proteins={proteins} manageProtein={manageProtein} bowlProteins={bowlProteins}/>]);
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


    const o = props.order

    return <Tabs
        defaultActiveKey="Select_Ingredients"
        id="order page"
        className="main-content"
        mountOnEnter
        unmountOnExit
        >


            <Tab eventKey="Select_Ingredients" title="Select Ingredients">
                <MakeOrder 
                    order={order} 
                    addBowlToOrder={addBowl} 

                    bowlBase={bowlBase}
                    bowlSize={bowlSize}
                    
                    addBase={addBase}
                    addSize={addSize}

                    bowlIngredients={bowlIngredients}
                    bowlProteins={bowlProteins}

                    manageIngredient={manageIngredient}
                    manageProtein={manageProtein}

                    ingredientsEntry={ingredientsEntry}
                    addIngredientField={addIngredientField}
                    removeIngredientField={removeIngredientField}

                    proteinsEntry={proteinsEntry}
                    addProteinField={addProteinField}
                    removeProteinField={removeProteinField}
                />

            </Tab>

            <Tab eventKey="Order Resume" title="Order Resume">
                <div className="mt-5 pt-4">
                    <DisplayOrder 
                        order={order}
                        editBowlInOrder={editBowlInOrder}
                        deleteBowlFromOrder={deleteBowlFromOrder}   
                        addBowlToOrder={addBowl} 
                    />
                </div>
            </Tab>


    </Tabs>;
}



// to manage the MakeOrder page
function SelectIngredient(props){
    //console.log("w il debugging "+props.bowlIngredients+"id: "+props.id) value={props.bowlIngredients[props.id]}
    return(<InputGroup id={props.id} className=" mb-1" aria-label="select ingredient">
        
        <Form.Select onChange={(e) => props.manageIngredient(props.id, e.target.value)} >
            <option>Select ingredient</option>

            {props.ingredients}

        </Form.Select>
        <Form.Control type="number" placeholder="Quantity" defaultValue={1} min={1} max={10}>

        </Form.Control>
    </InputGroup>)
}

function SelectProtein(props){
    

    return(
        <InputGroup id={props.id} className=" mb-1" aria-label="select protein">
            <Form.Select onChange={(e) => props.manageProtein(props.id, e.target.value)}>
                <option>Select protein</option>

                {props.proteins}

            </Form.Select>
            <Form.Control type="number" placeholder="Quantity" defaultValue={1} min={1} max={10}>

            </Form.Control>
        </InputGroup>
    )
}

export default OrderBody