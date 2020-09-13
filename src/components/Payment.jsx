import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import InputMask from "react-input-mask";
import {Breadcrumb} from "./index";

const Payment = ({title, setDone}) => {
    const {register, errors, handleSubmit} = useForm();
    const [upperCase, setUpperCase] = useState('');

    const onUpperCase = (e) => {
        setUpperCase(e.target.value.toUpperCase())
    }

    const onSubmit = data => {
        console.log(data);
        setDone(true)
    }

    return (
        <>
            <Breadcrumb payment/>
            <div className="form form--payment">
                <h2 className="form__title">{title}</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__field-wrap">
                        <label className="form__label" htmlFor="cardOwner">Имя на карте</label>
                        <input className={`form__input ${errors.cardOwner ? 'has-error' : ''}`}
                               id="cardOwner"
                               type="text"
                               name="cardOwner"
                               value={upperCase}
                               ref={register({
                                   required: true,
                                   pattern: /^[a-zA-Z\s]+$/
                               })}
                               onChange={onUpperCase}
                               placeholder="Konstantin Ivanov"
                        />
                    </div>
                    <div className="form__field-wrap">
                        <label className="form__label" htmlFor="cardNumber">Номер карты</label>
                        <InputMask mask="9999 9999 9999 9999 9999">
                            <input className={`form__input ${errors.cardNumber ? 'has-error' : ''}`}
                                   id="cardNumber"
                                   type="text"
                                   name="cardNumber"
                                   ref={register({required: true})}
                                   placeholder="XXXX XXXX XXXX XXXX XXXX"
                            />
                        </InputMask>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="form__field-wrap form__field-wrap--w-30">
                            <label className="form__label" htmlFor="cardNumber">Срок</label>
                            <InputMask mask="99 / 99">
                                <input className={`form__input ${errors.expirationDate ? 'has-error' : ''}`}
                                       type="text"
                                       name="expirationDate"
                                       ref={register({required: true,})}
                                       placeholder="MM / YY"
                                />
                            </InputMask>
                        </div>
                        <div className="form__field-wrap form__field-wrap--w-30">
                            <label className="form__label" htmlFor="cardNumber">CVV</label>
                            <input className={`form__input ${errors.cvv ? 'has-error' : ''}`}
                                   type="text"
                                   name="cvv"
                                   ref={register({required: true, pattern: /^[0-9]{3,3}$/})}
                            />
                        </div>
                    </div>
                    <button type="submit" className="form__btn">Оплатить</button>
                </form>
            </div>
        </>
    );
};

export default Payment;