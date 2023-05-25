
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import core from './controller/core';
import { Provider } from 'react-redux';
// import ErrorBoundaries from './views/container/ErrorBoundaries'
// 傻了吧唧的v6
import { RouterProvider } from 'react-router-dom';
import Routes from './router'
import './asset/style/appCustom.less'

function App () {
  return (
    <ConfigProvider locale={zhCN}>

      <Provider store={core}>

        <RouterProvider router={Routes} />

      </Provider>

    </ConfigProvider>
  );
}

export default App;
