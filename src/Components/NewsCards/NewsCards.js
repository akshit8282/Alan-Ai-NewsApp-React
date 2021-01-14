import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import {Typography,Grid,Grow} from '@material-ui/core'
import useStyle from './Style.js'


const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards = ({articles,activearticle}) => {
    const classes=useStyle();
if(!articles.length){
    return (
        <Grow in>
        <Grid  className={classes.container} container alignItems="stretch" spacing={3}>
        {infoCards.map((infoCard)=>(
     <Grid item className={classes.infoCard}  xs={12} sm={6} md={4} lg={3}>
         <div className={classes.card} style={{backgroundColor:infoCard.color}}>
<Typography variant="h5">{infoCard.title}</Typography>
{infoCard.info?(<Typography variant="h6"><strong>{infoCard.title.split(' ')[2]}</strong><br/>{infoCard.info}</Typography>):null}
<Typography variant="h6">Try Saying :{infoCard.text}</Typography>
         </div>
     </Grid>
))
}
   </Grid>        
</Grow>
    )
}
else{
    return (
        <Grow in>
<Grid  className={classes.container} container alignItems="stretch" spacing={3}>
{articles.map((article,i)=>(
    <Grid item  style={{display:"flex"}} xs={12} sm={6} md={4} lg={3}>
               <NewsCard article={article}  activearticle={activearticle} i={i} key={i}/>
               </Grid>
            ))}
</Grid>

           
        </Grow>
    )
}
}

export default NewsCards
