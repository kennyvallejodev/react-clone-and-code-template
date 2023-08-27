export function PageNotFound() {
	return (
		<section className={'flex h-screen w-screen'}>
			<div
				className={
					'flex h-full w-[50%] flex-col justify-center bg-red-500 p-8'
				}>
				<h2 className="w-72 rounded bg-white px-2 text-center font-mono text-8xl font-extrabold text-red-500">
					E 404
				</h2>
				<h2 className={'mt-10 font-serif text-7xl font-thin text-white'}>
					Page Not Found
				</h2>
			</div>
			<div
				className={
					'flex h-full w-[50%] flex-col justify-center bg-slate-950 p-8 text-center'
				}>
				<a
					href={'/'}
					className="mx-auto w-3/4 rounded-full bg-slate-900 py-6 text-center font-mono text-4xl font-bold text-white transition-colors duration-300 hover:bg-red-500">
					Back to Home
				</a>
			</div>
		</section>
	);
}
