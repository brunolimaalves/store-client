import {all} from 'redux-saga/effects'
import ShowCase from '../components/showcase/saga'

export default function* rootSaga() {
    yield all([
        ShowCase(),
    ])
  }