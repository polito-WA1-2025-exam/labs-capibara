import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Order, Bowl } from '../../poke.mjs';

import Header from './components/Header';
import DisplayOrder from './components/DisplayOrder';
import Footer from './components/Footer';

function App() {
    const [count, setCount] = useState(0);

    // Static data for now (lab 5)
    const bowl1 = new Bowl('R', 'Rice');
    bowl1.addIngredient('Avocado');
    bowl1.addIngredient('Mango');
    bowl1.addProtein('Chicken');

    const bowl2 = new Bowl('L', 'Black_rice');
    bowl2.addIngredient('Kale');
    bowl2.addIngredient('Tomatoes');
    bowl2.addProtein('Tuna');

    const placeholder = new Order('example@user.com');
    placeholder.addBowlToOrder(bowl1, 2);
    placeholder.addBowlToOrder(bowl2, 1);

    return (
        <>
            <Header />
            <div className="mt-5 pt-4">
                <DisplayOrder order={placeholder} />
            </div>
            <Footer/>
        </>
    );
}

export default App;