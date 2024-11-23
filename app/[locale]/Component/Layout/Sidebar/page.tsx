import { Tooltip } from '@ui/Tooltip';
import { Grid, Item } from '@ui/Grid';
import styles from '@styles/other.module.css';

import { LangInput } from '@cmp/Lang';

import { Dates, Lang } from './cmp';
import React from 'react';
import { JSX } from 'react/jsx-runtime';

async function Sidebar(): Promise<JSX.Element> {


  return <div className={`${styles.other} ${styles.active}`}>
    <div className={styles.notificationbox}>
        <Dates />
        <Lang />
      </div>
      <div className={`${styles.otherbox} center`}>
        <Tooltip content="Tooltip" position="top">
          <span style={{ cursor: 'pointer' }}>
            <LangInput translate="Tooltip.TooltipHV" /> (top)
          </span>
        </Tooltip>
      </div>
      <Grid cols={2} className={`${styles.otherbox} center`}>
        <Tooltip content="1" position="top">
          <Item>1</Item>
        </Tooltip>
        <Tooltip content="2" position="right">
          <Item>2</Item>
        </Tooltip>
        <Tooltip content="3" position="left">
          <Item>3</Item>
        </Tooltip>
        <Tooltip content="4" position="bottom">
          <Item>4</Item>
        </Tooltip>
      </Grid>
  </div>

}
export default Sidebar;
