import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { NoImage } from '../../Utility/Sources';

const ImageModal = ({img, show_modal, setShowModal}) => {
    
    const modalOnClose = () => {
        console.log("Modal closed.");
        setShowModal(false)
    }
    
    return (
        <div>
            <Transition appear show={show_modal} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={modalOnClose}>
                    <div className="min-h-screen px-4 text-center backdrop-filter bg-gray-900 bg-opacity-30 backdrop-blur-sm">
                    <Transition.Child as={Fragment} enter="ease-out duration-100" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>
        
                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="inline-block h-screen align-middle" aria-hidden="true" >&#8203;</span>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >
                        <div className="inline-block w-full max-w-6xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <div className="mt-2">

                                <img src={img} alt="" className='w-full rounded-2xl' onError={(e)=>{e.target.onerror = null; e.target.src=NoImage}}/>
                                
                            </div>
            
                            <div className="mt-4 w-full flex justify-end">
                                <button type="button" onClick={() => setShowModal(false)} className="mr-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none">
                                Close
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default ImageModal
