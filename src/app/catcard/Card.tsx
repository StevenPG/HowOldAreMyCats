import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import {IconButton} from "@mui/joy";
import {VolumeUp} from "@mui/icons-material";
import {Tooltip} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import type { CSSProperties } from 'react';

export default function BasicCard(props: any) {

    function playAudio(sound: string) {
        const audio = new Audio(sound);
        audio.play();
    }

    function CatPicture(props: any) {
        const src: string = typeof props.image === 'string' ? props.image : '';
        const isImage = /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(src);
        const mediaStyle: CSSProperties = {
            display: "block",
            width: "100%",
            height: "auto",
            objectFit: "contain",
            maxHeight: "70vh", // prevent image from extending under description on tall/wide screens
            margin: "0 auto",
        };

        return (
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    maxHeight: "70vh",
                }}
            >
                {isImage ? (
                    <img
                        src={src}
                        loading="lazy"
                        alt="a cat"
                        style={mediaStyle}
                    />
                ) : (
                    <video
                        src={src}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline
                        preload="metadata"
                        style={mediaStyle}
                    />
                )}
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
        <Card id={props.name.replace(/\s+/g, '-')} sx={{ width: "min(900px, 80%)", marginBottom: "2em", overflow: "visible" }}>
            <div>
                <Typography level="title-lg">
                    <a href={`#${props.name.replace(/\s+/g, '-')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {props.name}
                    </a>
                </Typography>
                <Typography level="title-sm">{props.birthdate}{renderDeathDate()}</Typography>
                <Typography level="body-sm">{props.nicknames} - {props.age}</Typography>
            </div>
            <div style={{ marginBottom: '0.75rem' }}>
                <Carousel navButtonsAlwaysVisible={true} indicators={false} autoPlay={false}>
                    {
                        props.images.map((image: any, i: number) => (
                            <CatPicture image={image} key={i}/>
                        ))
                    }
                </Carousel>
            </div>
            <CardContent orientation="vertical" sx={{ mt: 1 }}>
                <div>
                    <Typography fontSize="sm" fontWeight="md">
                        {props.description}
                    </Typography>
                </div>
                <div>
                    {
                        props.sounds.map((sound: any, i: number) => (
                            <Tooltip title={sound.replace(".mp3", "").replaceAll("_", " ")}>
                                <IconButton
                                    key={i}
                                    aria-label="play sound"
                                    onClick={() => playAudio(sound)}
                                    color="primary"
                                >
                                    <VolumeUp/>
                                </IconButton>
                            </Tooltip>
                        ))
                    }
                </div>
            </CardContent>
        </Card>
    );
}