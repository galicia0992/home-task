import {ProgressBar as Progressbar, Text} from '@ui-kitten/components';
import {useState, useEffect} from 'react';
import React from 'react';

type Props = {
  createPass: any;
};

const SecurePassBar = ({createPass}: Props): JSX.Element => {
  const length: number = 8;
  const tieneMayusculas = /[A-Z]/.test(createPass);
  const tieneMinusculas = /[a-z]/.test(createPass);
  const tieneNumeros = /\d/.test(createPass);
  const tieneCaracteresEspeciales = /[^\w\d]/.test(createPass);
  const [statusBar, setStatusBar] = useState<string>('primary');
  const [securityVal, setSecurityVal] = useState<number>(0);
  const [passSecColor, setPassSecColor] = useState<string>("white")
  const [showPassSec, setShowPassSec] = useState<boolean>(false)
  const [passSecLevel, setPassSecLevel] = useState<string>("")
  useEffect(() => {
    if (createPass.length == 0) {
      setSecurityVal(0);
    } else if (createPass.length < length) {
      setStatusBar('danger');
      setPassSecColor("red")
      setShowPassSec(true)
      setPassSecLevel("Bajo")
      setSecurityVal(0.2);
    } else if (
      !tieneNumeros ||
      !tieneCaracteresEspeciales ||
      !tieneMayusculas ||
      !tieneMinusculas
    ) {
      setStatusBar('warning');
      setPassSecColor("yellow")
      setPassSecLevel("Medio")
      setSecurityVal(0.5);
    } else if (
      tieneNumeros &&
      tieneCaracteresEspeciales &&
      tieneMayusculas &&
      tieneMinusculas &&
      createPass.length > length
    ) {
      setStatusBar('success');
      setPassSecColor("green")
      setPassSecLevel("Alto")
      setSecurityVal(1);
    }
  }, [createPass]);

  return (
    <>
    {
      showPassSec ?<><Progressbar
          progress={securityVal}
          style={{ width: '100%' }}
          size="large"
          status={statusBar} /><Text
            style={{ color: passSecColor, textAlign: "left", width: "100%", fontWeight: "300", fontSize: 12 }}
          >Seguridad de contraseña: {passSecLevel}</Text></>:""
    }
    </>
  );
};

export default SecurePassBar;
