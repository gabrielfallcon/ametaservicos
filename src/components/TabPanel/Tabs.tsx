import React, { ReactElement, useState } from 'react';
import { TabTitle } from './TabTitle';
import styles from './tabPanel.module.scss';

interface ITabs {
  children: ReactElement[] | ReactElement;
}

export const Tabs = ({ children, ...props }: ITabs) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const childElement = Array.isArray(children) ? children : [children]

  return (
    <div className={styles.tabPanelLayout} {...props}>
      <ul className={styles.tabList}>
        {React.Children.map(childElement, (child, i) => (    
          <TabTitle 
            key={i} 
            title={child.props.title} 
            index={i}
            onFocus={selectedTab}
            setSelectedTab={setSelectedTab}
          />   
        ))}
      </ul>
      
      <div className={styles.tabContent}>
        {childElement[selectedTab]} 
      </div>
    </div>
  );
}

