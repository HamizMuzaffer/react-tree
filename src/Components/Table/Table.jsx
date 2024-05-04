import React, { memo,useState } from 'react'
import Modal from '../Modal/Modal';


function Table(props) {
    const { Username, Position, Email, Reporting } = props
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-12 py-8 mx-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                        {Username}
                    </th>
                    <td className="px-6 py-4">
                        {Email}
                    </td>
                    <td className="px-6 py-4 ">
                        {Position}
                    </td>
                    <td className="px-6 py-4 ">
                        {Reporting}
                    </td>

                    <td className="px-6 py-4">

                              <Modal />

                        
                    </td>
                </tr>
            </tbody>
        </>)
}

export default memo(Table)