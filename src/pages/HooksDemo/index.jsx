import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import style from './index.module.less';

const HooksDemo = () => {
    const [num, setnum] = useState(1);

    let reft = useRef(1);
    const [sec, setsec] = useState(reft.current);
    useEffect(() => {
        // 执行一次
        const t = setInterval(() => {
            reft.current += 1;
            setsec(reft.current);
        }, 1000);
        return () => {
            // 组件卸载时销毁
            clearInterval(t);
        };
    }, []);

    const [min, setmin] = useState(0);
    useEffect(() => {
        // 依赖time计算分钟
        setmin(Math.floor(sec / 3));
    }, [sec]);
    return (
        <div className={style.app}>
            <h3>hooks示例</h3>
            <section className={style.section}>
                <h4>useState</h4>
                <ul>
                    <li>
                        <label htmlFor="">数值</label>
                        <span>{num}</span>
                        <button onClick={() => setnum(num + 1)}>
                            点击更新数值
                        </button>
                    </li>
                </ul>
            </section>
            <section className={style.section}>
                <h4>useEffect & useRef</h4>
                <ul>
                    <li>
                        <label htmlFor="">秒数</label>
                        <span>{sec}s</span>
                    </li>
                    <li>
                        <label htmlFor="">分钟</label>
                        <span>{min}m</span>
                    </li>
                </ul>
            </section>
        </div>
    );
};
export default connect((state) => state)(HooksDemo);
