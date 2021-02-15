import React, { Profiler, useRef } from 'react';

import Unform from './components/Unform'
import ReactForm from './components/ReactForm'
import Formik from './components/Formik'

import Counter from './components/Counter'
import GlobalStyles from './styles/globalStyles'
import { Container } from './AppStyles'

const App: React.FC = () => {
  const UnformCountRef = useRef<any>(null)
  const ReactFormCountRef = useRef<any>(null)
  const formikCountRef = useRef<any>(null)
  return (
    <>
      <GlobalStyles/>
      <Container>
        <div>
          <Profiler id="Unform" onRender={() => UnformCountRef.current?.addCount()}>
            <Unform/>
          </Profiler >
          <Counter ref={UnformCountRef}/>
        </div>

        <div>
          <Profiler id="ReactHookForm" onRender={() => ReactFormCountRef.current?.addCount()}>
            <ReactForm/>
          </Profiler >
          <Counter ref={ReactFormCountRef}/>
        </div>

        <div>
          <Profiler id="Formik" onRender={() => formikCountRef.current?.addCount()}>
            <Formik/>
          </Profiler >
          <Counter ref={formikCountRef}/>
        </div>
      </Container>
    </>
  );
}

export default App;
