import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
