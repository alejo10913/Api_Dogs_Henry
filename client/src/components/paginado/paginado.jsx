import React from "react";
import { useEffect, useState } from "react";
import './paginado.css'

const pageNumberLimit = 8
export default function Paginado ({dogsPerPage, allDogs, currentPage, setCurrentPage}){
    
    const [maxPageNumberList, setMaxPageNumberList] = useState(20);
    const [minPageNumberList, setMinPageNumberList] = useState(0);
    
    
    useEffect(() => {
        setCurrentPage(1);
        setMaxPageNumberList(20);
        setMinPageNumberList(0);
      }, [allDogs])
    
      useEffect(() => {
        setCurrentPage(1);
        setMaxPageNumberList(20);
        setMinPageNumberList(0);
      }, [allDogs])
    
      const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
      };
    
    const pageNumbers = []
    for (let i=1; i<= Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i)
    }

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberList) {
            setMaxPageNumberList(maxPageNumberList + pageNumberLimit);
            setMinPageNumberList(minPageNumberList + pageNumberLimit);
          }
        };
      
        const handlePrevbtn = () => {
            setCurrentPage(currentPage - 1);
        
            if ((currentPage - 1) % pageNumberLimit == 0) {
              setMaxPageNumberList(maxPageNumberList - pageNumberLimit);
              setMinPageNumberList(minPageNumberList - pageNumberLimit);
            }
          };
        
          const renderPageNumbers = pageNumbers.map((number) => {
            if (number < maxPageNumberList + 1 && number > minPageNumberList) {
              return (
                <li key={number} id={number} onClick={(e) => handleClick(e)} >{number}
                
                </li>
              );
            } else return null;
          });


    
    return(
        <div>
        <ul>
          <li>
            <button
              onClick={handlePrevbtn}
              disabled={currentPage === pageNumbers[0] ? true : false}
            >
              PREV
            </button>
          </li>
          {renderPageNumbers}
          <li>
            <button
              onClick={handleNextbtn}
              disabled={
                currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
              }
            >
              NEXT
            </button>
          </li>
        </ul>
      </div>
       
    )
}