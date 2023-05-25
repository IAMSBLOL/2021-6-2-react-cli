
import { all, fork } from 'redux-saga/effects';
import globalSaga from './globalSaga';

function* rootSaga ():any {
  yield all([
    fork(globalSaga),

  ])
}

export default rootSaga;
