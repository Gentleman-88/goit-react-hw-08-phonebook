import React from 'react';
import { Audio } from 'react-loader-spinner';
import css from './LoaderForList.module.css';
const LoaderForList = () => {
  return (
    <div className={css.loader}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="aliceblue"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export { LoaderForList };
