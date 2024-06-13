import {ProgressBar as Progressbar} from '@ui-kitten/components';
import {useState, useEffect} from 'react';
import React from 'react';

type Props = {
  createPass: any;
};

const ProgressBar = ({createPass}: Props): JSX.Element => {
  const length: number = 8;
  const tieneMayusculas = /[A-Z]/.test(createPass);
  const tieneMinusculas = /[a-z]/.test(createPass);
  const tieneNumeros = /\d/.test(createPass);
  const tieneCaracteresEspeciales = /[^\w\d]/.test(createPass);
  const [statusBar, setStatusBar] = useState<string>('primary');
  const [securityVal, setSecurityVal] = useState<number>(0);
  useEffect(() => {
    if (createPass.length == 0) {
      setSecurityVal(0);
    } else if (createPass.length < length) {
      setStatusBar('danger');
      setSecurityVal(0.2);
    } else if (
      !tieneNumeros ||
      !tieneCaracteresEspeciales ||
      !tieneMayusculas ||
      !tieneMinusculas
    ) {
      setStatusBar('warning');
      setSecurityVal(0.5);
    } else if (
      tieneNumeros &&
      tieneCaracteresEspeciales &&
      tieneMayusculas &&
      tieneMinusculas &&
      createPass.length > length
    ) {
      setStatusBar('success');
      setSecurityVal(1);
    }
  }, [createPass]);

  return (
    <Progressbar
      progress={securityVal}
      style={{width: '100%'}}
      size="large"
      status={statusBar}
    />
  );
};

export default ProgressBar;
