import { forwardRef } from 'react';
import { SvgIcon } from '@platzily-ui/components';

const Search = forwardRef(function Search(props, ref) {
  return (
    <SvgIcon
      ref={ref}
      {...props}
    >
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </SvgIcon>
  );
});

export default Search;