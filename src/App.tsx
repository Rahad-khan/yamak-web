import React from 'react';
import Heaader from './component/Header/Heaader';
import WritingArea from './component/Home/WritingAss/WritingArea';
import WritingAss from './component/Home/WritingAss/WritingAss';

function App() {
  return (
    <div>
      <Heaader />
      <main className='container-fluid px-lg-5 mt-5'>
        <WritingAss />
        <WritingArea />
      </main>

    </div>
  );
}

export default App;
