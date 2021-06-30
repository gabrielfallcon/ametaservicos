import React, { ReactElement, ReactNode } from 'react';
import { Tabs } from './Tabs';

interface ITabPanel extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement[] | ReactElement;
}

interface ITab {
  title: string
  children?: ReactNode;
}

export const Tab = ({ children }:ITab) =>  <> {children} </>;

const TabPanel: React.FC<ITabPanel> = ({ children, ...props }) => {
  return (
    <Tabs {...props}>
      {children}
    </Tabs>
  );
}

export default TabPanel;