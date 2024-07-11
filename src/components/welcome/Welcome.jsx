import WelcomeBallCanvas from './WelcomeBallCanvas';
import WelcomeWorld from './WelcomeWorld';
export default function Welcome({ setEntered }) {
  return (
    <>
      <WelcomeWorld />
      <WelcomeBallCanvas setEntered={setEntered} />
    </>
  );
}
