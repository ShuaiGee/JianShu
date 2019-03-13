/**
 * Created by GeShuai on 2019/3/12.
 */
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return <div>正在加载</div>
  }
});

export default () => <LoadableComponent/>
