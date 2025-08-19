import { useEffect, useState } from "react";
import styles from "./product.module.css";

interface PaginationProps {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    setCurrentPage: (page: number) => void;
}

// Define the React arrow function component
const Pagination: React.FC<PaginationProps> = ({totalCount, currentPage, pageSize, setCurrentPage } : PaginationProps) => {

  const [pagination, setPagination] = useState<number[]>([]);
  useEffect (() => {
    const paginationLength = Math.ceil(totalCount / pageSize); 

    const numbersArray = Array.from({ length: paginationLength }, (_, i) => i + 1);
    setPagination(numbersArray);

  }, [currentPage, totalCount, pageSize]);

  const handlePaginationClick = (page: number) => {
    
    if (page !== currentPage) {
      console.log("Page clicked:", page); 
      setCurrentPage(page)
    }
  }

  return (
    <div className={styles.pagination}>
      {pagination.map((index: any) => (
          <div key={index} className={`${currentPage=== index ? styles.active : ''}`} onClick={() => handlePaginationClick(index)}>{index}</div> 
       ))}
      
    </div>
  );
};

export default Pagination;