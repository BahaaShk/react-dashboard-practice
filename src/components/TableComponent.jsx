import React from 'react'
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";

const data = [
    {
      name: "Viola Amherd",
      Role: "React Developer",
      // departement: "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
      status: "active",
    },
    {
      name: "Simonetta Sommaruga",
      Role: "Vue.JS Developer",
      // departement:
        // "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
      status: "active",
    },
    {
      name: "Alain Berset",
      Role: "Svelte Developer",
      // departement: "The Federal Department of Home Affairs (FDHA)",
      status: "active",
    },
    {
      name: "Ignazio Cassis",
      Role: "Angular Developer",
      // departement: "The Federal Department of Foreign Affairs (FDFA)",
      status: "active",
    },
    {
      name: "Ueli Maurer",
      Role: "React Developer",
      // departement: "The Federal Department of Finance (FDF)",
      status: "active",
    },
    {
      name: "Guy Parmelin",
      Role: "React Developer",
      // departement: "The Federal Department of Economic Affairs, Education and Research (EAER)",
      status: "active",
    },
    {
      name: "Karin Keller-Sutter",
      Role: "Vanilla-JS Developer",
      // departement: "The Federal Department of Justice and Police (FDJP)",
      status: "active",
    },
  ];

const TableComponent = () => {
  return (
    <Card className=' mt-4'>
    <Title className='text-center tracking-[8px] font-bold text-[24px]'>List of Front-end Developers</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell className=' font-bold text-lg border-b-yellow-500 border text-center'>Name</TableHeaderCell>
          <TableHeaderCell className=' font-bold text-lg border-b-yellow-500 border text-center'>Position</TableHeaderCell>
          {/* <TableHeaderCell>Department</TableHeaderCell> */}
          <TableHeaderCell className=' font-bold text-lg border-b-yellow-500 border text-center'>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody className='border'>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell className='border text-center'>{item.name}</TableCell>
            <TableCell className='border text-center'>
              <Text>{item.Role}</Text>
            </TableCell>
            {/* <TableCell>
              <Text>{item.departement}</Text>
            </TableCell> */}
            <TableCell className='text-center'>
              <Badge color="emerald" icon={StatusOnlineIcon}>
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  )
}

export default TableComponent