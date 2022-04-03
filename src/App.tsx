/* eslint-disable eqeqeq */
import styled from '@emotion/styled';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Paper } from '@mui/material';

import i18next from './i18n';
import SocialNetworkForm from './components/SocialNetwork/SocialNetworkForm';

const CustomPaper = styled(Paper)`
  h3 {
    svg {
      vertical-align: middle;
    }
  }
`;

function App() {
  const [operationType, setOperationType] = useState<'add' | 'edit'>('edit');
  const { t } = i18next;
  const onCancelHandler = () => {
    if (operationType == 'edit') {
      setOperationType('add');
    }
  };
  return (
    <CustomPaper>
      <h3>
        {operationType == 'add' ? <AddIcon /> : <EditIcon />}{' '}
        {t('contact link', { operationType: t(operationType) })}
      </h3>
      <SocialNetworkForm
        operationType={operationType}
        onCancelClick={onCancelHandler}
      />
    </CustomPaper>
  );
}

export default App;
