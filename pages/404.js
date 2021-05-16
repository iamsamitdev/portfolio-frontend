import Link from 'next/link';

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-5xl">404 ไม่พบหน้านี้</h1>
            <Link href="/">
                <a className="block mt-10">Back</a>
            </Link>
        </div>
    )
}

export default PageNotFound
