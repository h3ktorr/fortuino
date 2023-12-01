import React, { useState, useContext, useEffect } from 'react'
// import { useCallback } from 'react'

const btcUrl =
"https://alpha-vantage.p.rapidapi.com/query?from_currency=BTC&function=CURRENCY_EXCHANGE_RATE&to_currency=USD";
const btcOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "50067ae5ecmsh8a6a4ab632c505ep1e1c62jsn8287f2a32552",
    "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
  },
};

const forexUrl =
  "https://alpha-vantage.p.rapidapi.com/query?function=FX_INTRADAY&interval=5min&to_symbol=USD&from_symbol=EUR&datatype=json&outputsize=compact";
const forexOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "50067ae5ecmsh8a6a4ab632c505ep1e1c62jsn8287f2a32552",
    "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
  },
};

const stocksUrl =
  "https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact";
const stocksOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "50067ae5ecmsh8a6a4ab632c505ep1e1c62jsn8287f2a32552",
    "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
  },
};



const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [btcData, setBtcData] = useState({});
  const [forexData, setForexData] = useState({});
  const [stocksData, setStocksData] = useState({});

  const getBtcData = async() => {
    try {
      const response = await fetch(btcUrl, btcOptions);
      const result = await response.json();
      console.log(result["Realtime Currency Exchange Rate"]);
    } catch (error) {
      console.error(error);
    }
  }
  
  const getForexData = async() => {
    try {
      const response = await fetch(forexUrl, forexOptions);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  const getStocksData = async() => {
    try {
      const response = await fetch(stocksUrl, stocksOptions);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
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
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
