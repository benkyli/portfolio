export default function Footer() {
    const current_year = new Date().getFullYear();
    return (
        <div className='flex justify-center w-full'>
            @ {current_year} React & Tailwind CSS Portfolio
        </div>
    )
}