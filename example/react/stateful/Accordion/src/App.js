import Accordion from "../component/Accordion";
import AccordionItem from "../component/AccordionItem";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Collapsible accordion</h1>
      <Accordion defaultIndex="1" onItemClick={console.log}>
        <AccordionItem label="A" index="1">
          Lorem ipsum
        </AccordionItem>
        <AccordionItem label="B" index="2">
          Dolor sit amet
        </AccordionItem>
      </Accordion>
    </div>
  );
}
