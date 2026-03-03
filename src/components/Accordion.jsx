import { accordiontexts } from "./accordiontexts";
import QuestionCard from "./QuestionCard";

function Accordion() {
  return (
    <div className="flex flex-col justify-center items-center m-auto p-10 bg-blue-800 rounded-3xl w-250" >
      <h1 className="text-white text-4xl font-bold pb-4">Frequently Asked Questions</h1>
      <div>
        {accordiontexts.map((accordiontext) => (
          <QuestionCard accordiontext={accordiontext} key={accordiontext.id} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
