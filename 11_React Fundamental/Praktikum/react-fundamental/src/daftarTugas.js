import { TodoCard } from "./TodoCard"

const DaftarBarang = [
    {
        id: 1,
        title: 'Membuat Komponen',
        completed: true,
    },
    {
        id: 2,
        title: 'Unit Testing',
        completed: false,
    },
    {
        id: 3,
        title: 'Setup Development Environment',
        completed: true,
    },
    {
        id: 4,
        title: 'Deploy ke server',
        completed: false,
    },
]
const DaftarTugas = () => {
    const warnaGaris = {
        borderColor: '#b3b1af',
        borderStyle: 'solid',
    }
    return (
        <div>
            <div style={{
                marginBottom: '30px',
            }}>
                <h2 style={{
                    margin: '20px'
                }}>To Do App</h2>
                <hr style={warnaGaris} />
            </div>
            {
                DaftarBarang.map((item) => (
                    <TodoCard key={item.id} Todo={item} />
                ))
            }
        </div>
    )
}

export default DaftarTugas