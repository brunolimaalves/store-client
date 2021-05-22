import React, { memo, useEffect } from 'react';
import { init } from './slice';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';


const ShowCase = ( { products, loading, init }  ) => {  

    useEffect( () => {
        init();
    }, [])
    

    return (
        <>
        { loading &&  <h3>Carregando....</h3>}        
        <ul> 
            { !loading &&
                products.map( product => <li key={product.id}>{product.name}</li> ) 
            } 
         </ul>
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators( { init }, dispatch);

function mapStateToProps(state) {
  const products = state?.showcase?.products
  const loading = state?.showcase?.loading
  
  return { products , loading };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ShowCase);
