import React, { memo } from 'react';
import { connect } from 'react-redux';
import {  compose } from 'redux';
import './style.css'

const CartSummary = ({ purchases }) => {

    //console.log(purchases)
    return (
        <>
            <h5 className='summary'> { `Products ${ purchases.length}` } </h5>
        </>
    )
}

function mapStateToProps(state) {
    const purchases = state?.cart?.purchases
    
    return { purchases };
  }
  
  const withConnect = connect(mapStateToProps, null);
  
  export default compose(withConnect, memo)(CartSummary);