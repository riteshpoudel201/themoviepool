import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Feedback = () => {
    const [value, setValue] = useState('');
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-purple-200 pt-8">
        <h1 className="text-2xl font-bold text-purple-800">Send Feedback</h1>
        <p className="text-sm text-gray-500">Your feedback helps us improve this service</p>
      <form className="w-full sm:w-1/2 h-full flex flex-col items-center justify-center gap-4 px-5 py-6 ">
        <input type="text" className="w-full h-10 bg-white rounded-md p-2 focus:outline-purple-800" placeholder="Name" />
        <input type="email" className="w-full h-10 bg-white rounded-md p-2 focus:outline-purple-800" placeholder="Email" />
        <div className='custom-quill w-full h-full'>
        <ReactQuill theme="snow" value={value} onChange={setValue} className="w-full h-full bg-white rounded-md p-2 " />
        </div>
        <button type="submit" className="w-full h-10 bg-purple-500 text-white rounded-md p-2">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
