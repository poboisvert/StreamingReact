import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <div
        onClick={props.onDismiss} // GO back
        className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
      >
        <div className='relative w-auto my-6 mx-auto max-w-sm'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid rounded-t'>
              <h3 className='text-3xl font-semibold'>{props.title}</h3>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <p className='my-4 text-lg leading-relaxed'>{props.content}</p>
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t rounded-b'>
              {props.actions}
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>,
    document.querySelector('#modal')
  );
};

export default Modal;
