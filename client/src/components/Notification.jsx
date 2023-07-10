import React from 'react';
import {MdOutlineCancel} from 'react-icons/md';

import {Button} from './index';
import {chatData} from '../data/dummy';
import {useStateContext} from '../contexts/ContextProvider';

const Notification = () => {
	const {currentColor} = useStateContext();

	return (
		<div
			className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96  border-1 border-color">
			<div className="flex justify-between items-center">
				<div className="flex gap-3">
					<p className="font-semibold text-lg dark:text-gray-200">Уведомления</p>
					<button type="button"
							className="text-black dark:text-white text-xs rounded p-1 px-2 bg-orange-theme ">3 новых
					</button>
				</div>
					<Button icon={<MdOutlineCancel/>} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl"
							borderRadius="50%"/>
			</div>
			<div className="mt-5 ">
				{chatData?.map((item, index) => (
					<div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
						<img className="rounded-full h-10 w-10" src={item.image} alt={item.message}/>
						<div className="leading-relaxed">
							<p className="font-semibold dark:text-gray-200">{item.message}</p>
							<p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
						</div>
					</div>
				))}
					<Button color="white" bgColor={currentColor} text="Посмотреть все" borderRadius="10px"
							width="full"/>
			</div>
		</div>
	);
};

export default Notification;