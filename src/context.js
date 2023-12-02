import React, { useState, useContext, useEffect } from 'react'
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
  forexNews:
    "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=FOREX:USD&apikey=05UAM5N0RC4246P9&topic=finance",
};



const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [btcData, setBtcData] = useState({});
  const [forexData, setForexData] = useState({});
  const [stocksData, setStocksData] = useState({});
  const [newsData, setNewsData] = useState({
    btcNews: '',
    forexNews: ''
  })

  const getBtcData = () => {
    const {data} = useFetch(btcUrl)
    setBtcData(data)
    console.log(btcData);
  }
  
  const getForexData = () => {
   const {data} = useFetch(forexUrl);
   setForexData(data)
   console.log(forexData);

  }
  
  const getStocksData = () => {
    const {data} = useFetch(stocksUrl)
    setStocksData(data)
    console.log(stocksData);
  }

  const getBtcNewsData = () => {
    const {data} = useFetch(NewsUrl.btcNews)
    setNewsData(prev => ({...prev, btcNews: data}))
    console.log(newsData);
  }

  const getForexNewsData = () => {
    const {data} = useFetch(NewsUrl.forexNews)
    setNewsData(prev => ({...prev, forexNews: data}))
    console.log(newsData);

  }



  const openSubmenu = (text, coordinates) => {
    setIsSubmenuOpen(true)
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
   
  // useEffect(()=>{
  //   getBtcData()
  //   getForexData()
  //   getStocksData()
  // }, [])
  
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
      isSubmenuOpen,
      openSubmenu,
      closeSubmenu,
    }}
    >
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
