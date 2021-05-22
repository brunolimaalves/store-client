import { all, put, takeLatest, delay } from 'redux-saga/effects';
import {  init , complete , fetched } from './slice';

export function* $init() {
    try {
        yield put( fetched( [ {id: 1 , name: 'Produto 01'},
        {id: 2 , name: 'Produto 02'},
        {id: 3 , name: 'Produto 03'},
        {id: 4 , name: 'Produto 04'} ] ) )
        yield delay(2000);
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
