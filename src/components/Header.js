const Header = () => {
    return ( 
        <div className='row bg-warning align-items-center'>
            <div className='col-sm-3'>
                <img className='w-25 rounded' src="./images/logo.png" alt="Logo here" />
            </div>
            <div className='col-sm-5'>
                <h4>
                    Nova Real Estate is your realestate partner to stick with...
                </h4>
            </div>
            <div className='col-sm-4'>
                <button className="btn btn-primary mx-3">Login</button>
                <button className="btn btn-success">SignUp</button>
            </div>
        </div>
    );
}
 
export default Header;
