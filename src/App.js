import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import Loading from '@/components/Loading';
import routes from '@/routes';
import Layout from '@/components/Layout';

import { Tabs } from 'rmc-tabs';

const App = () => {
  const history = useHistory();

  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Tabs
              animated={true}
              swipeable={true}
              onChange={(key) => {
                console.log(key)
                history.push(key.toLowerCase())
              }}
              tabBarPosition="bottom"
              tabs={routes.map((props) => ({
                key: props.title,
                title: props.title,
              }))}
              initalPage={'Home'}
            >
              {routes.map((props) => {
                return <Route key={props.title} {...props} />;
              })}
            </Tabs>
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
