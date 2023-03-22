import {useState} from 'react';
import "../Component/card.css"
function Profile() {
 
                 let [color,setColor] =  useState({
                            bgColor:"white",
                            textColor:"black",
                            title:"Check to Switch Dark Mode"
                          })
     let [user,setUser] = useState({
        name:"Boy",
            gender:"Male",
            email:"Boy@gmail.com",
            image:"https://i.pinimg.com/736x/0d/c5/24/0dc524a074b46654da679a433b2dc092.jpg"
     })

     const Theme =()=>{
          if(color.textColor === "black"){
             setColor({
                bgColor:"black",
                textColor:"white",
                title:"Uncheck to switch Light Mode"

             })
          } else {
            setColor({
                bgColor:"white",
                textColor:"black",
                title:"Check to switch Dark Mode"
             })
          }
     }

     const Girl = ()=>{
        setUser({
            name:"Girl",
            gender:"Female",
            email:"Girl@gmail.com",
            image:"https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg"
        })
     }
     const Boy = ()=>{
        setUser({
            name:"Boy",
            gender:"Male",
            email:"Boy@gmail.com",
            image:"https://i.pinimg.com/736x/0d/c5/24/0dc524a074b46654da679a433b2dc092.jpg"
        })
     }
    return (
        <>
        <div className='maincontainer' style={{backgroundColor:color.bgColor,color:color.textColor}}>
            <div className='column1'>
                <img src={user.image} width="100%" height="100%" />
            </div>
            <div className='column2'>
                 <dl>
                    <dt><b>NAME</b></dt>
                    <dd>{user.name}</dd>
                    <dt><b>EMAIL</b></dt>
                    <dd>{user.email}</dd>
                    <dt><b>GENDER</b></dt>
                    <dd>{user.gender}</dd>
                    <dt><b>Description</b></dt>
                    <dd><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, ratione suscipit ipsam incidunt deserunt cupiditate. Nobis beatae fugiat facere alias cupiditate optio dolor sit amet consectetur adipisicing elit.</p></dd>
                 </dl>
                 <input type="checkbox" onChange={Theme} /> 
                 <label>{color.title}</label>
            </div>
            
        </div>
         <div className='butt'>
         <button onClick={Boy}  style = {{width : "50px",height : "40px",borderRadius  :"50%",border : "none",color : "white",fontSize : "800",fontWeight : "800",backgroundColor : "green"}}>Boy</button>&nbsp;&nbsp;&nbsp;
         <button onClick={Girl} style = {{width : "50px",height : "40px",borderRadius  :"50%",border : "none",color : "white",fontSize : "800",fontWeight : "800",backgroundColor : "red"}}>Girl</button>
         </div>
         </>
    );
}

export default Profile;