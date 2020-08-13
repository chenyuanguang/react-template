import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './index.module.css';
import Cnum from '@components/cnum';
console.log(style);
class Index extends Component {
    render() {
        return (
            <div className={style.index}>
                <section>显示redux中数据：{this.props.num}</section>
                <Cnum {...this.props} />
            </div>
        );
    }
}
export default connect((state) => state)(Index);
