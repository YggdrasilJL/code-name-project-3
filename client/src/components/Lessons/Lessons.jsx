import { Outlet } from 'react-router-dom';
const Lessons = () => {
  return (
    <div>
      <h1>Lessons</h1>
      <Outlet />
    </div>
  );
};

export default Lessons;
