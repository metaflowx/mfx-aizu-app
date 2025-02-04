import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FAQContactSection = () => {
  return (
    <div className="min-h-screen  text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-12">Ask Quick Question</h1>

        {/* FAQ Section */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className=" rounded-lg">
              <AccordionTrigger className="text-lg font-medium px-4 py-2 flex justify-between items-center">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm  px-4 py-3 rounded-b-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Contact With Us</h2>
          <form className="space-y-6 max-w-lg mx-auto">
            <Input placeholder="Your Name" className=" border border-[#DDB07F80] text-white" />
            <Input placeholder="Your Email" className=" border border-[#DDB07F80] text-white" />
            <textarea
              placeholder="Enter Your Message..."
              className="w-full  border border-[#DDB07F80] text-white bg-transparent rounded-lg p-3 h-32"
            />
            <div className="text-center">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-medium">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  { question: "What is Itsi Bitsi ($ITSI BITSI)?", answer: "Itsy Bitsy ($ITSI BITSI) is a blockchain-based token designed to power a vibrant ecosystem with features like governance, staking rewards, and utility." },
  { question: "What is the total supply of $ITSI BITSI tokens?", answer: "The total supply of $ITSI BITSI tokens is 1 billion." },
  { question: "How are $ITSI BITSI tokens allocated?", answer: "Tokens are allocated to ecosystem development, staking rewards, marketing, and the team." },
  { question: "What are the main utilities of $ITSI BITSI?", answer: "$ITSI BITSI tokens can be used for governance, staking, and accessing ecosystem features." },
  { question: "Does $ITSI BITSI have a deflationary mechanism?", answer: "Yes, there is a burn mechanism to ensure scarcity over time." },
  { question: "How can I earn $ITSI BITSI tokens?", answer: "You can earn tokens by participating in staking, governance, and promotional events." },
  { question: "Is there a vesting schedule for the team's tokens?", answer: "Yes, team tokens are subject to a vesting schedule to ensure long-term commitment." },
  { question: "Where can I buy $ITSI BITSI tokens?", answer: "Tokens can be bought on supported decentralized and centralized exchanges." }
];

export default FAQContactSection;
