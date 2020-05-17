import domready from "domready"
import raf from "raf"
// noinspection ES6UnusedImports
import STYLE from "./style.css"
import Vector from "./vector";

const PHI = (1 + Math.sqrt(5)) / 2;
const TAU = Math.PI * 2;
const DEG2RAD_FACTOR = TAU / 360;

const config = {
    width: 0,
    height: 0
};

let ctx, canvas;

const EDGE_LENGTH = 40;
const SIZE = 10; // count + case(1=odd face 2=outmost tri) + 4 * x/y

const SIXTH = TAU/6;

const DIRECTIONS = [
    new Vector(
        Math.cos(          0) * EDGE_LENGTH,
        Math.sin(          0) * EDGE_LENGTH
    ),
    new Vector(
        Math.cos(         SIXTH) * EDGE_LENGTH,
        Math.sin(         SIXTH) * EDGE_LENGTH
    ),
    new Vector(
        Math.cos( SIXTH * 2) * EDGE_LENGTH,
        Math.sin( SIXTH * 2) * EDGE_LENGTH
    ),
    new Vector(
        Math.cos( SIXTH * 3) * EDGE_LENGTH,
        Math.sin( SIXTH * 3) * EDGE_LENGTH
    ),
    new Vector(
        Math.cos( SIXTH * 4) * EDGE_LENGTH,
        Math.sin( SIXTH * 4) * EDGE_LENGTH
    ),
    new Vector(
        Math.cos( SIXTH * 5) * EDGE_LENGTH,
        Math.sin( SIXTH * 5) * EDGE_LENGTH
    )
];

const LIMIT = 4;
const NUM_FACES = calculateNumberOfFaces(LIMIT);
const LENGTH = NUM_FACES * SIZE;
const NUM_EDGES = NUM_FACES * 3;

function calculateNumberOfFaces(limit)
{
    return 6 * (limit + 1) * (limit + 1);
}


function createHexagonalTiles(limit)
{
    const faces = new Float32Array(LENGTH);

    let off = 0;

    let count = 0;
    let numTris = 1;
    do
    {
        for (let i=0; i < 6; i++)
        {
            const v0 = DIRECTIONS[i];
            const v1 = DIRECTIONS[(i + 1) % 6];
            const v2 = DIRECTIONS[(i + 2) % 6];


            let pos = v0.copy().scale(count);

            for(let j = 0; j < numTris; j++)
            {
                if (j & 1)
                {
                    faces[off++] = pos.x;
                    faces[off++] = pos.y;
                    faces[off++] = pos.x + v1.x;
                    faces[off++] = pos.y + v1.y;
                    faces[off++] = pos.x + v2.x;
                    faces[off++] = pos.y + v2.y;
                    off += 2;
                    faces[off++] = 3;
                    faces[off++] = 1;

                    pos.add(v2);
                }
                else
                {

                    faces[off++] = pos.x;
                    faces[off++] = pos.y;
                    faces[off++] = pos.x + v0.x;
                    faces[off++] = pos.y + v0.y;
                    faces[off++] = pos.x + v1.x;
                    faces[off++] = pos.y + v1.y;
                    off += 2;
                    faces[off++] = 3;
                    faces[off++] = count === limit ? 2 : 0;
                }
            }
        }

        numTris += 2;

    } while (count++ < limit);

    console.log({length: LENGTH, off, NUM_EDGES})

    return faces;
}


const faces = createHexagonalTiles(LIMIT);


function findOtherEdge(faces, x0, y0, x1, y1, out)
{
    for (let i = 0; i < faces.length; i += SIZE)
    {
        const count = faces[i];

        if (
            faces[i + 2] === x1 && faces[i + 3] === y1 &&
            faces[i + 4] === x0 && faces[i + 5] === y0
        )
        {
            out.index = i;
            out.edge = 0;
            return;
        }
        if (
            faces[i + 4] === x1 && faces[i + 5] === y1 &&
            faces[i + 6] === x0 && faces[i + 7] === y0
        )
        {
            out.index = i;
            out.edge = 1;
            return;
        }

        if (count === 2)
        {
            if (
                faces[i + 6] === x1 && faces[i + 7] === y1 &&
                faces[i + 2] === x0 && faces[i + 3] === y0
            )
            {
                out.index = i;
                out.edge = 2;
                return;
            }
        }
        else
        {
            if (
                faces[i + 6] === x1 && faces[i + 7] === y1 &&
                faces[i + 8] === x0 && faces[i + 9] === y0
            )
            {
                out.index = i;
                out.edge = 2;
                return;
            }

            if (
                faces[i + 8] === x1 && faces[i + 9] === y1 &&
                faces[i + 2] === x0 && faces[i + 3] === y0
            )
            {
                out.index = i;
                out.edge = 3;
                return;
            }

        }
    }

    out.index = -1;
}

const out = {index: -1, edge: 0};


function removeRandomEdges(faces, count)
{
    while (count > 0)
    {
        const index = 0;//((Math.random() * NUM_FACES)|0) * SIZE;
        if (faces[index] === 2)
        {
            const caseMask = faces[index + 1];
            const targetIsOddFace = !!(caseMask & 1);
            const targetIsOutmostFace = !!(caseMask & 2);

            const edge = 0;//(Math.random() * 3)|0;

            if (!(targetIsOutmostFace && edge === 1))
            {

                const x0 = faces[index + edge * 2];
                const y0 = faces[index + edge * 2 + 1];
                const x1 = edge === 2 ? faces[ index ]: faces[ index + (edge+1) * 2];
                const y1 = edge === 2 ? faces[ index + 1]: faces[ index + (edge+1) * 2 + 1];

                findOtherEdge(faces, x0,y0,x1,y1, out)



                // if (out.index < 0)
                // {
                //     throw new Error("Could not find other edge")
                // }

                console.log("Face #",index, ", edge = ", edge, " paired with  Face #" + out.index, ", edge = ", out.edge)

                count--;
            }
        }
    }
}


//removeRandomEdges(faces, NUM_EDGES * 0.2)

function mainLoop()
{
    for (let pos = 0; pos < LENGTH; pos += SIZE)
    {
        const count = faces[pos + 8];
        const caseMask = faces[pos + 9];
        const targetIsOddFace = !!(caseMask & 1);
        const targetIsOutmostFace = !!(caseMask & 2);

        ctx.strokeStyle = targetIsOutmostFace ? "#0f0" : "#800";

        ctx.beginPath();
        ctx.moveTo(faces[pos ],faces[pos + 1]);

        for (let i = 1; i < count; i++)
        {
            ctx.lineTo(faces[pos + i*2],faces[pos +  i*2 + 1]);
        }

        ctx.closePath();
        ctx.stroke();
    }

//    raf(mainLoop)
}

domready(
    () => {

        canvas = document.getElementById("screen");
        ctx = canvas.getContext("2d");

        const width = (window.innerWidth) | 0;
        const height = (window.innerHeight) | 0;

        config.width = width;
        config.height = height;

        canvas.width = width;
        canvas.height = height;

        ctx.fillStyle = "#000";
        ctx.strokeStyle = "#f00";
        ctx.fillRect(0,0, width, height);

        ctx.fillStyle = "#888";
        ctx.strokeStyle = "#f00";
        ctx.translate(width >> 1, height >> 1)

        raf(mainLoop)
    }
);
