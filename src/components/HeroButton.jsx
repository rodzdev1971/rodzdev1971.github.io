// import './herobutton.scss';

export default function HeroButton(){

    function clickHandler(){
        console.log('click')
      }

    return(
        <div className="mb-3">
          <p className="text-center my-4 text-6xl">Saving Lives, One Drop at a Time</p>
          <div className="flex justify-center">
            <div className="py-2 px-4 mr-3 text-[30px] rounded-lg font-semibold text-stone-100 bg-blue-800 hover:bg-blue-600 hover:cursor-pointer" onClick={clickHandler}>Find Blood Now</div>
            <div className="py-2 px-4 mr-3 text-[30px] rounded-lg font-semibold text-stone-100 bg-blue-800  hover:bg-blue-600 hover:cursor-pointer" onClick={clickHandler}>Register as Donor</div>
          </div>
        </div>
    )
}