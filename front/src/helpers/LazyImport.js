import React from 'react';
import Loadable from 'react-loadable';

const LoadingComponent = (props) => {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  }
  return <div>Loading...</div>;
};
const LazyImport = opts => Loadable({
  ...opts,
  loading: LoadingComponent,
});

export default LazyImport;
