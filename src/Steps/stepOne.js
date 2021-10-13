import { useContext, useState, useEffect } from "react";
import {AppContext, SET_STEP_DATA} from '../components/AppContext'
import ImageButton from '../HTMLElements/ImageButton'


export default ({onChange}) => {
    const { state, dispatch } = useContext(AppContext);
    const [firstName, setFirstName] = useState(state?.data?.firstName)
    const [lastName, setLastName] = useState('')

    const [formState, setFormState] = useState();
    useEffect(() => {
        setFormState(state?.data || {});
    }, [state]);


    const handleChangeRadio = (e) => {

            const value = e.target.value;
            const newState = { ...formState.data, ['finanzierung']: value };
            dispatch({
                type: SET_STEP_DATA,
                data: {
                    firstName: firstName
                },
            });
            setFormState(newState);

            console.log(state?.data)

    };

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <label>First Nawwwme</label>
          <input
            className='u-full-width'
            placeholder='First Name'
            type='text'
            onChange={e => setFirstName(e.target.value)}
            //onMouseLeave={handleChangeText}
            value={firstName}
            autoFocus
          />
            <input
                type="radio"
                id={`Kauf`}
                name={`financing`}
                value="Kauf"
                onChange={handleChangeRadio}
                //checked={firstName !== ''}
            />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Last Name</label>
          <input
            className='u-full-width'
            placeholder='Last Name'
            type='text'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>
    </div>
  )
}
