import { useState } from 'react';
import TeacherForm from './components/TeacherForm';

const CreateTeacher = () => {
  const [isCreating, setIsCreating] = useState(false);

  const createTeacher = async (teacherData) => {
    try {
      const response = await fetch('http://localhost:9000/api/teachers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(teacherData)
      });

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error creating teacher:', error);
    } finally {
      setIsCreating(false);
    }
  };

  return <TeacherForm onSubmit={createTeacher} isCreating={isCreating} />;
};

export default CreateTeacher;
