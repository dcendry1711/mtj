export default function Entry(){
    return(
        <section className="new-travel-post">
            <img className="travel-location-photo" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji" />
            <div className="travel-info">
                <div className="geolocation-container">
                    <div className="marker-section">
                        <img src="./marker.png" alt="Location Marker Icon" />
                        <h3>JAPAN</h3>
                    </div>
                    <h4>View on Google Maps</h4>
                </div>
                <h3>Mount Fuji</h3>
                <h4>12 Jan, 2023 - 24 Jan, 2023</h4>
                <p>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                    Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </section>
        
    )
}