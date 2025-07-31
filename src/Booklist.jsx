import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { image } from './assets/assets'


const list = [
    {
        name: "Sports",
        head: "Sports Bikes",
        types: [
            { type: "Supersport", bikeName: "Yamaha R15", ratePerDay: "₹1500/day", engine: "155cc", img: image.Yama },
            { type: "Naked", bikeName: "MT-15", ratePerDay: "₹1400/day", engine: "155cc", img: image.Mt, },
            { type: "Track Bike", bikeName: "KTM RC 390", ratePerDay: "₹1800/day", engine: "373cc", img: image.Rc },
            { type: "Street Fighter", bikeName: "KTM Duke 390", ratePerDay: "₹1750/day", engine: "373cc", img: image.Kduke },
            { type: "Sport Tourer", bikeName: "Suzuki Gixxer SF", ratePerDay: "₹1600/day", engine: "155cc", img: image.Su },
            { type: "Superbike", bikeName: "Ninja 650", ratePerDay: "₹2500/day", engine: "649cc", img: image.yamaha },
            { type: "Mini Sport", bikeName: "Apache RTR 200", ratePerDay: "₹1300/day", engine: "197cc", img: image.Apa },
            { type: "Hyper Naked", bikeName: "Z650", ratePerDay: "₹2400/day", engine: "649cc", img: image.Z },
        ]
    },
    {
        name: "Scooters",
        head: "Scooters",
        types: [
            { type: "Commuter", bikeName: "Honda Activa 6G", ratePerDay: "₹500/day", engine: "110cc", img: image.Honda },
            { type: "Maxi Scooter", bikeName: "Suzuki Burgman", ratePerDay: "₹800/day", engine: "125cc", img: image.Suzuki },
            { type: "Retro Style", bikeName: "Vespa VXL", ratePerDay: "₹850/day", engine: "125cc", img: image.Vespa },
            { type: "Electric", bikeName: "Ola S1", ratePerDay: "₹900/day", engine: "Electric", img: image.Scooter3 },
            { type: "Performance", bikeName: "Aprilia SR 160", ratePerDay: "₹950/day", engine: "160cc", img: image.April },
            { type: "Family", bikeName: "TVS Jupiter", ratePerDay: "₹600/day", engine: "110cc", img: image.Jupi },
            { type: "Compact", bikeName: "Hero Pleasure", ratePerDay: "₹550/day", engine: "110cc", img: image.Hero },
            { type: "Luxury", bikeName: "Vespa SXL 150", ratePerDay: "₹1000/day", engine: "150cc", img: image.Vespaa },
        ]
    },
    {
        name: "Cruisers",
        head: "Cruisers",
        types: [
            { type: "Classic", bikeName: "Royal Enfield Classic 350", ratePerDay: "₹1200/day", engine: "349cc", img: image.Cru5 },
            { type: "Retro", bikeName: "Jawa 42", ratePerDay: "₹1300/day", engine: "293cc", img: image.Cru8 },
            { type: "Bobber", bikeName: "Jawa Perak", ratePerDay: "₹1400/day", engine: "334cc", img: image.Cru6 },
            { type: "Urban", bikeName: "Bajaj Avenger 220", ratePerDay: "₹1100/day", engine: "220cc", img: image.Cru7 },
            { type: "Premium", bikeName: "Royal Enfield Meteor", ratePerDay: "₹1400/day", engine: "349cc", img: image.Cru1 },
            { type: "Highway", bikeName: "Benelli Imperiale", ratePerDay: "₹1600/day", engine: "374cc", img: image.Cru2 },
            { type: "Mini Cruiser", bikeName: "Suzuki Intruder", ratePerDay: "₹1200/day", engine: "155cc", img: image.Cru3 },
            { type: "Heavy Cruiser", bikeName: "Harley Street 750", ratePerDay: "₹3500/day", engine: "749cc", img: image.Cru4 },
        ]
    },
    {
        name: "Electric Bikes",
        head: "Electric Bikes",
        types: [
            { type: "E-Scooter", bikeName: "Ola S1 Pro", ratePerDay: "₹900/day", engine: "Electric", img: image.Elec1},
            { type: "E-Motorcycle", bikeName: "Revolt RV400", ratePerDay: "₹1000/day", engine: "Electric", img: image.Elec2 },
            { type: "Performance E-Bike", bikeName: "Ultraviolette F77", ratePerDay: "₹2500/day", engine: "Electric", img: image.Elec3 },
            { type: "City E-Scooter", bikeName: "Ather 450X", ratePerDay: "₹1000/day", engine: "Electric", img: image.Ebike4 },
            { type: "Budget E-Bike", bikeName: "Hero Electric Optima", ratePerDay: "₹700/day", engine: "Electric", img: image.Elec5 },
            { type: "Long Range", bikeName: "Simple One", ratePerDay: "₹1100/day", engine: "Electric", img: image.Ebike3 },
            { type: "Premium", bikeName: "Bajaj Chetak Electric", ratePerDay: "₹1000/day", engine: "Electric", img: image.Elec7 },
            { type: "Utility", bikeName: "Ampere Magnus", ratePerDay: "₹650/day", engine: "Electric", img: image.Elec8 },
        ]
    },
    {
        name: "Adventure Bikes",
        head: "Adventure Bikes",
        types: [
            { type: "Mid-size ADV", bikeName: "Royal Enfield Himalayan", ratePerDay: "₹1800/day", engine: "411cc", img: image.Ad1 },
            { type: "Large ADV", bikeName: "KTM Adventure 390", ratePerDay: "₹1900/day", engine: "373cc", img: image.Ad2 },
            { type: "Touring ADV", bikeName: "BMW G 310 GS", ratePerDay: "₹2200/day", engine: "313cc", img: image.Ad3 },
            { type: "Premium ADV", bikeName: "Triumph Tiger 660", ratePerDay: "₹3500/day", engine: "660cc", img: image.Ad4 },
            { type: "Lightweight ADV", bikeName: "Hero Xpulse 200", ratePerDay: "₹1300/day", engine: "199cc", img: image.Ad5 },
            { type: "Off-road ADV", bikeName: "Suzuki V-Strom 250", ratePerDay: "₹2000/day", engine: "250cc", img: image.Ad6 },
            { type: "City ADV", bikeName: "Benelli TRK 251", ratePerDay: "₹2100/day", engine: "249cc", img: image.Ad7 },
            { type: "Classic ADV", bikeName: "Himalayan Scram 411", ratePerDay: "₹1700/day", engine: "411cc", img: image.Ad8 },
        ]
    },
    {
        name: "Touring Bikes",
        head: "Touring Bikes",

        types: [
            { type: "Tourer", bikeName: "Bajaj Dominar 400", ratePerDay: "₹1600/day", engine: "373cc", img: image.Tour1 },
            { type: "Classic Tourer", bikeName: "Royal Enfield Thunderbird", ratePerDay: "₹1500/day", engine: "350cc", img: image.Tour2 },
            { type: "Modern Tourer", bikeName: "Honda CB350", ratePerDay: "₹1700/day", engine: "348cc", img: image.Tour3 },
            { type: "Power Tourer", bikeName: "Kawasaki Versys 650", ratePerDay: "₹4000/day", engine: "649cc", img: image.Tour4 },
            { type: "Street Tourer", bikeName: "Jawa 42", ratePerDay: "₹1300/day", engine: "293cc", img: image.Tour5 },
            { type: "Retro Tourer", bikeName: "Benelli Imperiale 400", ratePerDay: "₹1600/day", engine: "374cc", img: image.Tour6 },
            { type: "Cruiser Tourer", bikeName: "Meteor 350", ratePerDay: "₹1400/day", engine: "349cc", img: image.Tour7 },
            { type: "Mini Tourer", bikeName: "Hero Xpulse 200T", ratePerDay: "₹1200/day", engine: "199cc", img: image.Tour8 },
        ]
    },
    {
        name: "Dirt Bikes",
        head: "Dirt Bikes",

        types: [
            { type: "Motocross", bikeName: "Kawasaki KLX 140", ratePerDay: "₹2000/day", engine: "144cc", img: image.Klx},
            { type: "Trail Bike", bikeName: "Hero Xpulse 200", ratePerDay: "₹1300/day", engine: "199cc", img: image.X },
            { type: "Light Dirt", bikeName: "Honda CRF150L", ratePerDay: "₹1900/day", engine: "149cc", img: image.Crf },
            { type: "Compact Motocross", bikeName: "Yamaha WR155R", ratePerDay: "₹2100/day", engine: "155cc", img: image.duke },
            { type: "Off-road Trail", bikeName: "Suzuki DR-Z125", ratePerDay: "₹2200/day", engine: "124cc", img: image.Suzu },
            { type: "Premium Dirt", bikeName: "KTM 250 SX-F", ratePerDay: "₹4000/day", engine: "250cc", img: image.Hus },
            { type: "Enduro", bikeName: "Husqvarna FE 250", ratePerDay: "₹4500/day", engine: "250cc", img: image.Hus },
            { type: "Rally Dirt", bikeName: "Hero Xpulse 200 Rally", ratePerDay: "₹1600/day", engine: "199cc", img: image.Xr },
        ]
    },
    {
        name:"Classic Bikes",
        head: "Classic Bikes",
        types: [
            { type: "Modern Classic", bikeName: "Jawa Forty Two", ratePerDay: "₹1300/day", engine: "293cc", img: image.Jawa },
            { type: "Cafe Racer", bikeName: "Royal Enfield Continental GT", ratePerDay: "₹1700/day", engine: "650cc", img: image.Con },
            { type: "Vintage Style", bikeName: "Benelli Imperiale 400", ratePerDay: "₹1600/day", engine: "374cc", img: image.Imp },
            { type: "British Classic", bikeName: "Royal Enfield Interceptor 650", ratePerDay: "₹1800/day", engine: "650cc", img: image.Clas },
            { type: "Light Retro", bikeName: "Honda H'ness CB350", ratePerDay: "₹1500/day", engine: "348cc", img: image.High },
            { type: "Urban Classic", bikeName: "Jawa Standard", ratePerDay: "₹1400/day", engine: "293cc", img: image.Jawas },
            { type: "Bullet Classic", bikeName: "Royal Enfield Bullet 350", ratePerDay: "₹1300/day", engine: "346cc", img: image.Bullet},
            { type: "Neo Retro", bikeName: "Honda CB300R", ratePerDay: "₹2000/day", engine: "286cc", img: image.clasic },
        ]
    }



]


const Booklist = () => {

    const { Bikename } = useParams();
    const BikeList = list.find((lists) => lists.name === Bikename)

    return (
         <div>
      <div className="container  scroll-hidden" >
        {BikeList ? (
          <>
           <Link to='/Book'>
                    <button className="back-button">←</button>
                  </Link>
            <h2 className="text-center mb-4">{BikeList.head}</h2>
            <h4 className="mb-3">Available Types & Bikes:</h4>
            <div className="row g-4">
              {BikeList.types.map((t, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card h-100 shadow flex-md-row">
                    <div className="col-md-6">
                      <img src={t.img || BikeList.img} className="img-fluid rounded-start h-100 w-100" alt={t.bikeName} />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                      <div className="card-body text-center justify-content-center">
                        <h5 className="card-title fw-bold">{t.bikeName}</h5>
                        <p className="mb-1">{t.type}</p>
                        <p className="mb-1">Engine: {t.engine}</p>
                        <p className="fw-semibold text-primary">{t.ratePerDay}</p>
                        <Link
                          to='/Booking' 
                          className="btn btn-dark w-50 mt-2">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h2 className="text-center text-danger">Bike not found</h2>
        )}
      </div>
    </div>
    )
}

export default Booklist
