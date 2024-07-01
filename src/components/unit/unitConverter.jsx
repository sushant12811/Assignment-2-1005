import React, { useState } from 'react';
import { Card } from "@tremor/react";


/**
 * Unit Converter functionality
 * @returns 
 */
const UnitConverter = () => {
  const [fromUnit, setFromUnit] = useState('kg');
  const [toUnit, setToUnit] = useState('lb');
  const [value, setValue] = useState(10);
  const [result, setResult] = useState('');

  const handleConvert = (e) => {
    e.preventDefault();
    let conversionRate = 1;
    if (fromUnit === 'kg' && toUnit === 'lb') {
      conversionRate = 2.20462;
    } else if (fromUnit === 'lb' && toUnit === 'kg') {
      conversionRate = 0.453592;
    }
    const convertedValue = value * conversionRate;
    setResult(convertedValue);
  };

  const handleSwapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setResult('');
  };


  //design and layout for the unit converter
  return (
    <Card className="max-w-3xl" decoration="top">
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="px-4 py-5 bg-gray-500">
      <h2 className="text-center text-2xl font-bold text-white">Unit Converter</h2>
    </div>
    <form onSubmit={handleConvert} className="px-4 py-5">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            From:
          </label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
          >
            <option value="kg">Kilograms (kg)</option>
            <option value="lb">Pounds (lb)</option>
          </select>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            To:
          </label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
          >
            <option value="kg">Kilograms (kg)</option>
            <option value="lb">Pounds (lb)</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Value:
          </label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
          />
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Convert
        </button>

      </div>
      <p className="px-4 py-5 text-center font-bold">Result: {result}</p>

    </form>
    <div className="flex justify-center mb-6">
      <button
        onClick={handleSwapUnits}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Swap Units
      </button>
    </div>
  </div>
</Card>
  );
};

export default UnitConverter;