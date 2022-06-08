import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/onsenui.css';

import * as React from 'react';
import { MutableRefObject } from 'react';
import {
  List,
  ListHeader,
  ListItem,
  Page,
  PullHook,
  PullHookChangeEvent,
  Toolbar,
} from 'react-onsenui';

function useStateCallback<S>(initialState: S) : [S, (state: S, callback: () => void) => void] {
  const [state, setState] = React.useState(initialState);
  const cbRef : MutableRefObject<(() => void)| null> = React.useRef(null); // mutable ref to store current callback

  const setStateCallback = (state: S, callback: (() => void)) => {
    cbRef.current = callback; // store passed callback to ref
    setState(state);
  };

  React.useEffect(() => {
    // cb.current is `null` on initial render, so we only execute cb on state *updates*
    if (cbRef.current) {
      cbRef.current();
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
}


  const getRandomData = () : number[] => {
    const rv = [];

    for (let i = 0; i < 100; i++) {
      rv.push(Math.round(100 * Math.random()));
    }

    return rv;
  };

  const renderToolbar = () => {
    return (
      <Toolbar>
        <div className='center'>My App</div>
      </Toolbar>
    );
  };


  const renderRow = (row: number, index?: number): JSX.Element | undefined => {
    return (
      <ListItem key={index}>
        <div className="left">left</div>
        <div className='center'>{row} bhgpowhgw</div>
        <div className='right'>tight</div>
      </ListItem>)
  };

export const TopStoriesPage = () => {
  const [state, setState] = React.useState('initial');
  const [data, setData] = useStateCallback(getRandomData());


  const handleChange =  (e: PullHookChangeEvent) => {
    setState(e.state);
  };

  const handleLoad = (done: () => void): void => {

    console.log("loading data");
    
    const newData = getRandomData();

    setTimeout(() => {
      setData(newData, done);
    }, 3000);
  };

  const getContent = () => {
    switch (state) {
      case 'initial':
        return 'Pull to refresh';
      case 'preaction':
        return 'Release';
      case 'action':
        return 'Loading...';
    }
  };

    return (
      <Page renderToolbar={renderToolbar}>
        <PullHook
          onChange={handleChange}
          onLoad={handleLoad}
        >
          {getContent()}
        </PullHook>
        <List
          dataSource={data}
          renderRow={renderRow}
          renderHeader={() => <ListHeader>Pull to refresh</ListHeader>}
        />
      </Page>
    );
    }
