import React, { useState } from 'react';
import { connect } from 'react-redux';

import style from './index.module.less';

interface HooksDemoProps {
    num: number;
}

const HooksDemo: React.FC<HooksDemoProps> = (props) => {
    const [state, setstate]: [number, any] = useState(1);

    return (
        <section className={style.section}>
            <span>{state}</span>
        </section>
    );
};
export default HooksDemo;
