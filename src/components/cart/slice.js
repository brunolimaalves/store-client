import { createSlice, current, original } from '@reduxjs/toolkit';

const initialState = {
    purchases: [ ] ,
    loading: false
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {

        let newArray=[];
        if(state.purchases.length === 0) {
            newArray.push( { product: { ...action.payload } , total: 1 } )
        }else{
            newArray = state.purchases.map( purchase => {
                if(purchase.product.id === action.payload.id){
                    return { ...purchase , total: purchase.total + 1 }
                }
                return purchase;
            })

            if( !newArray.some( (elem , arr ) => elem.product.id === action.payload.id )){
                newArray.push( { product: { ...action.payload } , total: 1 } )
            }
            
        }
        

        state.purchases = newArray


        console.log(current(state))
    }
  }
});


export const { add } = cartSlice.actions;

export default cartSlice.reducer;