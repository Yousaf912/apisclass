import React from 'react'
import style from './table2.module.css';
import { IoMdDownload } from "react-icons/io";
import { FaDatabase,FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


export default function Table2(props: {
    clickhandler: any;
    userdata: any;
    data: any;
    delt: any;
    loader: any;
    dltal:any;
    
}) {
    const { clickhandler, userdata, data, delt, loader,dltal } = props;
    return (
        <div className={`${style.maindiv}`}>
            <div className="container">
                <div className="row">
                    <h1 className='text-white text-center mt-4 '>React Table</h1>
                    <div className={`col-lg-8 border border-2 mx-auto mt-2 shadow-lg py-2 px-4 ${style.inptdiv} justify-content-around d-flex   `}>
                        <button className={`${style.getdatabtn}`} onClick={clickhandler}>
                            <IoMdDownload className='fs-2' />
                            Get Data
                        </button>
                        <button onClick={dltal}>
                            <MdDelete className='fs-2' />
                            Delete
                        </button>
                        <div>
                            <div className='text-white  position-relative '>
                                <p className={`position-absolute ${style.datadiv} `}>{data.length}</p>
                                <FaDatabase className='fs-2 text-white' />
                            </div>
                        </div>

                    </div>


                    <div className={`col-lg-8 mx-auto mt-4 border rounded-4 shadow-lg `}>
                        
                                <table className={`table mt-2 ${style.tble}`}>
                                    <thead>
                                        <tr>
                                            {userdata.map((val: any, i: any) => {
                                                return (
                                                    <th key={i} scope="col">{val.label}</th>
                                                )
                                            })};
                                        </tr>
                                    </thead>
                                    {loader?
                                      <h1 className='text-white'>loading</h1>:
                                    <tbody>
                                        {data.map((info: any) => {
                                            return (
                                                <tr>
                                                    {userdata.map((val: any, i: any) => {
                                                        return (
                                                            <>
                                                                <td key={i}>{info[val.key]}</td>
                                                            </>
                                                        )
                                                    })}
                                                    <button onClick={() => delt(info.id)} className={`${style.dltbtn} `} ><MdDelete className='fs-3'/></button>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
}
                                </table>
                        
                            </div>
                </div>
                </div>
            </div>
            )
}
