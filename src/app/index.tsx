import StackRoutes from '@/routes/stack.routes';
import RoutesAuth from '@/routes/routesAuth';

const isUserAuth = true;

const App = () => {
  return isUserAuth ? <RoutesAuth/> : <StackRoutes/>;
}

export default App;