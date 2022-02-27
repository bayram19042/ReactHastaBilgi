import React,{useEffect, useState,useContext} from 'react'  
import axios from 'axios'



function App() {
  const [veri,setVeri]=useState("")
  const [tarih,setTarih]=useState("")
  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(e=>setVeri(e.data[tarih]))
    .catch(hata=>console.log(hata))
    
  },[tarih])
  const handleChange = (e)=>{
    setTarih(e.target.value)
  }
  console.log(tarih)
  return (
    <div className="App">
       
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 mx-auto mt-4'>
             <h2 className='text-white text-center display-3'>TÜRKİYE COVİD-19 Arama Motoru</h2>
             <input type="text" placeholder='GG/AA/YY' className='form-control' value={tarih} onChange={handleChange}/>

             <table class="table table-striped text-white mt-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Test Sayısı</th>
      <th scope="col">Hasta Sayısı</th>
      <th scope="col">Vefat Sayısı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th className={veri===undefined ? 'bg-danger':'bg-success'} scope="row">1</th>
      <td className={veri===undefined ? 'bg-danger':'bg-success'}>{veri===undefined ? "veri bekleniyor":veri.totalTests}</td>
      <td className={veri===undefined ? 'bg-danger':'bg-success'}>{veri===undefined ? "veri bekleniyor":veri.patients}</td>
      <td className={veri===undefined ? 'bg-danger':'bg-success'}>{veri===undefined ? "veri bekleniyor":veri.deaths}</td>
    </tr>
   
  </tbody>
</table>

          </div>
        </div>

      </div>
    
       
    </div>
  );
}




export default App;
