import { Link } from 'react-router-dom';

const dummyUsers = [
  { id: '1', name: 'Alice Johnson', role: 'Chef', email: 'alice@example.com', joined: 'Jan 2022', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: '2', name: 'Bob Smith', role: 'Manager', email: 'bob@example.com', joined: 'March 2022', avatar: 'https://randomuser.me/api/portraits/men/36.jpg' },
  { id: '3', name: 'Charlie Lee', role: 'Delivery Executive', email: 'charlie@example.com', joined: 'July 2023', avatar: 'https://randomuser.me/api/portraits/men/25.jpg' },
];

function Users() {
  return (
    <div className="pt-24 px-6 min-h-screen bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300">
      <h1 className="text-3xl font-bold text-center mb-8">👥 Our Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dummyUsers.map(user => (
          <Link
            key={user.id}
            to={`/user/${user.id}`}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300"
          >
            <img src={user.avatar} alt={user.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.role}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Users;