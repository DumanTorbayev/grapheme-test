import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {Redirect} from "react-router-dom";
import {Breadcrumb} from "./index";

const Delivery = ({title}) => {
    const {register, errors, handleSubmit} = useForm();
    const [checkCountry, setCheckCountry] = useState(false);
    const [redirect, setRedirect] = useState(false)

    const onSubmit = data => {
        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to="/payment"/>
    }

    return (
        <>
            <Breadcrumb/>
            <div className="form form--delivery">
                <h2 className="form__title">{title}</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__field-wrap">
                        <label className="form__label" htmlFor="recipient">Получатель</label>
                        <input className={`form__input ${errors.recipient ? 'has-error' : ''}`}
                               id="recipient"
                               type="text"
                               name="recipient"
                               ref={register({required: true})}
                               placeholder='ФИО'
                        />
                    </div>
                    <div className="form__field-wrap">
                        <label className="form__label" htmlFor="address">Адрес</label>
                        <input className={`form__input ${errors.city ? 'has-error' : ''}`}
                               id="address"
                               type="text"
                               name="city"
                               ref={register({required: true})}
                               placeholder='Город'
                        />
                        <input className={`form__input ${errors.address ? 'has-error' : ''}`}
                               placeholder='Адрес'
                               name="address"
                               ref={register({required: true})}
                        />
                        <div className="d-flex align-items-center">
                            <select className={`form__select form__select--country ${checkCountry ? 'has-error' : ''}`}
                                    name="country"
                                    defaultValue={'default'}
                                    ref={register({
                                        required: true,
                                        validate: {
                                            positive: value => {
                                                if (value === 'default') {
                                                    setCheckCountry(true)
                                                } else {
                                                    setCheckCountry(false)
                                                }
                                            }
                                        }
                                    })}
                            >
                                <option value="default">Страна</option>
                                <option value="russian">Россия</option>
                                <option value="kazakhstan">Казахстан</option>
                            </select>
                            <input className={`form__input form__input--index ${errors.index ? 'has-error' : ''}`}
                                   type="text"
                                   ref={register({
                                       required: true,
                                       pattern: /^\d{6}$/
                                   })}
                                   placeholder='Индекс' name="index"
                            />
                        </div>
                    </div>
                    <button type="submit" className="form__btn">Продолжить</button>
                </form>
            </div>
        </>
    );
};

export default Delivery;