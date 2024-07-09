import WelcomeWorld from './WelcomeWorld';
import WelcomeBallCanvas from './WelcomeBallCanvas';
export default function Welcome({ setEntered }) {
  return (
    <>
      <WelcomeWorld />
      <WelcomeBallCanvas setEntered={setEntered} />
    </>
  );
}
