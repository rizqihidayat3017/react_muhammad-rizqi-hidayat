import { useRef, useState } from "react";
import './form.css'


const FormDaftar = () => {
    const dataForm = {
        nama: "",
        email: "",
        noHandphone: "",
        backEnd: "",
        frontEnd: "",
        fullStack: "",
    };
    const dataDesc = {
        harapan: ""
    }
    const baseError = {
        nama: "",
        email: "",
        noHandphone: "",
        backEnd: "",
        frontEnd: "",
        fullStack: "",
        harapan: "",
    }
    const [data, setData] = useState(dataForm);
    const [deskripsi, setDeskripsi] = useState(dataDesc)

    const suratKesungguhan = useRef(null)
    const [pilihanKelas, setpilihanKelas] = useState('')
    const [error, setError] = useState(baseError)

    const regex = /^[a-z A-Z]+$/;
    const regexNum = /^.{9,14}$/
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if (name == "nama") {
            if (regex.test(value)) {
                setError({ ...error, nama: "" })
            } else {
                setError({ ...error, nama: "Nama Lengkap Harus Berupa Huruf" })
            }
        }
        if (name == "email") {
            if (regexEmail.test(value)) {
                setError({ ...error, email: "" })
            } else {
                setError({ ...error, email: "Email tidak sesuai" })
            }
        }
        if (name == "noHandphone") {
            if (regexNum.test(value)) {
                setError({ ...error, noHandphone: "" })
            } else {
                setError({ ...error, noHandphone: "Harus 9-14 karakter" })
            }
        }

        setData({
            ...data,
            [name]: value
        })
    }
    const resetData = () => {
        setData(dataForm);
        setDeskripsi(dataDesc);

        setError('');
    }
    const handleSubmit = (event) => {
        if (error.nama == "" && error.email == "" && error.noHandphone == "") {
            alert(`Data dari " ${data.nama} berhasil diterima`)
            return true;
        } else {
            alert("Data pendaftar Tidak Sesuai")

        }
        event.preventDefault();

    }

    return (
        <>
            <div className="container">
                <h1 className="title">Pendaftaran Peserta Coding Bootcamp</h1>
                <form onSubmit={handleSubmit}>
                    <div className='distance'>
                        <label htmlFor="formGroupExampleInput">Nama Lengkap</label>
                        <input
                            type="text"
                            className="inputnama"
                            id="formGroupExampleInput"
                            placeholder="Masukkan nama anda..."
                            name="nama"
                            onChange={handleInput}
                            value={data.nama}
                            required
                        />
                        <p style={{ color: "red" }}>{error.nama ? error.nama : ""}</p>
                    </div>
                    <div className='distance'>
                        <label htmlFor="formGroupExampleInput2">Email</label>
                        <input
                            type="email"
                            className="inputnama"
                            id="formGroupExampleInput2"
                            placeholder="Masukkan email anda..."
                            name="email"
                            onChange={handleInput}
                            value={data.email}
                            required
                        />
                    </div>
                    <p style={{ color: "red" }}>{error.email ? error.email : ""}</p>

                    <div className='distance'>
                        <label htmlFor="formGroupExampleInput2">No Handphone</label>
                        <input
                            type="text"
                            className="inputnama"
                            id="formGroupExampleInput2"
                            placeholder="Masukkan Nomor HP anda..."
                            name="noHandphone"
                            onChange={handleInput}
                            value={data.noHandphone}
                            required
                        />
                    </div>
                    <p style={{ color: "red" }}>{error.noHandphone ? error.noHandphone : ""}</p>

                    <div className='distance'>
                        <label htmlFor="formGroupExampleInput2" >
                            Latar Belakang Pendidikan
                        </label>
                        <br />
                        <div>
                            <input
                                type="radio"
                                id="customRadio1"
                                name="customRadio"
                                onChange={handleInput}
                                value={data.backIT}
                                required
                            />
                            <label
                                htmlFor="customRadio1"
                                name="backIT"
                            >
                                IT
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="customRadio2"
                                name="customRadio"
                            />
                            <label
                                htmlFor="customRadio2"
                                name="backNoIT"
                                value={data.backNonIT}

                            >
                                Non IT
                            </label>
                        </div>
                    </div>

                    <div className="distance">
                        <label
                            className='distance'
                            htmlFor="pilKelas"
                            name="pilihanKelas"
                        >
                            Kelas Coding yang Dipilih
                        </label>
                        <br />
                        <select
                            className="inputan"
                            id="pilKelas"
                            aria-label="Default select example"
                            value={pilihanKelas}
                            onChange={e => setpilihanKelas(e.target.value)}
                            required
                        >
                            <option value="" defaultChecked>
                                Pilih salah satu program
                            </option>
                            <option value="backEnd">
                                Coding Backend with Golang
                            </option>
                            <option value="frontEnd">Coding Frontend with ReactJS</option>
                            <option value="fullStack">Fullstack Developer</option>
                        </select>
                    </div>

                    <div className="distance">
                        <label className='distance' htmlFor="customFile">
                            Foto Surat Kesungguhan
                        </label>
                        <br />
                        <input type="file" id="customFile" refs={suratKesungguhan} required />
                    </div>

                    <div className="distance">
                        <label
                            htmlFor="exampleFormControlTextarea1"
                            className='distance'
                        >
                            Harapan Untuk Coding Bootcamp ini :
                        </label>
                        <br />
                        <textarea
                            className='textarea'
                            id="exampleFormControlTextarea1"
                            rows={3}
                            value={deskripsi.harapan}
                            onChange={e => setDeskripsi(e.target.value)}
                            name="harapan"
                        />
                    </div>

                    <input type="submit" value="Submit" className='submit' />
                    <button type="submit" onClick={resetData} className='reset'>
                        Reset
                    </button>
                </form>
            </div>
        </>
    );
};

export default FormDaftar;
