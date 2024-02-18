import { Outlet } from 'react-router-dom';
import { UserStateContext } from './context';
import { useContext } from 'react';

function ActiveForm() {
  const context = useContext(UserStateContext);
  return (
    <>
      <div className="container a-forms-section">
        <div className={`tab ${context.value.step === 'one' ? 'active' : ''}`}>
          User Information
        </div>
        <div className={`tab ${context.value.step === 'two' ? 'active' : ''}`}>
          Family Members
        </div>
        <div
          className={`tab ${context.value.step === 'three' ? 'active' : ''}`}
        >
          Final Details
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default ActiveForm;
