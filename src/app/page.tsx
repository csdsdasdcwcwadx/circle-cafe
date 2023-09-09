'use client';

import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { settesting } from '@/redux/actions';

export default function Home() {
  const redux = useSelector((store: RootState) => store.testing);
  const dispatch = useDispatch();
  console.log(redux)
  return (
    <div className={styles.home}>
      <h1>this is a home page</h1>
      {/* <button onClick={() => {
        dispatch(settesting('123123'));
      }}>click me</button> */}
    </div>

  )
}
