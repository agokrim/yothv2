'use client'; // Ensure this component is treated as a Client Component

import React, { useRef, useState } from 'react';

type AccordionItemProps = {
  title: string;
  content: string;
  id: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    if (contentRef.current) {
      contentRef.current.classList.toggle('hidden');
      setIsOpen(!isOpen);
    }
  };

  // Function to convert \n to <br /> tags
  const formatContent = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-2 focus:outline-none flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          &#9660; {/* This is the arrow symbol (▼), rotate it to indicate open/close */}
        </span>
      </button>
      <div ref={contentRef} className="px-2 py-2 hidden">
        <p>{formatContent(content)}</p>
      </div>
    </div>
  );
};

type AccordionProps = {
  items: AccordionItemProps[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="border border-gray-200 rounded-md">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} id={`accordion-item-${index}`} />
      ))}
    </div>
  );
};

export default Accordion;
