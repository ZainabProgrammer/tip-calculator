import React, { useState } from "react";

const useCalculate = () => {
  const [bill, setbill] = useState("");
  const [tip, settip] = useState("");
  const [people, setpeople] = useState(0);

  // Define the input values
  const billAmount = parseFloat(bill) || 0; // Replace with your actual bill amount
  const tipPercentage = parseInt(tip) || 0; // Replace with your actual tip percentage
  const numberOfPeople = parseInt(people) || 1; // Replace with your actual number of people

  // Calculate tip amount
  const tipAmount = parseFloat((billAmount * tipPercentage) / 100);

  // Calculate total amount (bill + tip)
  const totalAmount = parseFloat(billAmount + tipAmount);

  // Calculate tip amount per person
  const tipPerPerson = parseFloat(tipAmount / numberOfPeople).toFixed(2);

  // Calculate total amount per person
  const totalPerPerson = parseFloat(totalAmount / numberOfPeople).toFixed(2);

  // Now, you can use these calculated values in your component

  return {
    bill,
    setbill,
    tip,
    settip,
    people,
    setpeople,
    tipPerPerson,
    totalPerPerson,
  };
};

export default useCalculate;
