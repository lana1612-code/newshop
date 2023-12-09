import axios from 'axios';
import { useEffect ,  createContext , useState } from 'react';


export let UserContext = createContext();

export default function UserContextProvider ({children}){

    const [userToken, setUserToken] = useState(null);
    const [userData, setUserData] = useState(null);

    const getUserData = async ()=>{ 
        if(userToken){
            const{data} = await axios.get(`https://ecommerce-node4.vercel.app/user/profile`
            ,{headers:{Authorization:`Tariq__${userToken}`}}
            );
            console.log("data");
            console.log(data.user);

            setUserData(data.user);
        }
    }

    useEffect(
        ()=>{
    getUserData();
        } , [userToken]
    );
    
 
    return <UserContext.Provider value={{userToken,setUserToken ,userData, setUserData}}> 
        {children}
    </UserContext.Provider>
}   

