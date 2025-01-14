import React, { useEffect, useLayoutEffect, useRef, FC } from 'react';
import ace from 'brace';
import useResizeObserver from '../hooks/useResizeObserver';
import Box, { BoxProps } from '../Box/Box';
import './Editor.css';

// Define has no definition.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const define = (ace as any).define as (
  module: string,
  callback: (require: any, exports: any) => void
) => void;

export type TypeEditorLanguage =
  | 'css'
  | 'glsl'
  | 'html'
  | 'javascript'
  | 'json'
  | 'jsx'
  | 'markdown'
  | 'svg'
  | 'tsx'
  | 'typescript';

define('ace/theme/preshape', (_, exports) => {
  exports.isDark = true;
  exports.cssClass = 'ace-preshape';
});

/**
 * Code editing component powered by Ace Editor.
 */
export interface EditorProps extends BoxProps {
  /**
   * Language of the content to be edited. What ever language is
   * set here the matching Ace mode needs to be imported. For example.
   *
   * import 'ace/mode/javascript';
   **/
  language: TypeEditorLanguage;
  /** Callback for when the value changes */
  onChange?: (value: string) => void;
  /** Value for the content to be edited */
  value: string;
}

const Editor: FC<EditorProps> = (props) => {
  const { language, onChange, value, ...rest } = props;
  const ref = useRef<HTMLDivElement>(null);
  const refEditor = useRef<ace.Editor>();
  const [size, refContainer] = useResizeObserver();

  useLayoutEffect(() => {
    if (ref.current) {
      refEditor.current = ace.edit(ref.current);
      refEditor.current.$blockScrolling = Infinity;
      refEditor.current.setOptions({ tabSize: 2, useSoftTabs: true });
      refEditor.current.setShowFoldWidgets(false);
      refEditor.current.setShowPrintMargin(false);
      refEditor.current.setTheme('ace/theme/preshape');
      refEditor.current?.getSession().setMode(`ace/mode/${language}`);
      refEditor.current.getSession().setUndoManager(new ace.UndoManager());
    }
  }, []);

  useEffect(() => {
    refEditor.current?.resize();
  }, [size]);

  useEffect(() => {
    if (value !== refEditor.current?.getValue()) {
      refEditor.current?.setValue(value, 1);
    }
  }, [value]);

  useEffect(() => {
    refEditor.current?.getSession().setMode(`ace/mode/${language}`);
  }, [language]);

  useEffect(() => {
    const handleChange = () => {
      if (onChange) {
        onChange(refEditor.current?.getValue() || '');
      }
    };

    if (refEditor.current) {
      refEditor.current.on('change', handleChange);
    }

    return () => {
      if (refEditor.current) {
        refEditor.current.off('change', handleChange);
      }
    };
  }, [onChange]);

  return (
    <Box {...rest} className="Editor" container grow ref={refContainer}>
      <Box absolute="edge-to-edge" flex="vertical">
        <Box grow ref={ref} />
      </Box>
    </Box>
  );
};

export default Editor;
