import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { gql, useQuery } from '@apollo/client'


const Querypengunjung = gql`
query QueryPengujung {
    daftar_pengunjung {
      id
      nama
      umur
      jenis_kelamin
    }
  }
`

export default function HomeBeneran() {
const { data, loading, error } = useQuery(Querypengunjung)  

console.log(data);

const hapusPengunjung = id => {
    this.setState({    
        data: [      
            ...this.state.data.filter(item => {        
                return item.id !== id;      
            })    
        ]  
    });
};

const tambahPengunjung = newUser => {
    const newData = {
        id: uuidv4(),
        ...newUser
    }; 
    this.setState({    
        data: [...this.state.data, newData]  
    });
};
    
  return (
    <div>
        <Header/>
        <ListPassenger 
            data={this.state.data}
            hapusPengunjung={this.hapusPengunjung}
        />
        <PassengerInput
            tambahPengunjung={this.tambahPengunjung}
        />
    </div>
)
}
