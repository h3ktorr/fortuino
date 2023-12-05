import React, { useState, useContext, useEffect, useCallback } from 'react'
import useFetch from './useFetch';
// import { useCallback } from 'react'

const btcUrl =
"https://alpha-vantage.p.rapidapi.com/query?from_currency=BTC&function=CURRENCY_EXCHANGE_RATE&to_currency=USD";

const forexUrl =
  "https://alpha-vantage.p.rapidapi.com/query?function=FX_INTRADAY&interval=5min&to_symbol=USD&from_symbol=EUR&datatype=json&outputsize=compact";

const stocksUrl =
  "https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact";

const NewsUrl = {
  btcNews:
    "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=CRYPTO:BTC&apikey=05UAM5N0RC4246P9&topic=finance",
};





const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  // const [btcNewsData, setBtcNewsData] = useState([])
  // const [btcData, setBtcData] = useState(null);
  // const [forexData, setForexData] = useState([]);
  // const [stocksData, setStocksData] = useState({});
  // const [forexNewsData, setForexNewsData] = useState([]);

//  const getNews = async() => {
//   const response = await fetch(NewsUrl.btcNews)
//   const news = await response.json()
//   setBtcData(news)
//   console.log(btcData)
//  }

//  useEffect(()=>{
//   getNews()
//  }, [])
   
  
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  
 const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  
  return <AppContext.Provider 
    value={{
      loading,
      isSidebarOpen,
      openSidebar,
      closeSidebar,
    }}
    >
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
