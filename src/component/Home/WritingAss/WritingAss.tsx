import React from 'react';

const WritingAss: React.FC = () => {
    return (
        <section>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='fw-bolder'><h4>Home/Writing Assistant</h4></div>
                <div>
                    <button className='border border-0 bg-primary text-white px-5 py-2'>Save</button>
                    <button className='border border-0 bg-primary ms-4 text-white px-5 py-2 d-none d-lg-inline-block'>Filter</button>
                </div>
            </div>
        </section>
    );
};

export default WritingAss;