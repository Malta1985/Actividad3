import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';

const icons = {
  TeamOutlined,
  UserAddOutlined
};

const students = {
  id: 'students',
  title: 'Students',
  type: 'group',
  children: [
    {
      id: 'students',
      title: 'Students',
      type: 'item',
      url: '/students',
      icon: icons.TeamOutlined,
      breadcrumbs: false
    }
  ]
};

export default students;
