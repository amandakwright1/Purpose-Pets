import "./Pets.css"

export const PetList = () => {
    return (<>

        <h1 className="petShop-header">Pet Shop</h1>
        <div class="row">
        <div class="div1">
        <DogImage/>
        <h2 class name="dogPoints">250 points</h2>
        </div>
        <div class="div2">
        <HamsterImage/>
        <h2 class name="hamsterPoints">100 points</h2>
        </div>
        <div class="div3">
        <HorseImage/>
        <h2 class name="horsePoints">500 points</h2>
        </div>
        </div>
        </>
       
)}

                    
                    
export const DogImage =()=> {

    return <img className="dog" src="/dog.png" alt="dog" />
        

     
}    

export const HamsterImage =()=> {

    return <img className="hamster" src="/hamster.jpg" alt="hamster" />
        

     
}   
export const HorseImage =()=> {

    return <img className="horse" src="/horse.jpg" alt="horse" />
        

     
}    
