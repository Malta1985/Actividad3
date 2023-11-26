import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';

const icons = {
  TeamOutlined,
  UserAddOutlined
};

const teachers = {
  id: 'teachers',
  title: 'Teachers',
  type: 'group',
  children: [
    {
      id: 'teachers',
      title: 'Teachers',
      type: 'item',
      url: '/teachers',
      icon: icons.TeamOutlined,
      breadcrumbs: false
    }
  ]
};

export default teachers;
