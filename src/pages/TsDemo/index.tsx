import React from 'react';
import { connect } from 'react-redux';
import style from './index.module.less';
import ContextStore from '@components/ContextStore';
interface HooksDemoProps {
    history: string;
    num: string;
}

const HooksDemo = (props: HooksDemoProps) => {
    console.log(props);
    return (
        <div className={style.app}>
            <h3>hooks示例</h3>
            <section className={style.section}>
                <h4></h4>
                <ContextStore />
            </section>
        </div>
    );
};
export default connect((state) => state)(HooksDemo);
