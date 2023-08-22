import { useEffect, useRef, useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import './EditorPage.css'
import DomToImage from "dom-to-image";
import { saveAs } from "file-saver";

export default function EditorPage() {
    const [siz, setSiz] = useState(1)
    const [sizUi, setSizUi] = useState(0)
    const [posx, setPosx] = useState(0)
    const [posxUi, setPosxUi] = useState(0)
    const [posyUi, setPosyUi] = useState(0)
    const [posy, setPosy] = useState(0)
    const [photo, setPhoto] = useState()
    const [twibon, setTwibon] = useState()
    const [dragging, setDragging] = useState(false)
    const [reduceOpacity, setReduceOpacity] = useState(false)
    const [rotation, setRotation] = useState(0)
    const [rotationUi, setRotationUi] = useState(0)
    const [flipV, setFlipV] = useState(false)
    const [flipH, setFlipH] = useState(false)
    const [mulaiX, setMulaiX] = useState(0)
    const [mulaiY, setMulaiY] = useState(0)


    const inputTwibon = useRef()
    const inputPhoto = useRef()
    const downloadArea = useRef()
    const pad = useRef()
    const photoRef = useRef()

    function onDrag(event) {
        if (!dragging) return;
        console.log('jalan')
        setPosx(parseInt(posx) + event.movementX)
        setPosy(parseInt(posy) + event.movementY)
        console.log(parseInt(posx) + event.movementX)

    };
    function startDrag() {
        setDragging(true);
        setReduceOpacity(true)
        console.log('mulai')
    };
    function endDrag() {
        setDragging(false);
        setReduceOpacity(false)
        console.log('selesai')
    };
    function onTouch(e) {
        setMulaiX(e.changedTouches[0].clientX)
        setMulaiY(e.changedTouches[0].clientY)
    }
    function touchMove(e) {
        let deltaX = e.changedTouches[0].clientX - mulaiX;
        let deltaY = e.changedTouches[0].clientY - mulaiY;
        setPosx(photoRef.current.offsetLeft + deltaX)
        setPosy(photoRef.current.offsetTop + deltaY)
        setMulaiX(e.changedTouches[0].clientX)
        setMulaiY(e.changedTouches[0].clientY)
        console.log(photoRef.current.offsetLeft + deltaX)
    }
    function changePhotoSize(e) {
        if (e.target.value < 0) {
            let pleura = 1 - (-1 * (e.target.value / 10))
            setSiz(pleura)
            setSizUi(e.target.value)

        } else {
            let mekira = 1 + (e.target.value / 10)
            setSiz(mekira)
            setSizUi(e.target.value)
        }
    }
    function changePositionHorizontal(e) {
        setPosx(e.target.value)
        setPosxUi(e.target.value)
    }
    function changePositionVertical(e) {
        setPosy(e.target.value)
        setPosyUi(e.target.value)
    }
    function triggerInputTwibbon() {
        inputTwibon.current.click()
    }
    function triggerInputPhoto() {
        inputPhoto.current.click()
    }
    function showPhoto(input) {
        if (!input.target.files || input.target.files.length == 0) {
            alert('Mohon Pilih Photo')
        } else {
            let file = input.target.files[0];
            let reader = new FileReader();
            reader.onload = function (event) {
                setPhoto(event.target.result)
            };
            reader.readAsDataURL(file);
        }
    }
    function showTwibon(input) {
        if (!input.target.files || input.target.files.length == 0) {
            alert('Mohon Pilih Photo')
        } else {
            let file = input.target.files[0];
            let reader = new FileReader();
            reader.onload = function (event) {
                setTwibon(event.target.result)
            };
            reader.readAsDataURL(file);
        }
    }
    function selectTwibonTemplate(e) {
        setTwibon(e)
    }
    function downloadResult() {
        DomToImage.toBlob(downloadArea.current).then((blob) => window.saveAs(blob, 'twibonAku.png'))
    }
    function changeRotation(e) {
        setRotationUi(e.target.value)
        setRotation(e.target.value * 2)
    }
    return (
        <>
            <NavigationBar />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 "  ></div>
                        <div className="col-lg-4">
                            <div className="container py-5 ">
                                <div id="nih" ref={downloadArea} style={{ touchAction: 'none' }}>
                                    <div className="pad" ref={pad}>
                                        <div className="padder" id="padder" draggable="true">
                                            <img alt="" className="cardx" id="card" src={photo} ref={photoRef} style={{ transform: `scale(${flipV ? '-' : ''}${siz},${flipH ? '-' : ''}${siz})`, left: `${posx}px`, top: `${posy}px`, rotate: `${rotation}deg` }} />
                                        </div>
                                        <img alt="" className={reduceOpacity ? "fore img-fluid opacity-25" : "fore img-fluid"} id="fore" src={twibon} />
                                        <div className="fore bg-transparent w-100 h-100 " onMouseDown={startDrag} onMouseMove={onDrag} onMouseUp={endDrag} onTouchStart={onTouch} onTouchMove={touchMove}></div>
                                    </div>
                                </div>
                                {/* batas */}
                                <div className=" mt-3">
                                    <div className="row">
                                        <div className="col-6 text-md-start">
                                            {/* <button className="btn w-100 btn-info bg-color-main border border-0 " onClick={triggerInputTwibbon}>Pilih Twibon</button> */}
                                            <button className="btn w-100 btn-info bg-color-main border border-0 " data-bs-toggle="modal" data-bs-target="#exampleModal">Pilih Twibon</button>
                                        </div>
                                        <input type='file' ref={inputTwibon} onChange={(e) => showTwibon(e)} id="bac" className="d-none" />
                                        <input type='file' ref={inputPhoto} onChange={(e) => showPhoto(e)} id="pilih" className="d-none" />
                                        <div className="col-6 text-md-end">
                                            <button className="btn w-100 btn-info" onClick={triggerInputPhoto}>Pilih Foto</button>
                                        </div>
                                    </div>
                                </div>
                                {/* batas */}
                                <div className="mt-3">
                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                    Atur Gambar Manual
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                                <div className="accordion-body">
                                                    <label htmlFor="siz">Ukuran</label>
                                                    <input type="range" min="-10" max="10" value={sizUi} className="form-range" id="siz" onChange={(e) => changePhotoSize(e)} />
                                                    <label htmlFor="rotate">Putar</label>
                                                    <input type="range" min="-90" max="90" value={rotationUi} className="form-range" id="rotate" onChange={(e) => changeRotation(e)} />
                                                    <label htmlFor="posx">Menyamping</label>
                                                    <input type="range" min="-100" max="100" value={posxUi} className="form-range" id="posx" onChange={(e) => changePositionHorizontal(e)} />
                                                    <label htmlFor="posy">Menurun</label>
                                                    <input type="range" min="-100" max="100" value={posyUi} className="form-range" id="posy" onChange={(e) => changePositionVertical(e)} />
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <button className="btn btn-info w-100" onClick={() => setFlipV(!flipV)}>Flip V</button>
                                                        </div>
                                                        <div className="col-6">
                                                            <button className="btn btn-info w-100" onClick={() => setFlipH(!flipH)}>Flip H</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* batas */}
                                <div className="mt-3">
                                    <button className="btn w-100 btn-success btn-lg" onClick={downloadResult}>Download Hasil</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 "></div>
                    </div>
                </div>

                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Pilih Template</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <button className="btn btn-info border border-0 bg-color-main w-100" onClick={triggerInputTwibbon} data-bs-dismiss="modal">Upload Template</button>
                                <p className="text-center mt-3">Atau</p>
                                <p>Pilih cotoh template berikut ini:</p>
                                <div className="w-100 btn" onClick={()=>selectTwibonTemplate('/templates/sample1.png')} data-bs-dismiss="modal">
                                    <img src="/templates/sample1.png" className="img-fluid" alt="" />
                                </div>
                                <br />
                                <div className="w-100 btn" onClick={()=>selectTwibonTemplate('/templates/sample2.png')} data-bs-dismiss="modal">
                                    <img src="/templates/sample2.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}