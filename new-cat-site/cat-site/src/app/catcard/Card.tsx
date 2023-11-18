import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Carousel from "react-material-ui-carousel";

import textContent from "../contents.json";
import {text} from "stream/consumers";

/**
 * TODO - add props type AND format location better
 * @constructor
 */
export default function BasicCard(props: any) {

    function Item(props: any)
    {
        return (
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src={props.item}
                    // src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
        )
    }

    return (
        <Card sx={{ width: "80%", marginBottom: "2em"}}>
            <div>
                <Typography level="title-lg">{props.name}</Typography>
                 {/*TODO - render nicknames as list so we can append non-breaking-space char*/}
                <Typography level="body-sm">{props.nicknames} - {props.age}</Typography>
            </div>
            <Carousel>
                {
                    props.images.map( (image: any, i: number) => (
                        // <Item key={i} item={image}/>
                        // TODO - move this into a separate component either in this file or entirely
                        <AspectRatio minHeight="300px" maxHeight="400px">
                            <img
                                src={image}
                                loading="lazy"
                                // TODO - get alt text dynamically
                                alt=""
                            />
                        </AspectRatio>
                    ))
                }
            </Carousel>
            <CardContent orientation="horizontal">
                <div>
                    <Typography fontSize="sm" fontWeight="md">
                        {props.description}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}