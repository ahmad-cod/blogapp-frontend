import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Users = () => {
  const users = useSelector(state => state.users)

  return (
    <section>
      <div>
        
      </div>
    
      
<div className="relative overflow-x-auto shadow-md sm:rounded-lg md:max-w-4xl">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    User's name
                </th>
                <th scope="col" className="px-6 py-3">
                    No. of blogs
                </th>
            </tr>
        </thead>
        <tbody>
          {users && users.map(user => 
            <tr key={user.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Link to={`/users/${user.id}`}>
                    {user.name}
                  </Link>
                </th>
                <td className="px-6 py-4">
                    {user.blogs.length}
                </td>
            </tr>
          )}
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
              
            </tr>
        </tbody>
    </table>
</div>

    </section>
  )
}

export default Users
