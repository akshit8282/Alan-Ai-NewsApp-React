import {React,useEffect,useState} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './Components/NewsCards/NewsCards'
import useStyle from './style.js'
import wordsToNumbers from 'words-to-numbers';
const alnkey='4bec427bdef5108bf22d2521311f80832e956eca572e1d8b807a3e2338fdd0dc/stage';





function App() {
   const [newsState,setnewsState]=useState([]);
   const [article,setarticle]=useState(-1);
  
useEffect(()=>{
alanBtn({
key:alnkey,
onCommand:({command,articles,number,savedArticles})=>{
    if (command === 'newHeadlines') {
        console.log(articles);
        setnewsState(articles);
        setarticle(-1);
    }else if(command==='highlights'){
       
        setarticle((prevarticle)=>(prevarticle+1));
    }else if(command==='open'){
        const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = savedArticles[parsedNumber - 1];

          if (parsedNumber > savedArticles.length) {
            alanBtn().playText('Please try that again...');
          } else if (savedArticles) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
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
            <NewsCards articles={newsState} activearticle={article}/>
        </div>
    )
}

export default App
