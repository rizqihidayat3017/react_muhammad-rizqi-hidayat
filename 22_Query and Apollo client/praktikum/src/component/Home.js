import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

const Querypengunjung = gql`
  query QueryPengujung {
    daftar_pengunjung {
      id
      nama
      umur
      jenis_kelamin
    }
  }
`;

const QueryById = gql`
query PengunjungById($_eq: Int) {
  daftar_pengunjung(where: {id: {_eq: $_eq}}) {
    id
    jenis_kelamin
    nama
    umur
  }
}
`

export default function Home() {
  const [searchVal, setSearchVal] = useState('')
  const { data, loading, refetch } = useQuery(Querypengunjung, { onCompleted: (data) => {
    setPassenger(data.daftar_pengunjung)
  }});
  
  const [getLazy, { data: lazyData, loading: lazyLoading }] = useLazyQuery(QueryById, { onCompleted: (data) => {
    setPassenger(data.daftar_pengunjung)
  }, variables: {
    "_eq": parseInt(searchVal)
  } }) 

  const [passenger, setPassenger] = useState([]);


  const hapusPengunjung = (id) => {
    setPassenger([
      ...passenger.filter((item) => {
        return item.id !== id;
      }),
    ]);
  };

  const tambahPengunjung = (newUser) => {
    const newData = {
      id: uuidv4(),
      ...newUser,
    };
    setPassenger([...passenger, newData]);

  };

  const handleChangeSearch = (event) => {
    const { value } = event.target
    setSearchVal(value)
  }


  const handleClickSearch = () => {
    if (searchVal === "") {
      refetch()
      setPassenger(data?.daftar_pengunjung)
    } else {
      getLazy()
    }
  } 

  if (loading || lazyLoading) {
    return (
      <div>
        <Header />
        <h3>Loading...</h3>
        <PassengerInput tambahPengunjung={tambahPengunjung} />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div>
          <input onChange={handleChangeSearch} placeholder="Cari berdasarkan Id ..." />
          <button onClick={handleClickSearch}>Cari</button>
        </div>
        <ListPassenger
          data={passenger}
          hapusPengunjung={hapusPengunjung}
        />
        <PassengerInput tambahPengunjung={tambahPengunjung} />
      </div>
    );
  }
}
