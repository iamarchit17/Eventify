import { Outlet } from 'react-router-dom';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
  <>
  <div style={{backgroundColor: '#252E3B'}}>
    <Outlet />
  </div>
  </>
);

export default MinimalLayout;
