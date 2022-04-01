import React, { useState } from 'react'
import './form.css'

const Form = () => {
    const baseData = {
        nama: "",
        email: "",
        noHandphone: "",
        pendidikan: "",
        kelas: "",
        uploadFile: "",
        harapan: "",
    }
    const baseError = {
        nama: "",
        email: "",
        noHandphone: "",
    }

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const regex = /^[a-z A-Z]+$/;
    const regexNum = /^.{9,14}$/

    const [data, setData] = useState(baseData);
    const [errorMassage, setErrorMassage] = useState(baseError)

    const onChangeInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'nama') {
            if (regex.test(value)) {
                setErrorMassage({ ...errorMassage, nama: '' })
            }
            else { setErrorMassage({ ...errorMassage, nama: 'Nama Lengkap Harus Berupa Huruf' }) }
        }
        if (name === 'email') {
            if (regexEmail.test(value)) {
                setErrorMassage({ ...errorMassage, email: '' })
            }
            else { setErrorMassage({ ...errorMassage, email: 'Email Tidak Sesuai' }) }
        }
        if (name === 'noHandphone') {
            if (regexNum.test(value)) {
                setErrorMassage({ ...errorMassage, noHandphone: '' })
            }
            else { setErrorMassage({ ...errorMassage, noHandphone: 'Harus 9-14 karakter' }) }
        }

        setData({ ...data, [name]: value })
    }

    const tambah = () => {
        const namaId = document.getElementById('namaKu')
        const emailku = document.getElementById('emailID')
        const noHP = document.getElementById('noHpID')
        const TextArea = document.getElementById('harapan')
        const PilihanKelas = document.getElementById('pilihkelas')
        const latarBelakang = document.getElementById('itku')
        const latarBelakangKu = document.getElementById('nonit')
        const Fileku = document.getElementById('fileKu')
        console.log(data)

        if (namaId.value && emailku.value && noHP.value && TextArea.value && PilihanKelas.value !== 'none' && (latarBelakang.checked === true || latarBelakangKu.checked === true) && Fileku.files.length !== 0) {
            alert('Data Pendaftar "' + namaId.value + '" Berhasil Diterima')
        }
        else { alert('Data Pendaftar Tidak Sesuai') }
    }
    return (
        <div className='container'>
            <form>
                <div className='distance'>
                    <h1 className='title'>Pendaftaran Peserta Coding Bootcamp</h1>
                    <label htmlFor="nama">Nama Lengkap :</label>
                    <input className='inputnama'
                        type="text"
                        name="nama"
                        placeholder='masukkan nama lengkap anda...'
                        onChange={onChangeInput}
                        required
                        id='namaKu'
                    />
                    <span>
                        <p style={{ color: "red" }}>{errorMassage.nama ? errorMassage.nama : ''}</p>
                    </span>
                </div>
                <div className='distance'>
                    <label htmlFor="email">Email : </label>
                    <input className='inputnama'
                        type="email"
                        name="email"
                        placeholder='masukkan email anda...'
                        onChange={onChangeInput}
                        required
                        id='emailID'
                    />
                    <span>
                        <p style={{ color: "red" }}>{errorMassage.email ? errorMassage.email : ''}</p>
                    </span>
                </div>
                <div className='distance'>
                    <label htmlFor="noHandphone">No. Handphone :</label>
                    <input className='inputnama'
                        type="text"
                        name="noHandphone"
                        placeholder='masukkan no.handphone anda...'
                        onChange={onChangeInput}
                        required
                        id='noHpID'
                    />
                    <span>
                        <p style={{ color: "red" }}>{errorMassage.noHandphone ? errorMassage.noHandphone : ''}</p>
                    </span>
                </div>
                <div className='distance'>
                    <label htmlFor="pendidikan">Latar Belakang Pendidikan :</label>
                    <br />
                    <input
                        type="radio"
                        required
                        name="pendidikan"
                        id='itku'
                        value='IT'
                    />
                    <label htmlFor="it">IT</label>
                    <input
                        type="radio"
                        name="pendidikan"
                        id='nonit'
                        value='NON IT'
                    />
                    <label htmlFor="nonit">NON IT</label>
                </div>
                <div className='distance'>
                    <label htmlFor="kelas">Kelas Coding yang Dipilih :</label>
                    <select className='inputnama'
                        name="kelas"
                        id="pilihkelas"
                        required
                    >
                        <option value="none">Pilih salah Satu Program</option>
                        <option value="golang">Coding Backend with Golang</option>
                        <option value="reactjs">Coding Frontedn with ReactJS</option>
                        <option value="fullstack">Fullstack Developer</option>
                    </select>
                </div>
                <div className='distance'>
                    <label htmlFor="file">Foto Surat Kesungguhan</label>
                    <br />
                    <input
                        type="file"
                        required
                        id='fileKu'
                        name='uploadFile'
                    />
                </div>
                <div className='distance'>
                    <label htmlFor="harapan">Harapan Untuk Coding Bootcamp ini:</label>
                    <textarea className='textarea'
                        name="harapan"
                        id="harapan"
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>
                <div className='distance'>
                    <input className='submit' type="button" value="Submit" onClick={tambah} />
                    <input className='reset' type="reset" value="Reset" />
                </div>
            </form>
        </div>
    )
}

export default Form;
