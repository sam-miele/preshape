import React from 'react';
import { getByModuleAndName } from './documentation';
import { JSONOutput } from 'typedoc';
import { APIRecord, RendererContainer } from './Types';
import APIViewerItem from './APIViewerItem';

interface Props extends RendererContainer {
  apis: APIRecord[];
}

const ApiViewer = (props: Props) => {
  const { apis, onStateChange, state } = props;

  return (
    <>
      {apis
        .map(
          (api) =>
            [api, getByModuleAndName(api.name)] as [
              APIRecord,
              JSONOutput.Reflection
            ]
        )
        .filter(([, _]) => _)
        .map(([{ name, rename }, exprt]) => (
          <APIViewerItem
            {...exprt}
            key={name}
            name={rename || name}
            onStateChange={(change) =>
              onStateChange({ ...state, [rename || name]: change })
            }
            state={state && state[rename || name]}
          />
        ))}
    </>
  );
};

export default ApiViewer;
