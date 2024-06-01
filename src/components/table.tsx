import React, { useState } from 'react';

type TableProps = {
  data: { key: any, label: string }[];
  userdata: any;
  delet: any;
  loader: any
};
export default function Table(props: TableProps) {
  const { data, userdata, delet, loader } = props;
  return (
    <>
      {loader ? <h1>Loading</h1> :
        <table>
          <thead>
            <tr>
              {data.map((val, i) => {
                return (
                  <th key={i}>{val.label}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {userdata.map((info: any, i: number) => {
              return (

                <tr key={i}>{data.map((ki, index) => {
                  return (
                    <>
                      <td key={index}>{info[ki.key]}</td>
                    </>
                  )
                })}
                  <button onClick={() => delet(info.id)}>Delete</button>
                </tr>

              )
            })}
          </tbody>
        </table>
      }
    </>
  );
}

