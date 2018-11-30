import React from 'react';
import Github from '../../icons/components/github'
import './header.css';

function Header() {
	return (
	    <div className="header">
		  <div className="header-container">
            <li> <Github size={32} color="white" view="0 0 32 32"/> </li>
            <input className="input-form" type="text" placeholder="Search or jump to..."></input>
						<li>Pull request</li>
						<li>Issues</li>
						<li>Marketplace</li>
						<li>Explore</li>
		  </div>
		</div>
	)
}

export default Header;