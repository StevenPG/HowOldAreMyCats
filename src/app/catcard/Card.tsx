import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import {IconButton} from "@mui/joy";
import {VolumeUp} from "@mui/icons-material";

export default function BasicCard(props: any) {

    function playMusic(sound: string){
        const music = new Audio(sound);
        music.play();
    }

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

    function renderDeathDate(): string {
        if (props.deathdate) {
            return " - " + props.deathdate;
        }
        return "";
    }

    return (
        <Card sx={{width: "80%", marginBottom: "2em"}}>
            <div>
                <Typography level="title-lg">{props.name}</Typography>
                <Typography level="title-sm">{props.birthdate}{renderDeathDate()}</Typography>
                <Typography level="body-sm">{props.nicknames} - {props.age}</Typography>
            </div>
            {/*<Carousel>*/}
                {
                    props.images.map((image: any, i: number) => (
                        <CatPicture image={image}/>
                    ))
                }
            {/*</Carousel>*/}
            <CardContent orientation="vertical">
                <div>
                    <Typography fontSize="sm" fontWeight="md">
                        {props.description}
                    </Typography>
                </div>
                <div>
                    {/* TODO - audio icon & iterate over sounds object & space them out */}
                    {
                        props.sounds.map((sound: any, i: number) => (
                            <IconButton
                                key={i}
                                aria-label="play sound"
                                onClick={() => playMusic(sound)}
                                color="primary"
                            >
                                <VolumeUp />
                            </IconButton>
                        ))
                    }
                </div>
            </CardContent>
        </Card>
    );
}