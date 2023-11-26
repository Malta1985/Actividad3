import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TeacherForm from './components/TeacherForm';

const EditTeacher = () => {
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    getTeacherDetails();
  }, [teacherId]);

  const getTeacherDetails = async () => {
    try {
      const response = await fetch(`http://localhost:9000/api/teachers/${teacherId}`);
      const data = await response.json();
      setTeacher(data);
    } catch (error) {
      console.error('Error fetching teacher details:', error);
    }
  };

  const updateTeacher = async (updatedTeacherData) => {
    try {
      const response = await fetch(`http://localhost:9000/api/teachers/${teacherId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTeacherData)
      });

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error updating teacher:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  return <TeacherForm teacher={teacher} onSubmit={updateTeacher} isUpdating={isUpdating} />;
};

export default Edit;
