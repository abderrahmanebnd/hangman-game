import BodyGame from "../ui/BodyGame";
import HeaderGame from "../ui/HeaderGame";

function Game() {
  return (
    <section className="min-h-screen overflow-x-hidden">
      <HeaderGame />
      <BodyGame />
    </section>
  );
}

export default Game;
