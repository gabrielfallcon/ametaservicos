import React from "react";

import styles from './contentBox.module.scss';

export interface IContentBox 
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;    
  direction?: 'left' | 'right'
}

export function ContentBox({children, ...props}: IContentBox)  {
  const { title, direction } = props;
  
  return(
    <div className={styles.contentContainer} {...props}> 
      {title && <h1 className={styles.contentBoxTitle}>{title}</h1>}

      <div className={styles.contentText}>
        {children}
      </div>
    </div>
  )
}