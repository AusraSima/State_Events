import { cardstexts } from "./cardstexts";
import Card from "./Card";

function FlashCards() {
  return (
    <div className="flex flex-wrap justify-between">
      {cardstexts.map((cardtext) => (
        <Card cardtext={cardtext} key={cardtext.id} />
      ))}
    </div>
  );
}

export default FlashCards;
