const Promotion = () => {
    return ( 
        <div className="promotion mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 style={{color: "orange"}}>PROMOTION</h5>
                        <h1 className="fw-bold">We Provide You Best Europe Sightseeing Tours</h1>
                        <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                        <button className='btn btn-primary p-3 text-white' style={{backgroundColor: "#DF6951"}}>View Packages</button>
                    </div>
                    <div className="col-md-6">
                        <img className="w-100" src="./images/eiffel-tower-banner.png" alt="Eiffel Tower Banner" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Promotion;