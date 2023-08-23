import './LandingPage.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export default function LandingPage() {

    useEffect(() => {
        Aos.init()
    }, [])
    

    return (
        <>
            <section id='tentang'>
                <div className="container mt-5">
                    <div className="row pb-5 mb-5">
                    <div className="col-md-6 text-center d-md-none" data-aos="fade-down">
                            <img src="/mascot.svg" className="img-fluid" />
                        </div>
                        <div className="col-md-6 " data-aos="fade-right">
                            <p  className="text-size-74 text-weight-bold line-height-88 big-text-color d-none d-md-none d-lg-block">Jadi <span className='color-main'>Narsiz</span><br /> itu keren lho.</p>
                            <p  className="text-size-40 text-weight-bold big-text-color d-none d-md-block d-lg-none">Jadi <span className='color-main'>Narsiz</span><br /> itu keren lho.</p>
                            <p  className="text-size-40 text-weight-bold big-text-color d-md-none text-center">Jadi <span className='color-main'>Narsiz</span><br /> itu keren lho.</p>
                            <p className='pe-lg-5 small-text-color my-4 text-size-18 text-center text-md-start'>
                                Kamu pusing atau bingung bikin twibon? coba Narsiz aja. Gratis, praktis, dan bisa sharing juga ke temen kamu lho. Tunggu apa lagi...ayo coba sekarang
                            </p>
                            <div className='text-center text-md-start'>
                            <button className="btn btn-danger border border-0 bg-color-main ">
                                <Link to={'/editor'} className='text-white link-underline link-underline-opacity-0'>Coba Sekarang</Link>
                            </button>
                            </div>
                        </div>

                        <div className="col-md-6 text-center d-none d-md-block" data-aos="fade-left">
                            <img src="/mascot.svg" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-color-secondary py-5 mb-5' id='fitur'>
                <div className="container py-5" >
                    <p className='color-main mt-3 text-weight-medium text-size-18 text-center'>Apa si lebihnya kami ?</p>
                    <p className='big-text-color text-center text-weight-bold text-size-40 mb-5 d-none d-md-none d-lg-block'>Gratis, Mudah, & Berbagi</p>
                    <p className='big-text-color text-center text-weight-bold text-size-40 mb-5 d-none d-md-block d-lg-none'>Gratis, Mudah, & Berbagi</p>
                    <p className='big-text-color text-center text-weight-bold text-size-32 mb-5 d-md-none'>Gratis, Mudah, & Berbagi</p>
                    <div className="row mt-5 mb-5">
                        <div className="col-md-4 d-flex alig-items-strech mt-5" data-aos="fade-up">
                            <div className="card border border-0 rounded-4 hover text-center p-5">
                                <img src="/free.svg" height={60} className='text-center' />
                                <p className='mt-4 big-text-color text-weight-medium text-size-22'>Gratis</p>
                                <p className='small-text-color text-weight-regular text-size-14'>
                                    Buat twibon kamu secara Gratis di Narsiz kuy
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex alig-items-strech mt-5" data-aos="fade-up">
                            <div className="card border border-0 rounded-4 hover text-center p-5">
                                <img src="/easy.svg" height={60} className='text-center' />
                                <p className='mt-4 big-text-color text-weight-medium text-size-22'>Mudah</p>
                                <p className='small-text-color text-weight-regular text-size-14'>
                                    Gak perlu susah-susah buat twibon, di Narsiz buat twibon praktis kok
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex alig-items-strech mt-5" data-aos="fade-up">
                            <div className="card border border-0 rounded-4 hover text-center p-5">
                                <img src="/share.svg" height={60} className='text-center' />
                                <p className='mt-4 big-text-color text-weight-medium text-size-22'>Sharing</p>
                                <p className='small-text-color text-weight-regular text-size-14'>
                                    Kamu bisa share twibon template kamu cukup pakai link aja kok, gk perlu suruh download hehe
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='template'>
                <div className="container py-5 mb-5">
                    <div className="d-flex justify-content-between align-items-center my-4" >
                        <span className=' big-text-color text-weight-bold text-size-40 d-none d-md-block'>Lagi Trending Nih...</span>
                        <span className=' big-text-color text-weight-bold text-size-22 d-md-none'>Lagi Trending Nih...</span>
                        <Link to="/editor" className=' text-weight-regular text-size-18'>lihat lainnya </Link>
                    </div>

                    <div className="row" data-aos="fade-down">
                        <div className="col-md-3 mt-5 mt-md-2">
                            <div className="card">
                                <img src="/templates/sample1.png" className="card-img-top img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">Lebaranz</h5>
                                    <small className="card-text color-main">by Amelia </small>
                                    <p className="card-text text-truncate">"Selamat Lebaran Semuanya"</p>
                                    <button className="btn btn-info border border-0 bg-color-main text-white">
                                        <Link to={'/editor'} className='text-white link-underline link-underline-opacity-0'>
                                            Coba donk
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5 mt-md-2">
                            <div className="card">
                                <img src="/templates/sample2.png" className="card-img-top img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">Ngambiz</h5>
                                    <small className="card-text color-main">by Sarah </small>
                                    <p className="card-text text-truncate">"Semangat yuk...raih masa depan"</p>
                                    <button className="btn btn-info border border-0 bg-color-main text-white">
                                        <Link to={'/editor'} className='text-white link-underline link-underline-opacity-0'>
                                            Coba donk
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5 mt-md-2">
                            <div className="card">
                                <img src="/templates/sample3.png" className="card-img-top img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">Merdeka</h5>
                                    <small className="card-text color-main">by Nadia </small>
                                    <p className="card-text text-truncate">"Sekali merdeka...tetap merdeka"</p>
                                    <button className="btn btn-info border border-0 bg-color-main text-white">
                                        <Link to={'/editor'} className='text-white link-underline link-underline-opacity-0'>
                                            Coba donk
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-5 mt-md-2">
                            <div className="card">
                                <img src="/templates/sample4.png" className="card-img-top img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">Monsta</h5>
                                    <small className="card-text color-main">by Natasha </small>
                                    <p className="card-text text-truncate">"Whoaaaaa... Iam monsta, i will eat you"</p>
                                    <button className="btn btn-info border border-0 bg-color-main text-white">
                                        <Link to={'/editor'} className='text-white link-underline link-underline-opacity-0'>
                                            Coba donk
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-md-5'>
                <div className="container my-md-5">
                    <div className="row">
                        <div className="col-md-6 p-md-5 p-4" data-aos="fade-right">
                            <img src="/mascot_create.svg" alt="" className='img-fluid ' />
                        </div>
                        <div className="col-md-6 p-md-5 p-4" data-aos="fade-left">
                            <p className='text-size-74 text-weight-bold line-height-88 big-text-color d-none d-md-none d-lg-block'><span className='color-main'>Gak</span> nemu yang kamu  <span className='color-main'> suka?</span></p>
                            <p className='text-size-40 text-weight-bold  big-text-color d-none d-md-block d-lg-none'><span className='color-main'>Gak</span> nemu yang kamu  <span className='color-main'> suka?</span></p>
                            <p className='text-size-32 text-center text-weight-bold big-text-color d-md-none'><span className='color-main'>Gak</span> nemu yang kamu <span className='color-main'> suka?</span></p>
                            <p className='pe-lg-5 small-text-color my-4 text-size-18'>Gak ada yang kamu suka? tenang, kamu bisa buat template sendiri kok dan nanti hasilnya bisa kamu share biar temenmu bisa pake templatenya juga tanpa repot</p>
                           <div className='text-center text-md-start'>
                           <button className="btn btn-danger border border-0 bg-color-main">
                                <Link to={'/editor'} className='text-white link-underline link-underline-opacity-0'>
                                    Gasskeun Bikin
                                </Link>
                            </button>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5 bg-color-secondary' id='coba'>
                <div className="container my-5" data-aos="fade-right">
                    <div className="row">
                    <div className="col-md-6  d-md-none" data-aos="fade-left">
                            <img src="/mascot_join.svg" alt="" className='img-fluid ' />
                        </div>
                        <div className="col-md-6 p-5 d-flex flex-column align-items-start justify-content-center">
                            <p className='text-size-74 text-weight-bold line-height-88 big-text-color d-none d-md-none d-lg-block'>Kamu masih <span className='color-main'>ragu</span> nih ?</p>
                            <p className='text-size-40 text-weight-bold big-text-color d-none d-md-block d-lg-none'>Kamu masih <span className='color-main'>ragu</span> nih ?</p>
                            <p className='text-size-32 text-center text-weight-bold big-text-color d-md-none'>Kamu masih <span className='color-main'>ragu</span> nih ?</p>
                            <p className='pe-lg-5 small-text-color my-4 text-size-22'>
                                Tunggu apa lagi nih guys?... ayo coba dulu aja sekarang gk perlu login jg bisa lho. Nanti kalau mau fitur leih baru login, btw ini <span className='color-main'> gratis 100% </span> kok
                            </p>
                            <div className='text-center text-md-start'>
                                <button className="btn btn-danger border border-0 bg-color-main">
                                    <Link to={'/editor'} className='text-white link-underline link-underline-opacity-0'>
                                        Coba Ah
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 p-5 d-none d-md-block" data-aos="fade-left">
                            <img src="/mascot_join.svg" alt="" className='img-fluid ' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}