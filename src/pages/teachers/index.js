import { useState, useEffect } from 'react';
import { Stack, Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import MainCard from 'components/MainCard';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TeacherActions from './components/TeacherActions';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getTeachers();
  }, []);

  const getTeachers = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/teachers');
      const data = await response.json();
      setTeachers(data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  return (
    <Stack spacing={3}>
      <Grid container direction="row-reverse">
        <Button size="small" variant="contained" component={Link} to="/teachers/create">
          <PlusOutlined style={{ marginRight: 5 }} /> Add Teacher
        </Button>
      </Grid>
      <MainCard title="Teachers">
        <Stack spacing={0.75} sx={{ mt: -1.5 }}>
          <Box sx={{ height: 'auto', width: '100%' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Document</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Last name</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teachers.map((teacher) => (
                  <TableRow key={teacher.document} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {teacher.document}
                    </TableCell>
                    <TableCell align="right">{teacher.name}</TableCell>
                    <TableCell align="right">{teacher.lastName}</TableCell>
                    <TableCell align="right">{teacher.address}</TableCell>
                    <TableCell align="right">{teacher.age}</TableCell>
                    <TableCell align="right">
                      <TeacherActions teacherId={teacher.document} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Stack>
      </MainCard>
    </Stack>
  );
};

export default Teachers;
