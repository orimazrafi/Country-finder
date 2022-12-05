import { memo } from 'react';

import { Spinner, SpinnerWrapper } from '../elements';

const LoadingSpinner: React.FC<{ margin?: string }> = ({ margin }) => {
  return (
    <SpinnerWrapper>
      <Spinner margin={margin} />
    </SpinnerWrapper>
  );
};

export default memo(LoadingSpinner);
