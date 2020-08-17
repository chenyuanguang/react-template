import React, { useContext } from 'react';
import { DemoContext } from '../store';
export default () => {
    const [state, reset] = useContext(DemoContext);
    return (
        <li>
            <label htmlFor="">兄弟组件更改age：</label>
            <button onClick={() => reset({ age: state.age + 1 })}>
                点击改变
            </button>
        </li>
    );
};
