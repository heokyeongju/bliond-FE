import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';

function Router() {
  return (
    <BrowserRouter>
      <Route path="/home" render={() => <Home />} />
    </BrowserRouter>
  );
}
export default Router;
