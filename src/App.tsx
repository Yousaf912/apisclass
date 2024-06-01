
import React, { useState } from 'react';
import axios from 'axios';
import Table from './components/table';
import Table2 from './components/table2';
import { Label } from '@mui/icons-material';
import Toist from './components/toistify';


// function App() {
//   const [data, setData] = useState<any[]>([]);
//  const [loader,setloader]=useState(false);


//   const delet = (i: any) => {
//     console.log(i);

//     axios.delete(`https://jsonplaceholder.typicode.com/users/${i}`)
//       .then(() => {
//         let newdta = data.filter((items) => items.id !== i)
//         setData(newdta)
//         alert("deleted")
//       }).catch((eror) => {
//         console.log(eror.message);

//       }
//       )
//   }

//   const onClickHandler = () => {
//     setloader(true)
//       axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((response) => {
//           console.log(response.data);
//           setData([...data, ...response.data]);
//           setloader(false)
//         })
//         .catch((error) => {
//           console.log(error);
//         })

//   };

//   const tableColumns = [
//     { key: "name", label: "Name" },
//     { key: "username", label: "User Name" },
//     { key: "email", label: "Email" }
//   ];

//   return (
//     <div>
//       <button onClick={onClickHandler}>Get Data</button>
//       <Table data={tableColumns} userdata={data} delet={delet}  loader={loader} />
//       <p>{data.length}</p>
//     </div>

//   );
// }

// export default App;


export default function App() {

  const [dataloader, setdataloder] = useState(false);
  const [deltclick,setdeltclick]=useState(false);

  const userdata = [
    {
      key: "id",
      label: "Id"
    },
    {
      key: "name",
      label: "Name"
    },
    {
      key: "username",
      label: "UserName"
    },
    {
      key: "email",
      label: "Mail"
    },

  ];

  const deltitem = (id: any) => {
  
    axios.delete(`https://jsonplaceholder.typicode.com/users/ ${id}`)
      .then(() => {
        const newdata = data.filter((item) => item.id !== id)
        setdata(newdata)
        setdeltclick(true)
      })
  }

  const deltAll = () => {
    setdata([])
  }


  const [data, setdata] = useState<any[]>([]);
  const getdata = () => {
    setdataloder(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const newdata = [...data, ...response.data]
        setdata(newdata)
        setdataloder(false);
      })
  }
  return (
    <div>
      <Table2 clickhandler={getdata} userdata={userdata} data={data} delt={deltitem} loader={dataloader} dltal={deltAll} ></Table2>
{deltclick?<Toist></Toist>:''}
    </div>
  )
}



