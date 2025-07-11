import { useParams } from 'react-router-dom';

const dummyUsers = [
  { id: '1', name: 'Alice Johnson', role: 'Chef', email: 'alice@example.com', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: '2', name: 'Bob Smith', role: 'Manager', email: 'bob@example.com', avatar: 'https://randomuser.me/api/portraits/men/36.jpg' },
  { id: '3', name: 'Charlie Lee', role: 'Delivery Executive', email: 'charlie@example.com', avatar: 'https://randomuser.me/api/portraits/men/25.jpg' },
];

function UserProfile() {
  const { id } = useParams();
  const user = dummyUsers.find(u => u.id === id);

  if (!user) {
    return <h2 className="pt-24 text-center text-red-600">User Not Found</h2>;
  }

  return (
    <div className="pt-24 text-center">
      <img src={user.avatar} alt={user.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p>{user.role}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;
