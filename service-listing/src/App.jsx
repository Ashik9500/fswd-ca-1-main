
import './App.css'
import ServiceCard from './components/ServiceCard'
function App() {
const Services = [
  {
    id:1,
    title:"Web Development",
    desc:"Development of Web Applications"
  },
  {
    id:2,
    title:"App Development",
    desc:"Development of Applications"
  },
  {
    id:3,
    title:"Game Development",
    desc:"Development of Games"
  },
]

  return (
    <div>
      <h1 className='text-center'>Services</h1>
    <div className='flex justify-center align-center'>
    {Services.map((service)=>(
      <ServiceCard key={service.id} title={service.title} desc={service.desc} />
    ))}
    </div>
    </div>
  )
}

export default App
