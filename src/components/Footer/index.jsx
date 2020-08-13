import React from 'react';
import styles from './index.module.less';

export default () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <a href="https://github.com/chenyuanguang/react-template/tree/react-family-meals">
                        github
                    </a>
                </li>
                <li></li>
                <li>
                    <a href="https://github.com/chenyuanguang/blend-cli">
                        blend-cli
                    </a>
                </li>
            </ul>
        </footer>
    );
};
