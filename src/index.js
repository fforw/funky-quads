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
    const faces = new Float64Array(LENGTH);

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
                    faces[off++] = (pos.x)|0;
                    faces[off++] = (pos.y)|0;
                    faces[off++] = (pos.x + v1.x)|0;
                    faces[off++] = (pos.y + v1.y)|0;
                    faces[off++] = (pos.x + v2.x)|0;
                    faces[off++] = (pos.y + v2.y)|0;
                    off += 2;
                    faces[off++] = 3;
                    faces[off++] = 1;
                    
                    pos.add(v2);
                }
                else
                {

                    faces[off++] = (pos.x)|0;
                    faces[off++] = (pos.y)|0;
                    faces[off++] = (pos.x + v0.x)|0;
                    faces[off++] = (pos.y + v0.y)|0;
                    faces[off++] = (pos.x + v1.x)|0;
                    faces[off++] = (pos.y + v1.y)|0;
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


function findOtherEdge(faces, x0, y0, x1, y1, index, out)
{
    for (let i = 0; i < faces.length; i += SIZE)
    {
        if (i === index)
        {
            continue;
        }

        // console.log("find", x0, y0, x1, y1, ":",
        //     faces[i    ], faces[i + 1],
        //     faces[i + 2], faces[i + 3],
        //     faces[i + 4], faces[i + 5],
        //     faces[i + 6], faces[i + 7],
        // );

        const count = faces[i + 8];
        if (
            faces[i    ] === x1 && faces[i + 1] === y1 &&
            faces[i + 2] === x0 && faces[i + 3] === y0
        )
        {
            out.index = i;
            out.edge = 0;
            return;
        }
        if (
            faces[i + 2] === x1 && faces[i + 3] === y1 &&
            faces[i + 4] === x0 && faces[i + 5] === y0
        )
        {
            out.index = i;
            out.edge = 1;
            return;
        }

        if (count === 3)
        {
            if (
                faces[i + 4] === x1 && faces[i + 5] === y1 &&
                faces[i    ] === x0 && faces[i + 1] === y0
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
                faces[i + 4] === x1 && faces[i + 5] === y1 &&
                faces[i + 6] === x0 && faces[i + 7] === y0
            )
            {
                out.index = i;
                out.edge = 2;
                return;
            }

            if (
                faces[i + 6] === x1 && faces[i + 7] === y1 &&
                faces[i    ] === x0 && faces[i    ] === y0
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


function printFace(faces, index)
{
    return (
        faces[index    ] + "," + faces[index + 1] + "|" +
        faces[index + 2] + "," + faces[index + 3] + "|" +
        faces[index + 4] + "," + faces[index + 5]
    );
}

const markedEdges = [];

function mark(faces, index, edge)
{
    if (edge === 2)
    {
        markedEdges.push(
            faces[index + edge*2], faces[index + edge*2 + 1],
            faces[index         ], faces[index          + 1]
        )
    }
    else
    {
        markedEdges.push(
            faces[index + edge*2], faces[index + edge*2 + 1],
            faces[index + (edge+1)*2], faces[index + (edge+1)*2 + 1]
        )
    }
}


function removeRandomEdges(faces, count)
{
    let success = 0;
    for (let i = 0 ; i < count ; i++)
    {
        const index = ((Math.random() * NUM_FACES)|0) * SIZE;
        if (faces[index + 8] === 3)
        {
            const caseMask = faces[index + 9];
            const targetIsOddFace = !!(caseMask & 1);
            const targetIsOutmostFace = !!(caseMask & 2);

            const edge = (Math.random() * 3)|0;

            if (!(targetIsOutmostFace && edge === 1))
            {

                const x0 = faces[index + edge * 2];
                const y0 = faces[index + edge * 2 + 1];
                const x1 = edge === 2 ? faces[ index ]: faces[ index + (edge+1) * 2];
                const y1 = edge === 2 ? faces[ index + 1]: faces[ index + (edge+1) * 2 + 1];


                findOtherEdge(faces, x0,y0,x1,y1, index, out)
                if (out.index >= 0 && faces[out.index + 8] === 3)
                {
                    const { index : otherIndex, edge: otherEdge } = out;
                    const x2 = edge === 0 ? faces[ index + 2 * 2] : faces[ index + (edge - 1) * 2];
                    const y2 = edge === 0 ? faces[ index + 2 * 2 + 1]: faces[ index + (edge - 1) * 2 + 1];


                    faces[otherIndex + 8] = 4;
                    switch(otherEdge)
                    {
                        case 2:
                            faces[otherIndex + 6] = x2;
                            faces[otherIndex + 7] = y2;
                            break;
                        case 1:
                            faces[otherIndex + 6] = faces[otherIndex + 4];
                            faces[otherIndex + 7] = faces[otherIndex + 5];
                            faces[otherIndex + 4] = x2;
                            faces[otherIndex + 5] = y2;
                            break;
                        case 0:
                            faces[otherIndex + 6] = faces[otherIndex + 4];
                            faces[otherIndex + 7] = faces[otherIndex + 5];
                            faces[otherIndex + 4] = faces[otherIndex + 2];
                            faces[otherIndex + 5] = faces[otherIndex + 3];
                            faces[otherIndex + 2] = x2
                            faces[otherIndex + 3] = y2;
                            break;
                    }
                    faces[index + 8] = 0;
                    //mark(faces, index,edge)

                    console.log("Face #", printFace(faces,index), ", edge = ", edge, " paired with  Face #" + printFace(faces,out.index), ", edge = ", out.edge)
                    success++;
                }
            }
        }
    }

    console.log("Success:", success, "out of", count);

    return success;
}


//removeRandomEdges(faces, NUM_EDGES * 0.25)
//subdivide(faces);



function mainLoop()
{
    ctx.strokeStyle = "#f0f";

    // for (let i = 0; i < markedEdges.length; i+=4)
    // {
    //     const x0 = markedEdges[i];
    //     const y0 = markedEdges[i+1];
    //     const x1 = markedEdges[i+2];
    //     const y1 = markedEdges[i+3];
    //
    //     ctx.beginPath();
    //     ctx.moveTo(x0,y0);
    //     ctx.lineTo(x1,y1);
    //     ctx.stroke();
    //
    // }

    for (let pos = 0; pos < LENGTH; pos += SIZE)
    {
        const count = faces[pos + 8];

        if (count >= 3)
        {
            const caseMask = faces[pos + 9];
            const targetIsOddFace = !!(caseMask & 1);
            const targetIsOutmostFace = !!(caseMask & 2);

            ctx.strokeStyle = "#800";

            ctx.beginPath();
            ctx.moveTo(faces[pos ],faces[pos + 1]);

            for (let i = 1; i < count; i++)
            {
                ctx.lineTo(faces[pos + i*2],faces[pos +  i*2 + 1]);
            }

            ctx.closePath();
            ctx.stroke();

        }
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
