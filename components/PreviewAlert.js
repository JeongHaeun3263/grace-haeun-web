import Link from 'next/link';

const PreviewAlert = () => {
	return (
		<div className='preview'>
			You are in preview mode! <Link href='/api/exit-preview'>Leave</Link>
		</div>
	);
};

export default PreviewAlert;
