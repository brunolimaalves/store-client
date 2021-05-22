import React, { memo } from 'react';
import { connect } from 'react-redux';
import {  compose } from 'redux';
import './style.css'

const Details = ({ purchases }) => {
    console.log(purchases)
    return (
        <>
            { purchases.length > 0  &&
            <>
            <ul> { purchases.map( purchase => { 
                console.log(purchase)
                return <li key={purchase.product.id}>{purchase.product.name} - {` Qtd:  ${purchase.total}`}</li>
            })}
            </ul>
            </>
            }
        </>
    )
}

function mapStateToProps(state) {
    const purchases = state?.cart?.purchases
    
    return { purchases };
  }
  
  const withConnect = connect(mapStateToProps, null);
  
  export default compose(withConnect, memo)(Details);