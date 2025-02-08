export default function ContactUs(){
    return(
      <section className='py-10 px-70 max-w-full m-auto' id="contact">
        <p className="text-4xl font-bold underline pb-2">Contact Us</p>
        <form>
          <div className="py-2">
            <input className='bg-blue-100 w-full text-xl rounded-md md-2 h-12' type="text" placeholder="Your Name" />
          </div>
          <div className="py-2">
            <input className='bg-blue-100 w-full text-xl rounded-md md-2 h-12' type="text" placeholder="Your Name" />
          </div>
          <div className="py-2">
            <textarea className='bg-blue-100 w-full text-xl rounded-md md-2 h-20' placeholder="Your Message"></textarea>
          </div>
          <div className="py-2">
            <button type="submit" className="text-stone-50 text-2xl w-full py-4 mt-2 mx-2 rounded-md bg-amber-700 hover:bg-green-700">Send</button>
          </div>
        </form>
    </section>
    )
}