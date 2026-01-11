import React from "react";

const ApplyNow = () => {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Apply Now</h1>
      <p className="mb-4 text-center">
        Fill in your details and submit your application. This is dummy content.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Course Interested"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-900 text-white font-bold rounded hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyNow;
