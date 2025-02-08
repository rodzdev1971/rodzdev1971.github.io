export default function FindBloodForm(){
    return(
      <section className='py-5 px-70 max-w-full m-auto' id="find-blood">
      <p className="text-4xl font-bold pb-2">Find Blood</p>
      <form className="flex flex-col">
        <div className="py-2">
          <label className="text-2xl font-semibold">Blood Type:</label>
        </div>
        <div className="py-2">
          <select id="blood-type" className="bg-blue-100 w-full h-12 text-xl rounded-md mx-2">
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
        </div>
        <div className="py-2">
          <label className="text-2xl font-semibold">Location:</label>
        </div>
        <div className="py-2">
          <input className="bg-blue-100 w-full h-12 text-xl rounded-md mx-2" type="text" id="location" placeholder="Enter City or Zip Code" />
        </div>
        <div className="py-2">
          <label className="text-2xl">Urgency:</label>
        </div>
        
        <div className="py-2">
          <select id="urgency" className="bg-blue-100 w-full h-12 text-xl rounded-md mx-2">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
        </div>
        <div className="py-2"> 
          <button type="submit" className="text-stone-50 text-2xl bg-amber-700 w-full hover:bg-green-700 py-4 mt-2 mx-2 rounded-md">Search</button>
        </div>
        
      </form>
    </section>
    )
}