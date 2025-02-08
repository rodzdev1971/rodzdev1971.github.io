// import './header.scss';

export default function Header(){
    return(
        <header className=''>
          <p className="font-extrabold rounded-sm mb-3 text-6xl text-center text-blue-950">BloodLink</p>
          <nav className="flex justify-center m-auto rounded-sm py-5 bg-blue-950 text-stone-100">
            <a className="text-2xl mx-3 px-2 hover:font-semibold" href="#find-blood">Find Blood</a>
            <a className="text-2xl mx-3 px-2 hover:font-semibold" href="#register-donor">Register as Donor</a>
            <a className="text-2xl mx-3 px-2 hover:font-semibold" href="#about">About</a>
            <a  className="text-2xl mx-3 px-2 hover:font-semibold" href="#contact">Contact</a>
          </nav>
        </header>
    )
}