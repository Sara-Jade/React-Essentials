import { useReducer } from 'react';

const Checkbox = () => {
    const [isChecked, toggleChecked] = useReducer(isChecked => !isChecked, false);

    return (
        <>
            <label htmlFor='checkbox'>{isChecked ? 'Checked!' : 'Not checked!'}</label>
            <input
                id='checkbox'
                type='checkbox'
                value={isChecked}
                onChange={toggleChecked}
            ></input>
        </>
    );
};

export default Checkbox;