import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function StudentsList() {
  const [students, setStudents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true)
        // Ask Supabase to give us everything from the "students" table
        const { data, error: dbError } = await supabase.from('students').select('*')
        
        if (dbError) throw dbError
        if (data) setStudents(data)
      } catch (err: any) {
        console.error("Error fetching students:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchStudents()
  }, [])

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center flex-wrap gap-4">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Students Directory
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              A list of all students retrieved directly from your Supabase database.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {loading && <span className="text-indigo-600 font-semibold text-sm animate-pulse">Loading...</span>}
            <Link 
              to="/add-student" 
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add Student
            </Link>
          </div>
        </div>
        
        <div className="px-4 py-5 sm:p-6">
          {error ? (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Error connecting to Supabase</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{error}</p>
                    <p className="font-semibold mt-2">Make sure you have:</p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Added your exact URL and Anon Key to the `.env` file and restarted your dev server.</li>
                      <li>Created a table called exacty `students` in your Supabase dashboard.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : students.length === 0 && !loading ? (
            <div className="text-center py-8 text-gray-500">
              No students found. Have you added any rows to your `students` table yet?
            </div>
          ) : (
            <ul role="list" className="divide-y divide-gray-200">
              {students.map((student) => (
                <li key={student.id} className="py-4 flex">
                  <div className="flex flex-col">
                    {/* Assuming your 'students' table has columns like 'first_name', 'last_name', or 'name'. Try swapping these properties if needed! */}
                    <span className="text-sm font-medium text-gray-900">
                      {student.first_name || student.name || 'Unknown Student'} {student.last_name || ''}
                    </span>
                    {student.email && (
                      <span className="text-sm text-gray-500">{student.email}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
