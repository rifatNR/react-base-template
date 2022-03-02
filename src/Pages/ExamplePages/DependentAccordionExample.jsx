import React, { useState } from 'react'
import Accordion from '../../Components/Accordion';

const DependentAccordionExample = () => {
    const [toggled_accordion, setToggledAccordion] = useState('one_piece')
    return (
        <div className="bg-white p-2 md:p-4 shadow rounded-xl max-w-2xl mx-auto">

            <div>
                <div className="text-xl font-bold py-2 text-gray-700 text-center">Dependent Accordion Example</div>
                <Accordion
                    accordion_type='dependent'
                    isInitOpen={toggled_accordion === 'one_piece' ? true : false}
                    customOnClick={() => setToggledAccordion('one_piece')}
                    header={<div className="text-lg font-semibold py-2 text-gray-700">One Piece</div>}
                    body={
                        <div className="h-[40vh] overflow-scroll">
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Monkey D. Luffy</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Donquixote Doflamingo</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Charlotte Katakuri</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Trafalgar D. Water Law</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Roronoa Zoro</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Marshall D. Teach (Blackbeard)</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Akagami Shanks</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Sir. Crocodile</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Usopp</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Gol D. Roger</div>
                        </div>
                    }
                />
                <Accordion
                    accordion_type='dependent'
                    isInitOpen={toggled_accordion === 'superhero' ? true : false}
                    customOnClick={() => setToggledAccordion('superhero')}
                    header={<div className="text-lg font-semibold py-2 text-gray-700">Superheroes</div>}
                    body={
                        <div className="h-[40vh] overflow-scroll">
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Thor Odinson</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Al Simmons (Spawn)</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Wolverine</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Dr. Strange</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Ghost Rider</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Dr. Doom</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Black Panther</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Galactus</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Darkseid</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Venom</div>
                        </div>
                    }
                />
                <Accordion
                    accordion_type='dependent'
                    isInitOpen={toggled_accordion === 'others' ? true : false}
                    customOnClick={() => setToggledAccordion('others')}
                    header={<div className="text-lg font-semibold py-2 text-gray-700">Others</div>}
                    body={
                        <div className="h-[40vh] overflow-scroll">
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Garou</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Dio</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Gon Freecss</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Itachi</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Isaac Netero</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Kurapika</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Killua</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Jotaro</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Tatsumaki</div>
                            <div className="flex justify-between items-center py-3 px-4 mb-3 cursor-pointer rounded-lg bg-gray-100 text-gray-600 font-bold">Nagato Uzumaki (Pain)</div>
                        </div>
                    }
                />
            </div>
            
        </div>
    )
}

export default DependentAccordionExample