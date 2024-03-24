'use client';
import { useReducer, useEffect, useState } from 'react';
import Card from './Card';
import { Link } from '@mui/material';
import getAllCompany from '@/libs/getAllCompany';

export default function CardPanel() {
  const [companyResponse, setCompanyResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const allCompany = await getAllCompany();
      setCompanyResponse(allCompany);
    };
    fetchData();
  }, []);

  const ratingReducer = (
    ratingList: Map<string, number>,
    action: { type: string; companyName: string; rating: number }
  ) => {
    switch (action.type) {
      case 'add': {
        ratingList.set(action.companyName, action.rating);
        return new Map(ratingList);
      }
      case 'remove': {
        ratingList.delete(action.companyName);
        return new Map(ratingList);
      }
      default:
        return ratingList;
    }
  };

  const [ratingList, dispatchRating] = useReducer(
    ratingReducer,
    new Map<string, number>()
  );

  // Mock Data for Demonstration Only
  // const mockCompanyRepo = [
  //     {hid: "001", name: "Chulalongkorn Company", image: "/img/chula.jpg"},
  //     {hid: "002", name: "Rajavithi Company", image: "/img/rajavithi.jpg"},
  //     {hid: "003", name: "Thammasat University Company", image: "/img/thammasat.jpg"}
  // ]

  if (!companyResponse) {
    return <p>Card Panel is Loading ...</p>;
  }

  return (
    <div>
      <div
        style={{
          margin: '20px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignContent: 'space-around',
        }}
      >
        {/* {
                    companyResponse.data.map((companyItem:CompanyItem)=>(
                        <Link href={`/company/${companyItem.id}`} className="w-1/5">
                            <Card companyName={companyItem.name} imgSrc={companyItem.picture}
                                onRating={ (company:string, rating:number)=>dispatchRating({type:'add', companyName:company, rating:rating}) }
                            />
                        </Link>
                    ))
                } */}
      </div>
      <div className="w-full p-[20px] text-center">
        {Array.from(ratingList).map(([company, rating]) => (
          <div
            data-testid={company}
            key={company}
            onClick={() =>
              dispatchRating({
                type: 'remove',
                companyName: company,
                rating: rating,
              })
            }
          >
            {rating !== null ? `${company} : ${rating}` : null}{' '}
          </div>
        ))}
      </div>
    </div>
  );
}
