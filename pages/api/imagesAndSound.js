import {readdirSync} from 'fs';

export default async function handler(req, res){
    if(req.method === "GET"){
        const pictures = readdirSync("./public/img/");
        const sounds = readdirSync("./public/sounds/");

        const elementLs = [];

        pictures.forEach(img => {
            let soundUrl = "";
            sounds.forEach(sound => {
                if(img.split(".")[0] == sound.split(".")[0]){
                    soundUrl = sound;
                }
            });
            elementLs.push({
                imgurl: img,
                soundurl: soundUrl
            })
        })

        res.status(200).json(elementLs);
    }
}