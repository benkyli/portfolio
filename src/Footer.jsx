export default function Footer() {
    const current_year = new Date().getFullYear();
    return (
        <div className='flex justify-center w-full pt-4'>
            @ {current_year} React & Tailwind CSS Portfolio
        </div>
    )
}