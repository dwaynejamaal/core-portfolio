import React from "react";
import { MonitorIcon, SuitcaseSimpleIcon, StackSimpleIcon, ChatTextIcon, UserCircleIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="rounded-3xl bg-zinc-900 flex p-2 gap-4 mx-auto justify-between">
      <div className="bg-zinc-900 p-4 rounded-2xl text-2xl font-bold">
        <Link to="/">
        <span className='flex items-center text-zinc-50'>
          <MonitorIcon />
        </span>
        </Link>
      </div>

      <div className="bg-zinc-900 p-4 rounded-2xl text-2xl font-bold">
        <Link to="/">
        <span className='flex items-center text-zinc-50'>
          <SuitcaseSimpleIcon />
        </span>
        </Link>
      </div>

      <div className="bg-zinc-900 p-4 rounded-2xl text-2xl font-bold">
        <Link to="/">
        <span className='flex items-center text-zinc-50'>
          <StackSimpleIcon />
        </span>
        </Link>
      </div>

      <div className="bg-zinc-900 p-4 rounded-2xl text-2xl font-bold">
        <Link to="/">
        <span className='flex items-center text-zinc-50'>
          <ChatTextIcon />
        </span>
        </Link>
      </div>

      <div className="bg-zinc-900 p-4 rounded-2xl text-2xl font-bold">
        <Link to="/">
        <span className='flex items-center text-zinc-50'>
          <UserCircleIcon />
        </span>
        </Link>
      </div>

      <div className="bg-zinc-900 p-4 rounded-2xl text-2xl font-bold">
        <Link to="/">
        <span className='flex items-center text-zinc-50'>
          <EnvelopeSimpleIcon />
        </span>
        </Link>
      </div>
     
    </nav>
  )
}

export default Navbar;