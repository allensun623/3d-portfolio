import { createContext, useContext, useState } from 'react';

const BallStateContext = createContext();
const BallActionContext = createContext();
const ResetBallStateContext = createContext();

export function useBallState() {
  const context = useContext(BallStateContext);
  if (!context) {
    throw new Error('useBallState must be used within a FourStarBallContext');
  }
  return context;
}

export function useBallAction() {
  const context = useContext(BallActionContext);
  if (!context) {
    throw new Error('useBallAction must be used within a FourStarBallContext');
  }
  return context;
}

export function useBallStateReset() {
  return useContext(ResetBallStateContext);
}

export function FourStarBallContext({ children }) {
  const [sendToPortal, setSendToPortal] = useState(false);
  const [chaseDreamJob, setChaseDreamJob] = useState(false);
  const handleSendToPortal = () => setSendToPortal(true);
  const handleChaseDreamJob = () => setChaseDreamJob(true);
  const handleRestBallState = () => {
    setSendToPortal(false);
    setChaseDreamJob(false);
  };
  const ballState = { chaseDreamJob, sendToPortal };
  const ballAction = { handleChaseDreamJob, handleSendToPortal };

  return (
    <BallStateContext.Provider value={ballState}>
      <BallActionContext.Provider value={ballAction}>
        <ResetBallStateContext.Provider value={handleRestBallState}>
          {children}
        </ResetBallStateContext.Provider>
      </BallActionContext.Provider>
    </BallStateContext.Provider>
  );
}
