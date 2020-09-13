import React, {useState} from 'react';
import {Route} from "react-router-dom";
import {Header, Delivery, Payment} from "./components";
import verified from "./assets/images/verified.svg"

function App() {
    const [done, setDone] = useState(false);

    return (
        <>
            <Header/>
            <main className="main">
                <div className="form-container">
                    {!done
                        ? <>
                            <Route exact path='/' render={() => <Delivery title={'Информация для доставки'}/>}/>
                            <Route exact path='/payment' render={() => <Payment title={'Оплата'} setDone={setDone}/>}/>
                        </>
                        : <div className="form__done">
                            <img src={verified} alt=""/>
                            <span className="form__done-text">Спасибо!</span>
                        </div>
                    }
                </div>
            </main>
        </>
    );
}

export default App;
