import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function BasicCard(props: any) {

    function CatPicture(props: any) {
        return (
            <div style={{height: "100%"}}>
                <img width={"100%"} height={"auto"}
                     src={props.image}
                     loading="lazy"
                    // TODO - get alt text dynamically
                     alt=""
                />
            </div>
        )
    }

    return (
        <Card sx={{width: "80%", marginBottom: "2em"}}>
            <div>
                <Typography level="title-lg">{props.name}</Typography>
                <Typography level="body-sm">{props.nicknames} - {props.age}</Typography>
            </div>
            {/*<Carousel>*/}
                {
                    props.images.map((image: any, i: number) => (
                        <CatPicture image={image}/>
                    ))
                }
            {/*</Carousel>*/}
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