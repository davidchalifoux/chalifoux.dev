import Link from "next/link";

export default function NotFound() {
	return (
		<div className="text-center py-32">
			<p className="text-base font-semibold text-yellow-300">404</p>
			<h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
				Page not found.
			</h1>
			<p className="mt-6 text-base leading-7 text-neutral-400">
				Sorry, we couldn’t find the page you’re looking for.
			</p>
			<div className="mt-10 flex items-center justify-center gap-x-6">
				<Link
					href="/"
					className="rounded-md bg-neutral-100 px-3.5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Go back home
				</Link>
			</div>
		</div>
	);
}
