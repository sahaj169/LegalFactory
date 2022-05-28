import { React, useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { Divider, Typography } from '@mui/material'

const columns = [
  { id: 'type', label: 'Type', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'phoneNumber',
    label: 'Phone Number',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'city',
    label: 'City',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },

  {
    id: 'time',
    label: 'Time',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
]

function createData(type, name, phoneNumber, email, city, time) {
  return { type, name, phoneNumber, email, city, time }
}

const originalRows = [
  createData(
    'Trademark',
    'Ishan',
    '9633474747',
    'trademark@gmail.com',
    'Ajmer',
    '15/04/2021'
  ),
  createData(
    'Trademark',
    'Bhavpreet',
    '9533474747',
    'Sa@yahoo.com',
    'Ajmer',
    '15/04/2021'
  ),
  createData(
    'IT Return',
    'Ram',
    '9833474747',
    'ram.taparia@gmail.com',
    'Jaipur',
    '19/04/2021'
  ),
  createData(
    'Trademark',
    'Ishan',
    '9633474747',
    'trademark@gmail.com',
    'Ajmer',
    '15/04/2021'
  ),
  createData(
    'Trademark',
    'Bhavpreet',
    '9533474747',
    'Sa@yahoo.com',
    'Ajmer',
    '15/04/2021'
  ),
  createData(
    'IT Return',
    'Ram',
    '9833474747',
    'ram.taparia@gmail.com',
    'Jaipur',
    '19/04/2021'
  ),
]

export default function StickyHeadTable() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [rows, setRows] = useState(originalRows)
  const [searched, setSearched] = useState("")


  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase())
    })
    setRows(filteredRows)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography
        gutterBottom
        variant='h5'
        component='h2'
        color='#703C00'
        fontWeight='bold'
        fontFamily='Sora'
        display='flex'
        justifyContent='center'
        alignItems='center'
        paddingTop='10px'
        fontSize='30px'
      >
        All Enquiries
      </Typography>
      <Divider />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {originalRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
