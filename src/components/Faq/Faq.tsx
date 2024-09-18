import React, { useState } from 'react'

const Faq: React.FC = () => {
	const [openItem, setOpenItem] = useState<number | null>(null)

	const handleToggle = (item: number) => {
		setOpenItem(openItem === item ? null : item)
	}

	return (
		<div className='mb-10 '>
			<div id='accordion-collapse' data-accordion='collapse'>
				<h2 id='accordion-collapse-heading-1'>
					<button
						type='button'
						className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
						data-accordion-target='#accordion-collapse-body-1'
						aria-expanded={openItem === 1}
						aria-controls='accordion-collapse-body-1'
						onClick={() => handleToggle(1)}
					>
						<span className='text-2xl'>
                        InnoX biznes-inkubator akseleratsiya dasturi nima?
						</span>
						<svg
							data-accordion-icon=''
							className={`w-3 h-3 shrink-0 ${
								openItem === 1 ? 'rotate-180' : ''
							}`}
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5L5 1 1 5'
							/>
						</svg>
					</button>
				</h2>
				<div
					id='accordion-collapse-body-1'
					className={`${openItem === 1 ? '' : 'hidden'}`}
					aria-labelledby='accordion-collapse-heading-1'
				>
					<div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
						<p className='mb-2 text-gray-500 dark:text-gray-400 text-lg'>
                        InnoX — bu 18-35 yoshdagi yoshlarni innovatsion va tadqiqot faoliyatiga jalb qilish, ularga o‘z intellektual salohiyatlarini namoyon etish uchun imkoniyat yaratishga qaratilgan akseleratsiya dasturi. U Sirdaryo Yoshlar Texnoparki qoshida tashkil etilgan.
						</p>
					</div>
				</div>

				<h2 id='accordion-collapse-heading-2'>
					<button
						type='button'
						className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
						data-accordion-target='#accordion-collapse-body-2'
						aria-expanded={openItem === 2}
						aria-controls='accordion-collapse-body-2'
						onClick={() => handleToggle(2)}
					>
						<span className='text-2xl'>
                        InnoX dasturining maqsadi nima?
						</span>
						<svg
							data-accordion-icon=''
							className={`w-3 h-3 shrink-0 ${
								openItem === 2 ? 'rotate-180' : ''
							}`}
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5L5 1 1 5'
							/>
						</svg>
					</button>
				</h2>
				<div
					id='accordion-collapse-body-2'
					className={`${openItem === 2 ? '' : 'hidden'}`}
					aria-labelledby='accordion-collapse-heading-2'
				>
					<div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700'>
						<p className='mb-2 text-gray-500 dark:text-gray-400 text-lg'>
                        Dasturning maqsadi yoshlarning tahliliy fikrlashini rivojlantirish, ilmiy-tadqiqot va innovatsion loyihalarga keng jalb qilish, shuningdek, iqtidorli va tashabbuskor yoshlar uchun o‘z g‘oyalarini hayotga tatbiq etish imkoniyatlarini yaratishdan iborat.

						</p>
					</div>
				</div>

				<h2 id='accordion-collapse-heading-3'>
					<button
						type='button'
						className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
						data-accordion-target='#accordion-collapse-body-3'
						aria-expanded={openItem === 3}
						aria-controls='accordion-collapse-body-3'
						onClick={() => handleToggle(3)}
					>
						<span className='text-2xl'>Kimlar InnoX dasturida ishtirok etishi mumkin?</span>
						<svg
							data-accordion-icon=''
							className={`w-3 h-3 shrink-0 ${
								openItem === 3 ? 'rotate-180' : ''
							}`}
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5L5 1 1 5'
							/>
						</svg>
					</button>
				</h2>
				<div
					id='accordion-collapse-body-3'
					className={`${openItem === 3 ? '' : 'hidden'}`}
					aria-labelledby='accordion-collapse-heading-3'
				>
					<div className='p-5 border border-t-0 border-gray-200 dark:border-gray-700'>
						<p className='mb-2 text-gray-500 dark:text-gray-400 text-lg'>
                        Dasturda 18 yoshdan 35 yoshgacha bo‘lgan O‘zbekiston fuqarolari ishtirok etishi mumkin.
						</p>
					</div>
				</div>

				<h2 id='accordion-collapse-heading-4'>
					<button
						type='button'
						className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
						data-accordion-target='#accordion-collapse-body-3'
						aria-expanded={openItem === 4}
						aria-controls='accordion-collapse-body-3'
						onClick={() => handleToggle(4)}
					>
						<span className='text-2xl'>
						Dasturda qanday turdagi loyihalar qabul qilinadi?
						</span>
						<svg
							data-accordion-icon=''
							className={`w-3 h-3 shrink-0 ${
								openItem === 3 ? 'rotate-180' : ''
							}`}
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5L5 1 1 5'
							/>
						</svg>
					</button>
				</h2>
				<div
					id='accordion-collapse-body-3'
					className={`${openItem === 4 ? '' : 'hidden'}`}
					aria-labelledby='accordion-collapse-heading-3'
				>
					<div className='p-5 border border-t-0 border-gray-200 dark:border-gray-700'>
						<p className='mb-2 text-gray-500 dark:text-gray-400 text-lg'>
                        InnoX dasturi doirasida innovatsion va texnologik yechimlarga asoslangan loyihalar qabul qilinadi. Loyihalar fan, texnika, axborot texnologiyalari va boshqa sohalarda bo‘lishi mumkin.
						</p>
					</div>
				</div>

				<h2 id='accordion-collapse-heading-5'>
					<button
						type='button'
						className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
						data-accordion-target='#accordion-collapse-body-3'
						aria-expanded={openItem === 5}
						aria-controls='accordion-collapse-body-3'
						onClick={() => handleToggle(5)}
					>
						<span className='text-2xl'>
                        Loyihani topshirish uchun qanday talablarga amal qilish kerak?
						</span>
						<svg
							data-accordion-icon=''
							className={`w-3 h-3 shrink-0 ${
								openItem === 5 ? 'rotate-180' : ''
							}`}
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5L5 1 1 5'
							/>
						</svg>
					</button>
				</h2>
				<div
					id='accordion-collapse-body-3'
					className={`${openItem === 5 ? '' : 'hidden'}`}
					aria-labelledby='accordion-collapse-heading-3'
				>
					<div className='p-5 border border-t-0 border-gray-200 dark:border-gray-700'>
						<p className='mb-2 text-gray-500 dark:text-gray-400 text-lg'>
                        Loyihalar innovatsion bo‘lishi, ijtimoiy yoki iqtisodiy muammolarni yechishga qaratilgan bo‘lishi kerak. Shuningdek, loyiha O‘zbekistonning rivojlanish strategiyasiga mos kelishi lozim.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Faq