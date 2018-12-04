import React from 'react';
import Github from '../../icons/components/github';
import Bell from '../../icons/components/bell';
import Plus from '../../icons/components/plus';
import Down from '../../icons/components/down';

import './header.css';

function Header({user}) {
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
			<div className="header-right">
				<li><Bell size={14} height={16} color="grey" view="0 0 14 16"/></li>
				<li><Plus size={12} height={16} color="white" view="0 0 12 16"/>
				  <span><Down size={8} color="white" view="0 0 16 28"/></span> 
				</li>
				<li><img src={user.avatar_url} alt="" width="20" height="20"/>
				  <span><Down size={8} color="white" view="0 0 16 28"/></span> 
				</li>
			</div>
		</div>
	)
}

export default Header;