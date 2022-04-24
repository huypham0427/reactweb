import { useEffect, useState } from 'react';
import './portfolio.css'
import PortfolioList from './portfolioList/PortfolioList';
import { featuredUser, featuredHost } from './data';


export const Portfolio = () => {

    const [selected, setSelected] = useState('user');
    const [data, setData] = useState([]);

    const list = [
        {
            id: "user",
            title: "For Users",
          },
          {
            id: "host",
            title: "For Hosts",
          },
          
    ];

    useEffect(() =>{
        switch(selected){
            case "host":
                setData(featuredHost);
                break;

                default:
                    setData(featuredUser);
        }
    }
    ) 

  return (
    <div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
            {list.map((item) => (
                <PortfolioList
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                />
        ))}
        </ul>

        <div className='container'>
            {data.map((d) =>(
            <div className="item">
                <h3>{d.title}</h3>
                <p>{d.descript}</p>
            </div>
            ))}
        </div>
    </div>
  )
}
