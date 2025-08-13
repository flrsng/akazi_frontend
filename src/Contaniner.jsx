import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './store/userSlice';
import { setTitle, setLocation } from './store/filtersSlice';
import { fetchJobs } from './store/jobsSlice';
import { toggleDarkMode } from './store/uiSlice';

export default function Contaniner() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const filters = useSelector((state) => state.filters);
  const jobs = useSelector((state) => state.jobs);
  const ui = useSelector((state) => state.ui);

  return (
    <div>
      <h1>Job Board Example</h1>
      <p>User: {user.isLoggedIn ? `Role: ${user.role}` : 'Not logged in'}</p>
      <button onClick={() => dispatch(login({ role: 'jobSeeker' }))}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>

      <hr />

      <input
        placeholder="Job Title"
        value={filters.title}
        onChange={(e) => dispatch(setTitle(e.target.value))}
      />
      <input
        placeholder="Location"
        value={filters.location}
        onChange={(e) => dispatch(setLocation(e.target.value))}
      />

      <hr />
      <button onClick={() => dispatch(fetchJobs())}>Fetch Jobs</button>
      {jobs.status === 'loading' && <p>Loading jobs...</p>}
      {jobs.status === 'succeeded' && jobs.list.slice(0, 5).map((job) => (
        <p key={job.id}>{job.title}</p>
      ))}

      <hr />
      <p>Dark mode: {ui.darkMode ? 'On' : 'Off'}</p>
      <button onClick={() => dispatch(toggleDarkMode())}>Toggle Dark Mode</button>
    </div>
  );
}
