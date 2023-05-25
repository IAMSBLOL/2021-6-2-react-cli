import { takeLatest, put } from 'redux-saga/effects'
import { saveUserInfo, getUserInfo } from '@src/controller/reducer/globalSlice'
// import { message } from 'antd'

// import Helper from '../config/helper'

export default function* homeSaga (): any {
  yield takeLatest(getUserInfo.type, workSaga)
}
// process-api/runtime/tasks?size=50

function* workSaga (action: any): any {
  console.log(action.payload)
  try {
    // const path = '/v1/users/info'
    // const res = yield call(() => request.get(path, params))
    yield put(saveUserInfo({ data: action.payload } as any))
  } catch (e) {
    console.error(e, 'fetchDemandsListSaga')
  } finally {

  }
}
