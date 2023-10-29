import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

/**
 * TODO - add props type AND format location better
 * @constructor
 */
export default function BasicCard(props: any) {
    return (
        <Card sx={{ width: "40%" }}>
            <div>
                <Typography level="title-lg">{props.name}</Typography>
                <Typography level="body-sm">{props.nicknames} - N Years Old</Typography>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
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