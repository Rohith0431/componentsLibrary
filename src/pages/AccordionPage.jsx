import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      title: "What is React?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, sequi harum excepturi in nobis sit quasi, enim fugiat, neque voluptate blanditiis numquam. Eius, tempora quisquam impedit dicta nulla quia eum?",
    },
    {
      id: 2,
      title: "Why use React?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, sequi harum excepturi in nobis sit quasi, enim fugiat, neque voluptate blanditiis numquam. Eius, tempora quisquam impedit dicta nulla quia eum?",
    },
    {
      id: 3,
      title: "How do you use React?",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, sequi harum excepturi in nobis sit quasi, enim fugiat, neque voluptate blanditiis numquam. Eius, tempora quisquam impedit dicta nulla quia eum?",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
