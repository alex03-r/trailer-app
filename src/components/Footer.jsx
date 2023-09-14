

export const Footer = () => {
    return (
        <footer className="bg-light  " >
            <div className="container-fluid footer  mt-5 pt-5 px-0 position-relative overlay-top">
                <div className="row justify-content-center mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className=" text-uppercase mb-4  " style={{ letterSpacing: "3px" }}>Get In Touch</h4>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p className="m-0"><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className=" text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Follow Us</h4>
                        <p>anyel@rodriguez.com </p>
                        <p>rodriguez02@ </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className=" text-uppercase mb-4" styles={{ letterSpacing: "3px" }}>Open Hours</h4>
                        <div>
                            <h6 className=" text-uppercase">Monday - Friday</h6>
                            <p>8.00 AM - 8.00 PM</p>
                            <h6 className=" text-uppercase">Saturday - Sunday</h6>
                            <p>2.00 PM - 8.00 PM</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center  border-top mt-4 py-4 px-sm-3 px-md-5" style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}>
                    <p className="mb-2 ">Copyright &copy;  All Rights Reserved </p>
                    <p className="m-0 ">Designed by <strong>Anyel Rodriguez</strong> </p>
                </div>
            </div>
        </footer>
    )


}