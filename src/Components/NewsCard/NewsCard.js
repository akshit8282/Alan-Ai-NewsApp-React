import React from 'react'
import useStyle from './Style.js'
import {Card,CardActionArea,CardContent,Button,Typography,CardActions,CardMedia} from '@material-ui/core'
const NewsCard = ({article:{description,author,title,url,urlToImage,publishedAt,content,source},i}) => {
    const classes=useStyle();
   
    
    return (
        
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank" >
                <CardMedia className={classes.media} image={urlToImage}/>
                <div className={classes.details}>
                    <Typography variant="body2" component="h2" color="textSecondary">{publishedAt}</Typography>
                    <Typography variant="body2" component="h2" color="textSecondary">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" component="p" color="textSecondary">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More!</Button>
                <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
                    
                    </Card>
    )
}

export default NewsCard
