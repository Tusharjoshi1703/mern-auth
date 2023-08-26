import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className='bg-slate-200 h-10 '>
        <div className="flex justify-around items-center pt-2">
        <Link to="/">
        <h1 className='font-bold '>Auth App</h1>
        </Link>
        <ul className='flex space-x-10 mr-4'>
            <Link to='/'>
            <li className="">Home</li>
            </Link>
            <Link to='/about'>
            <li className="">About</li>
            </Link>
            <Link to='/sign-in'>
            <li className="">Sign In</li>
            </Link>
        </ul>
        </div>
    </div>
  )
}
