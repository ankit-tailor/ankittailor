import React from 'react'
import Typography from '@material-ui/core/Typography';

const Blog = () => {
    return (
        <div className="p-6 rounded-lg shadow-2xl my-2 cursor-pointer bg-white text-dark dark:bg-dark dark:text-white">
            <div className="flex">
                <img className="w-3/12 shadow-2xl mx-4" src="https://images.pexels.com/photos/4533077/pexels-photo-4533077.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
                <div className="flex flex-col justify-evenly">
                    <div>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species...
                        </Typography>
                    </div>
                    <Typography variant="body2" className="text-active" component="p">
                        28th Sep, 2021
                    </Typography>
                </div>
            </div>
            <hr className="w-full mx-auto my-2" />
        </div>
    )
}

export default Blog
