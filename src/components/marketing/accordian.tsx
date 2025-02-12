"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQContactSection = ({id}:{id:string}) => {
  // State to keep track of the open accordion item
  const [openItem, setOpenItem] = useState("item-0");

  const handleAccordionChange = (value: any) => {
    setOpenItem(value || "item-0"); // Ensure at least one item stays open
  };

  return (
    <div id={id} className="text-white py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-left sm:text-center mb-12">Aizu Coin FAQs</h1>

        {/* FAQ Section */}
        <Accordion
          type="single"
          collapsible
          className="space-y-4"
          defaultValue="item-0"
          onValueChange={handleAccordionChange}
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              style={{
                background:
                  openItem === `item-${index}`
                    ? "linear-gradient(180deg, #2D67FE 0%, rgba(45, 103, 254, 0) 50%, #2D67FE 100%)"
                    : "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 100%)",
                padding: "1px",
                borderRadius: "10px",
              }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="rounded-lg"
                style={{
                  background:
                    openItem === `item-${index}`
                      ? "linear-gradient(90deg, rgba(45, 103, 254, 0) 0%, rgba(45, 103, 254, 0.5) 50%, rgba(45, 103, 254, 0) 100%)"
                      : "#000",
                  border: "none",
                }}
              >
                <AccordionTrigger className="text-[18px] sm:text-[24px] font-[700] px-4 py-2 flex justify-between items-center hover:border-none focus:border-none focus:outline-none hover:no-underline focus:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[16px] sm:text-[20px] px-4 py-3 font-[400] rounded-b-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

const faqData = [
  { question: "What is AizuCoin?", answer: "AizuCoin is a decentralized cryptocurrency designed for secure, fast, and efficient transactions. It supports blockchain-based applications like DeFi, NFTs, and smart contracts, providing real-world utility." },
  { question: "How can I buy AizuCoin?", answer: "You can purchase AizuCoin on major cryptocurrency exchanges that support it." },
  { question: "Where can I store AizuCoin?", answer: "You can store AizuCoin in any ERC-20-compatible wallet such as MetaMask or Trust Wallet." },
  { question: "What is the use case of AizuCoin?", answer: "AizuCoin is used for payments, staking, and governance within its ecosystem." },
  { question: "Is AizuCoin a good investment?", answer: "AizuCoin has a burn mechanism to ensure scarcity over time." },
];

export default FAQContactSection;
