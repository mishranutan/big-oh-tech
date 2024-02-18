import { FieldValues } from 'react-hook-form';

function FormGroup(props: FieldValues) {
  return (
    <div className="form-group">
      <label htmlFor="">{props.label}</label>
      {props.children}
      {props.errors[props.name] &&
        props.errors[props.name].type === 'required' && (
          <div className="error-msg">required field</div>
        )}
      {props.errors[props.name] &&
        props.errors[props.name].type === 'maxLength' && (
          <div className="error-msg">max length exceeded</div>
        )}
      {props.errors[props.name] &&
        props.errors[props.name].type === 'pattern' && (
          <div className="error-msg">invalid pattern</div>
        )}
    </div>
  );
}

export default FormGroup;
