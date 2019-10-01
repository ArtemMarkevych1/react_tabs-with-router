import React from 'react';
import { NavLink } from 'react-router-dom';
import Tabs from '../Tabs/Tabs';

const TabsPage = ({ tabs, match }) => (
  <>
    <ul className="tabs-list">
      {tabs.map(item => (
        <li
          key={item.id}
          className="tabs-list__item"
        >
          <NavLink
            to={`/tabs/${item.id}`}
            className="tabs-list__link"
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
    <tabs tabs={tabs} match={match} />
  </>
);

export default TabsPage;