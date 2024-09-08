import React, { useState } from 'react';

const SelectableSlider = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, text: 'Step 1 Content - Select Me', value: 'Option 1' },
    { id: 2, text: 'Step 2 Content - Select Me', value: 'Option 2' },
    { id: 3, text: 'Step 3 Content - Select Me', value: 'Option 3' },
    { id: 4, text: 'Step 4 Content - Select Me', value: 'Option 4' },
  ];

  const handleSelect = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleBack}
          className="text-blue-500 font-bold"
          disabled={currentStep === 1}
        >
          Back
        </button>
        <div className="text-gray-500 font-semibold">
          {currentStep}/{steps.length}
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex justify-center items-center h-40">
        <button
          onClick={handleSelect}
          className="text-center text-lg font-medium text-blue-700"
        >
          {steps[currentStep - 1].text}
        </button>
      </div>
    </div>
  );
};

export default SelectableSlider;
