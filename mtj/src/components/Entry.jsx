export default function Entry({img,country,googleMapsLink,title,dates,text}){
    return(
        <section className="new-travel-post">
            <img className="travel-location-photo" src={img.src} alt={img.alt} />
            <div className="travel-info">
                <div className="geolocation-container">
                    <div className="marker-section">
                        <img src="./marker.png" alt="Location Marker Icon" />
                        <h3>{country}</h3>
                    </div>
                    <a href={googleMapsLink}><h4>View on Google Maps</h4></a>
                </div>
                <h3>{title}</h3>
                <h4>{dates}</h4>
                <p>{text}</p>
            </div>
        </section>
        
    )
} 