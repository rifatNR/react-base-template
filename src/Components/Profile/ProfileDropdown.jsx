/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileDropdown() {
  return (
    <Menu as="div" className="relative text-left h-10 inline-block">
        <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm text-sm font-medium text-gray-700">
            <img className='h-8 w-8 md:h-10 md:w-10 bg-gray-200 border rounded-full' src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" alt="" />
        </Menu.Button>

        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white focus:outline-none">
            <div className="py-1">
                <Menu.Item>
                {({ active }) => (
                    <a 
                    href="/"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Account settings
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="/"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Support
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="/"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    License
                    </a>
                )}
                </Menu.Item>
                <form method="POST" action="#">
                <Menu.Item>
                    {({ active }) => (
                    <button
                        type="submit"
                        className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm'
                        )}
                    >
                        Sign out
                    </button>
                    )}
                </Menu.Item>
                </form>
            </div>
            </Menu.Items>
        </Transition>
    </Menu>
  )
}