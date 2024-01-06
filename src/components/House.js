const House = ({ houseInfo }) => {
    if (!houseInfo) {
        return <h4>Loading...</h4>;
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-7 text-secondary">{houseInfo.address}</div>
                <div className="col-sm-5 text-secondary"><b>Price: USD {houseInfo.price}</b></div>
            </div>
            <div className="row">
                <div className="col-sm-7">
                    <img 
                        className="img-fluid" 
                        src={`./images/${houseInfo.photo}`} 
                        alt="House"
                    />
                </div>
                <div className="col-sm-5 text-secondary">
                    <p>{houseInfo.description}</p>
                </div>
            </div>
        </div>
    );
};

export default House;
