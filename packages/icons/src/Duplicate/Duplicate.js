import { forwardRef } from 'react';
import { SvgIcon } from '@platzily-ui/components';

const Duplicate = forwardRef(function Duplicate(props, ref) {
  return (
    <SvgIcon
      ref={ref}
      {...props}
    >
      <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
      <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
    </SvgIcon>
  );
});

export default Duplicate;
