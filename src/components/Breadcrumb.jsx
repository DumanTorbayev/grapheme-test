import React from 'react';

const Breadcrumb = ({payment}) => {
    return (
        <div className="breadcrumb">
            <span className={`breadcrumb__item ${!payment ? 'breadcrumb__item--active' : ''}`}>Доставка</span>
            <span className={`breadcrumb__item ${payment ? 'breadcrumb__item--active' : ''}`}>Оплата</span>
        </div>
    );
};

export default Breadcrumb;