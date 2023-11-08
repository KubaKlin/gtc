import React from "react"
import Link from 'next/link';

const SideBar = () => {

  return (
    <div className="sidebar">
      <h4>Other services</h4>
      <ul className="sidebar-list">
        <li>
          <Link href="/services/sea-containers">Sea containers</Link>
        </li>
        <li>
          <Link href="/services/sea-containers">Magazynowanie</Link>
        </li>
        <li>
          <Link href="/services/sea-containers">Transport materiałów do Recyclingu</Link>
        </li>
        <li>
          <Link href="/services/sea-containers">Transport wywrotkami</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
