import { all, put, takeLatest, delay } from 'redux-saga/effects';
import {  init , complete , fetched } from './slice';

export function* $init() {
    try {
        yield put( fetched( [ {id: Math.random() , name: 'Produto 01'},
        {id: Math.random() , name: 'Produto 02'},
        {id: Math.random() , name: 'Produto 03'},
        {id: Math.random() , name: 'Produto 04'} ] ) )
        yield delay(5000);
        yield put( complete() )
        
    } catch {
        console.log('error');
    }
}

export default function* ShowCase() {
    yield all([
        takeLatest(init, $init),
    ]);
}
