import React, { useEffect, useState } from 'react';
import { portfolio } from './ServiceData';

  function Service2() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    useEffect(() => {
      setProjects(portfolio);
    }, []);
    useEffect(() => {
      setProjects([]);
      const filtered = portfolio.map(p => ({ ...p, filtered: 
        p.category.includes(filter) }));
      setProjects(filtered);
    }, [filter]);
    return (
      <div className="portfolio__labels" style={{padding : '5rem'}}>
        <button href="/#" active={filter === 'all'} 
        onClick={() => setFilter('all')}>All</button>
        <button href="/#" active={filter === 'frontend'} 
        onClick={() => setFilter('frontend')}>Frontend</button>
        <button href="/#" active={filter === 'mobile'} 
        onClick={() => setFilter('mobile')}>Mobile</button>
        <button href="/#" active={filter === 'ux-ui'} o
        nClick={() => setFilter('ux-ui')}>UX/UI</button>
        <button href="/#" active={filter === 'others'} 
        onClick={() => setFilter('others')}>Others</button>
        <div className="portfolio__container">
  {projects.map(item => item.filtered === true ? (
    <span key={item.name}>
      {item.name}
    </span>
  ) : '')}
</div>
      </div>
    );
  }
  export default Service2;