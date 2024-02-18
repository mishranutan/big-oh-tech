import { useForm } from 'react-hook-form';
import FormGroup from './FormGroup';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserStateContext } from './context';

enum ControlsName {
  firstName = 'firstName',
  lastName = 'lastName',
  parentName = 'parentName',
  phoneNumber = 'phoneNumber',
  email = 'email',
  address = 'address',
}

function UserInfo() {
  const context = useContext(UserStateContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    if (data && context.setValue) {
      context.setValue((m) => {
        return {
          ...m,
          value: {
            ...m.value,
            step: 'two',
            userInfo: data,
          },
        };
      });
      navigate('/users/step-two');
    }
  };

  return (
    <div className="container">
      <h2>User Information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          label="First Name"
          name={ControlsName.firstName}
          errors={errors}
        >
          <input
            className="form-control"
            type="text"
            {...register(ControlsName.firstName, {
              required: true,
              maxLength: 20,
            })}
          />
        </FormGroup>
        <FormGroup
          label="Last Name"
          name={ControlsName.lastName}
          errors={errors}
        >
          <input
            className="form-control"
            type="text"
            {...register(ControlsName.lastName, {
              required: true,
              maxLength: 20,
            })}
          />
        </FormGroup>
        <FormGroup
          label="Parent Name"
          name={ControlsName.parentName}
          errors={errors}
        >
          <input
            className="form-control"
            type="text"
            {...register(ControlsName.parentName, {
              required: true,
              maxLength: 50,
            })}
          />
        </FormGroup>
        <FormGroup
          label="Phone Number"
          name={ControlsName.phoneNumber}
          errors={errors}
        >
          <input
            className="form-control"
            type="text"
            {...register(ControlsName.phoneNumber, {
              required: true,
              maxLength: 10,
            })}
          />
        </FormGroup>
        <FormGroup label="Email" name={ControlsName.email} errors={errors}>
          <input
            className="form-control"
            type="text"
            {...register(ControlsName.email, {
              required: true,
              maxLength: 50,
              pattern: /@[^.]*\./,
            })}
          />
        </FormGroup>
        <FormGroup label="Address" name={ControlsName.address} errors={errors}>
          <input
            className="form-control"
            type="text"
            {...register(ControlsName.address, {
              required: true,
              maxLength: 80,
            })}
          />
        </FormGroup>

        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default UserInfo;
