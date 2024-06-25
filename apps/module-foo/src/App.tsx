import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h2>Module foo</h2>
      <Outlet />
    </div>
  );
};

export default App;
