import React, { memo, useEffect } from 'react';
import { init } from './slice';
import { add } from '../cart/slice';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import './style.css'
import { Card, Button } from 'react-bootstrap';

const ShowCase = ( { products, loading, init, add }  ) => {  

    useEffect( () => {
        init();
    }, [])
    

    return (
        <>
        { loading &&  <h3>Carregando....</h3>}        
            { !loading &&
                products.map( product => {
                    return (
                        <Card style={{ width: '18rem' }} key={product.id}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text> */}
                                <Button onClick={ () => add(product)} variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    )
                }
                )} 
         
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators( { init , add }, dispatch);

function mapStateToProps(state) {
  const products = state?.showcase?.products
  const loading = state?.showcase?.loading
  
  return { products , loading };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ShowCase);
