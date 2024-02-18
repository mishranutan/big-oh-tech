import { useState, useContext } from 'react';
import { UserStateContext } from './context';
import { useNavigate } from 'react-router-dom';

enum ControlsName {
  relation = 'relation',
  name = 'name',
  id = 'id',
}

function AddFamily() {
  const context = useContext(UserStateContext);
  const navigate = useNavigate();

  const defaultValue = {
    relation: '',
    id: Math.random(),
    name: '',
    isVisible: true,
    isSubmitted: false,
  };
  const [members, setMembers] = useState([defaultValue]);

  function addFamily() {
    setMembers([...members, { ...defaultValue, id: Math.random() }]);
  }

  function handleShowHide(index: number) {
    members[index].isVisible = !members[index].isVisible;
    setMembers([...members]);
  }
  const onSubmit = (data: any) => {
    const ndata = members.find((k) => k.id === data.id);

    if (ndata) {
      ndata.name = data.name;
      ndata.relation = data.relation;
      ndata.isSubmitted = true;
      setMembers([...members]);
    }
  };

  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    model: typeof defaultValue
  ) => {
    const filtereddata: any = members.find((k) => k.id === model.id);
    if (filtereddata) {
      filtereddata[e.target.name] = e.target.value;
    }

    setMembers((k) => [...k]);
  };

  function remove(index: number) {
    if (members.length > 1) {
      members.splice(index, 1);
      setMembers([...members]);
    }
  }

  function handelNext() {
    if (context.setValue) {
      context.setValue((k: any) => {
        return {
          ...k,
          value: {
            ...k.value,
            members: members,
            step: 'three',
          },
        };
      });
      navigate('/users/step-three');
    }
  }

  return (
    <div>
      <div className="container">
        <h2>Family Members</h2>
        <button onClick={addFamily}>Add New Member</button>
        {members.map((model, index) => {
          return (
            <div className="family-container">
              {!model.isVisible && (
                <span
                  onClick={() => handleShowHide(index)}
                  className="expand-coll-icon"
                >
                  +
                </span>
              )}
              {model.isVisible && (
                <span
                  title="delete"
                  onClick={() => handleShowHide(index)}
                  className="expand-coll-icon"
                >
                  -
                </span>
              )}
              <span
                onClick={() => remove(index)}
                className="expand-coll-icon delete"
              >
                &#x2715;
              </span>

              {model.isVisible && (
                <form onSubmit={onSubmit}>
                  <input
                    className="form-control"
                    type="text"
                    name={ControlsName.relation}
                    onChange={(e) => handelChange(e, model)}
                  />

                  <input
                    className="form-control"
                    type="text"
                    name={ControlsName.name}
                    onChange={(e) => handelChange(e, model)}
                  />
                </form>
              )}
            </div>
          );
        })}
        <button type="button" onClick={handelNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default AddFamily;
