import { useState } from 'react';
import { ReactComponent as LogoIconSVG } from '../../assets/logo-icon.svg';

const states = {
	enabled: 'fill-black',
	disabled: 'fill-orange-500',
} as const;

export function HomePage() {
	const [enabled, setEnabled] = useState<boolean>(false);

	return (
		<section className="flex w-full flex-col content-center justify-center">
			<LogoIconSVG
				className={`mx-auto w-32 ${states[enabled ? 'enabled' : 'disabled']}`}
			/>
			<h1 className={'text-center text-4xl font-bold text-gray-800'}>
				Interact with the button to switch the SVG fill color
			</h1>

			<div className="mx-auto flex w-96 gap-8">
				<button
					className={
						'mt-10 w-2/4 flex-1 rounded-md bg-black p-4 text-white disabled:bg-slate-400'
					}
					disabled={enabled}
					onClick={() => setEnabled(true)}>
					Switch to Black
				</button>
				<button
					className={
						'mt-10 w-2/4 flex-1 rounded-md bg-orange-500 p-4 text-white disabled:bg-orange-300'
					}
					disabled={!enabled}
					onClick={() => setEnabled(false)}>
					Switch to Orange
				</button>
			</div>
		</section>
	);
}
