import axios from 'axios';
import { useEffect ,  createContext , useState } from 'react';


export let UserContext = createContext();

export default function UserContextProvider ({children}){

    const [userToken, setUserToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [Loading, setLoading] = useState(true);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    




    const getUserData = async ()=>{ 
        if(userToken){
            const{data} = await axios.get(`https://ecommerce-node4.vercel.app/user/profile`
            ,{headers:{Authorization:`Tariq__${userToken}`}}
            );
            console.log("data");
            console.log(data.user);

            setUserData(data.user);
            setLoading(false);
        }
    }

    useEffect(
        ()=>{
    getUserData();
        } , [userToken]
    );
    
 
    return <UserContext.Provider value={{address,setAddress,phone, setPhone,userToken,setUserToken ,userData, setUserData ,Loading}}> 
        {children}
    </UserContext.Provider>
}   

