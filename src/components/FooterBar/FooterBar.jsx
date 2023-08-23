export default function FooterBar() {
    return (
        <>
            <footer>
                <div className="container pt-5 mt-5">
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="d-flex align-items-center">
                                <img src="/logo.png" alt="" height={50} />
                                <span className="ms-3 text-size-40 text-wight-bold">Narsi<span className="color-main"><b>z</b></span></span>
                            </div>
                            <p className="small-text-color mt-4">
                                Buat, pakai, bagi twibon secara mudah dan gratis dari manapun dan kapan pun kamu mau
                            </p>
                        </div>
                        <span className="col-md-4"></span>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mt-5 mt-md-0">
                                    <p className="big-text-color text-weight-bold text-size-18 ms-3">Tentang</p>
                                    <ul className="list-group ">
                                        <li className="list-group-item border border-0">
                                            <a href="#tentang" className="link-underline link-underline-opacity-0 small-text-color">Tentang Kami</a>
                                        </li>
                                        <li className="list-group-item border border-0">
                                        <a href="#fitur" className="link-underline link-underline-opacity-0 small-text-color">Fitur</a>
                                        </li>
                                        <li className="list-group-item border border-0">
                                        <a href="#template" className="link-underline link-underline-opacity-0 small-text-color">Template</a>
                                        </li>
                                        <li className="list-group-item border border-0">
                                        <a href="#coba" className="link-underline link-underline-opacity-0 small-text-color">Coba Gratis</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 text-center text-md-start mt-5 mt-md-0">
                                <p className="big-text-color text-weight-bold text-size-18 ms-3">Kontak</p>
                                    <ul className="list-group ">
                                        <li className="list-group-item border border-0"><span className="color-main">mail</span><br/>mokoindonesia@gmail.com</li>
                                        <li className="list-group-item border border-0"><span className="color-main">github</span><br/>wikomoko </li>
                                        <li className="list-group-item border border-0"><span className="color-main">instagram</span> <br/>@wiko.moko</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr className="w-100"/>
                    <div className="row">
                        <div className="col-md-6">
                           <p className="small-text-color"> NarsiZ@2023</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                        <p className="small-text-color"> created by wikomoko</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}