import { useState } from 'react';

export default function DonationForm() {
  const [amount, setAmount] = useState(4);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 text-center">
          <p className="text-xl font-bold">Buy the developer's a Coffee?</p>
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={amount}
            onChange={handleChange}
            className="w-full border rounded-lg py-2 px-3 text-gray-700"
            placeholder="$"
          />
        </div>
        <div className="text-center">
          <button
            className="border-4 relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            type="submit"
          >
            Donate
            <span className="z-50 absolute right-48 top-5 w-6 h-1 bg-white"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
