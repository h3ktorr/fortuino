import {useEffect} from 'react'

const Alert = ({msg, type, removeAlert}) => {
  useEffect(()=>{
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000);
    return () => clearTimeout(timeout)
  },[])
 return (
  <div className={`alert-${type}`}>
    {msg}
  </div>
 )
}

export default Alert
