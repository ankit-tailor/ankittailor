import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function Project() {
    return (
        <Card className="py-8 bg-white cursor-pointer transform-scale dark:bg-dark text-dark dark:text-white md:w-full w-full">
            <CardMedia
                className="h-48"
                component="img"
                alt="Contemplative Reptile"
                height="50"
                image="https://images.pexels.com/photos/4533077/pexels-photo-4533077.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <button size="small" className="transform-scale" style={{ color: "rgba(0, 195, 255)", fontSize: "0.9rem" }}>
                    Live Project
                </button>
                <button size="small" className="transform-scale" style={{ color: "rgba(0, 195, 255)", fontSize: "0.9rem" }}>
                    Source Code
                </button>
            </CardActions>
        </Card>
    )
}

export default Project
