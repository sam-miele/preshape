import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Modal, ModalBody, ModalHeader, Text } from 'preshape';
import APIViewer from '../APIViewer/APIViewer';
import { widthMedium } from '../Root';
import docs from './docs';

const getDocItem = (id: string) => {
  for (const i in docs) {
    if (i.toLocaleLowerCase() === id.toLocaleLowerCase()) {
      return docs[i];
    }
  }

  return null;
};

const Documentation = () => {
  const navigate = useNavigate();
  const { id } = useParams<'id'>();

  if (!id) {
    return null;
  }

  const item = getDocItem(id.toLocaleLowerCase());
  const [state, setState] = useState(
    item && item.showcase ? item.showcase.state || {} : {}
  );

  if (!item) {
    navigate('/', { replace: true });
    return null;
  }

  return (
    <Modal
      fullscreen
      margin="x10"
      onClose={() => navigate('/')}
      overlayBackgroundColor="dark-shade-1"
      size="x3"
      visible
    >
      <ModalHeader closeIconSize="2rem" maxWidth={widthMedium}>
        <Text margin="x1" size="x6" strong>
          {item && item.name}
        </Text>
        <Text margin="x1" size="x4">
          {item && item.description}
        </Text>
      </ModalHeader>

      <ModalBody maxWidth={widthMedium}>
        {item.showcase && (
          <Box
            backgroundColor="background-shade-1"
            margin="x6"
            paddingVertical="x2"
          >
            <item.showcase.Component {...state} />
          </Box>
        )}

        {item.apis && (
          <APIViewer
            apis={item.apis}
            onStateChange={setState}
            state={state}
          />
        )}
      </ModalBody>
    </Modal>
  );
};

export default Documentation;
