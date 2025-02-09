import { useState } from 'react'
// import './App.css'
import Dashboard from './Dashboard/Dashboard';
import Header from './components/Header';
import HeroButton from './components/HeroButton';
import FindBloodForm from './components/FindBloodForm';
import RegisterDonorForm from './components/RegisterDonor';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {

    const [view , setView] = useState(true)

    let show =  
        <div className='flex flex-col h-screen'>
            <div className=''>
                <Header />
            </div>
            <div className=''>
                <HeroButton />
            </div>
            <div className=''>
                <FindBloodForm />
            </div>
            <div className=''>
                <RegisterDonorForm />
            </div>
            <div className=''>
                <AboutUs />
            </div>
            <div className=''>
                <ContactUs />
            </div>
            <div className=''>
                <Footer />
            </div>
        </div>

    function changeViewHandler(){
        setView(prevView => !prevView)
    }

    if(view === true){
        show = <Dashboard />
    }

    return(
        <>  
            <button onClick={changeViewHandler}>Change View</button>
            {show}
        </>
  )
}

export default App
