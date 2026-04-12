# Guide: Supabase Backend Connection

This guide outlines how to interact with your Supabase backend within the React application. 
Supabase provides its own SDK (`@supabase/supabase-js`) which acts as your ORM, database client, and authentication library.

## 1. Environment Variables

To connect to Supabase, we need your project's URL and Anon Key.
These are stored in the `.env` file at the root of the project:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```
> **Note**: You can find these values in your Supabase Dashboard under **Project Settings > API**.

## 2. The Supabase Client

The application uses a singleton Supabase client initialized in `src/lib/supabase.ts`.

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

You should **always** import this specific instance when you need to make database or authentication calls, instead of calling `createClient` again.

## 3. Database Queries

Supabase uses a chained syntax to perform database operations. Use the `supabase` instance to fetch data within your standard React hooks.

An example of fetching a list of users:

```tsx
import { useEffect, useState } from 'react'
import { supabase } from '../src/lib/supabase'

export default function UsersList() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        // Select all columns from the 'users' table
        const { data, error: dbError } = await supabase.from('users').select('*')
        
        if (dbError) throw dbError
        if (data) setUsers(data)

      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <div>Loading users...</div>
  if (error) return <div className="text-red-500">Error: {error}</div>

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}
```

## Summary Checklist:
- [x] `@supabase/supabase-js` is installed in `package.json`.
- [x] Connection instance available at `src/lib/supabase.ts`.
- [ ] You have updated `.env` with your actual Supabase URL and Anon Key.
