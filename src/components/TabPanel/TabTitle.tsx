import React, { useCallback } from 'react';
import styles from './tabPanel.module.scss';

export interface ITabTitle {
  title: string;
  index: number;
  onFocus: number;
  setSelectedTab: (index: number) => void;
}

export const TabTitle = ({ title, setSelectedTab, index, onFocus }: ITabTitle) => {
  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index]);

  const styleActiveTabItem = {
    border: '1px solid #E5E5E5',
    borderBottom: 0,
    boxShadow: '0 3px #FFFFFF',
  }
  const styleActiveTabTitle = {
    fontWeight: 700,
    transition: '175ms'
  }
  return (
    <li 
      className={`${styles.tabItem} ${onFocus === index && styles.tabItemActive}`}
      onClick={onClick}
    >
      <h2
        className={`${styles.tabTitle} ${onFocus === index && styles.tabTitleActive}`}
      >
        {title}
      </h2>
    </li>
  );
}
