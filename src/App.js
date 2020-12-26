import {React,useEffect,useState} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './Components/NewsCards/NewsCards'
import useStyle from './style.js'
const alnkey='4bec427bdef5108bf22d2521311f80832e956eca572e1d8b807a3e2338fdd0dc/stage';





function App() {
   const [newsState,setnewsState]=useState([]);
useEffect(()=>{
alanBtn({
key:alnkey,
onCommand:({command,articles})=>{
    if (command === 'newHeadlines') {
        setnewsState(articles);
    }
}
})
},[]);
const classes=useStyle();
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src=  'https://alan.app/voice/images/previews/preview.jpg' alt="aln logo" className={classes.alanLogo}/> 
            </div>
            <NewsCards articles={newsState}/>
        </div>
    )
}

export default App
