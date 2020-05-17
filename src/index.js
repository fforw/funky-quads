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

const EDGE_LENGTH = 80;
const SIZE = 10; // count + case(1=odd face 2=outmost tri) + 4 * x/y

const SIXTH = TAU / 6;

const DIRECTIONS = [
    new Vector(
        Math.cos(0) * EDGE_LENGTH,
        Math.sin(0) * EDGE_LENGTH
    ),
    new Vector(
        Math.cos(SIXTH) * EDGE_LENGTH,
        Math.sin(SIXTH) * EDGE_LENGTH
    ),
    new Vector(
        Math.cos(SIXTH * 2) * EDGE_LENGTH,
        Math.sin(SIXTH * 2) * EDGE_LENGTH
    ),
    new Vector(
        Math.cos(SIXTH * 3) * EDGE_LENGTH,
        Math.sin(SIXTH * 3) * EDGE_LENGTH
    ),
    new Vector(
        Math.cos(SIXTH * 4) * EDGE_LENGTH,
        Math.sin(SIXTH * 4) * EDGE_LENGTH
    ),
    new Vector(
        Math.cos(SIXTH * 5) * EDGE_LENGTH,
        Math.sin(SIXTH * 5) * EDGE_LENGTH
    )
];

const LIMIT = 5;
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
        for (let i = 0; i < 6; i++)
        {
            const v0 = DIRECTIONS[i];
            const v1 = DIRECTIONS[(i + 1) % 6];
            const v2 = DIRECTIONS[(i + 2) % 6];

            let pos = v0.copy().scale(count);

            for (let j = 0; j < numTris; j++)
            {
                if (j & 1)
                {
                    faces[off++] = (pos.x) | 0;
                    faces[off++] = (pos.y) | 0;
                    faces[off++] = (pos.x + v1.x) | 0;
                    faces[off++] = (pos.y + v1.y) | 0;
                    faces[off++] = (pos.x + v2.x) | 0;
                    faces[off++] = (pos.y + v2.y) | 0;
                    off += 2;
                    faces[off++] = 3;
                    faces[off++] = 1;

                    pos.add(v2);
                }
                else
                {

                    faces[off++] = (pos.x) | 0;
                    faces[off++] = (pos.y) | 0;
                    faces[off++] = (pos.x + v0.x) | 0;
                    faces[off++] = (pos.y + v0.y) | 0;
                    faces[off++] = (pos.x + v1.x) | 0;
                    faces[off++] = (pos.y + v1.y) | 0;
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
            faces[i] === x1 && faces[i + 1] === y1 &&
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
                faces[i] === x0 && faces[i + 1] === y0
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
                faces[i] === x0 && faces[i] === y0
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
        faces[index] + "," + faces[index + 1] + "|" +
        faces[index + 2] + "," + faces[index + 3] + "|" +
        faces[index + 4] + "," + faces[index + 5]
    );
}


function removeRandomEdges(faces, count)
{
    let success = 0;
    for (let i = 0; i < count; i++)
    {
        const index = ((Math.random() * NUM_FACES) | 0) * SIZE;
        if (faces[index + 8] === 3)
        {
            const caseMask = faces[index + 9];
            const targetIsOddFace = !!(caseMask & 1);
            const targetIsOutmostFace = !!(caseMask & 2);

            const edge = (Math.random() * 3) | 0;

            if (!(targetIsOutmostFace && edge === 1))
            {

                const x0 = faces[index + edge * 2];
                const y0 = faces[index + edge * 2 + 1];
                const x1 = edge === 2 ? faces[index] : faces[index + (edge + 1) * 2];
                const y1 = edge === 2 ? faces[index + 1] : faces[index + (edge + 1) * 2 + 1];

                findOtherEdge(faces, x0, y0, x1, y1, index, out)
                if (out.index >= 0 && faces[out.index + 8] === 3)
                {
                    const {index: otherIndex, edge: otherEdge} = out;
                    const x2 = edge === 0 ? faces[index + 2 * 2] : faces[index + (edge - 1) * 2];
                    const y2 = edge === 0 ? faces[index + 2 * 2 + 1] : faces[index + (edge - 1) * 2 + 1];

                    faces[otherIndex + 8] = 4;
                    switch (otherEdge)
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

                    //console.log("Face #", printFace(faces,index), ", edge = ", edge, " paired with  Face #" + printFace(faces,out.index), ", edge = ", out.edge)
                    success++;
                }
            }
        }
    }

    console.log("Success:", success, "out of", count);

    return success;
}


function calculateNumNodes(faces)
{
    let tris = 0;
    let quads = 0;
    for (let i = 0; i < LENGTH; i += SIZE)
    {
        const count = faces[i + 8];

        if (count === 3)
        {
            tris++;
        }
        else if (count === 4)
        {
            quads++;
        }
    }

    // we divide each quad in 9 nodes and each tri into 7 nodes
    return quads * 9 + tris * 7;
}


const NODE_SIZE = 6;

const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;


function subdivide(faces)
{

    const numNodes = calculateNumNodes(faces);

    const nodes = new Float64Array(numNodes * NODE_SIZE);

    let pos = 0;

    const insertNode = (x0, y0) => {

        x0 |=0;
        y0 |=0;

        for (let i = 0; i < pos; i += NODE_SIZE)
        {
            if (Math.abs(nodes[i] - x0) < 2 && Math.abs(nodes[i + 1] - y0) < 2)
            {
                return i;
            }
        }

        const index = pos;

        nodes[pos] = x0;
        nodes[pos + 1] = y0;

        nodes[pos + 2 + NORTH] = -1;
        nodes[pos + 2 + EAST] = -1;
        nodes[pos + 2 + SOUTH] = -1;
        nodes[pos + 2 + WEST] = -1;

        pos += NODE_SIZE;

        return index;
    }

    const connect = (n0, n1, dir) => {

        nodes[n0 + 2 + dir] = n1;
        nodes[n1 + 2 + ((dir + 2) & 3)] = n0;
    }

    for (let i = 0; i < LENGTH; i += SIZE)
    {
        const count = faces[i + 8];

        if (count === 0)
        {
            continue;
        }

        const x0 = faces[i]
        const y0 = faces[i + 1]
        const x1 = faces[i + 2]
        const y1 = faces[i + 3]
        const x2 = faces[i + 4]
        const y2 = faces[i + 5]

        if (count === 3)
        {
            const m0x = (x0 + x1) / 2;
            const m0y = (y0 + y1) / 2;
            const m1x = (x1 + x2) / 2;
            const m1y = (y1 + y2) / 2;
            const m2x = (x2 + x0) / 2;
            const m2y = (y2 + y0) / 2;

            const cx = (x0 + x1 + x2) / 3
            const cy = (y0 + y1 + y2) / 3

            const n0 = insertNode(x0, y0);
            const n1 = insertNode(m0x, m0y);
            const n2 = insertNode(x1, y1);
            const n3 = insertNode(m1x, m1y);
            const n4 = insertNode(x2, y2);
            const n5 = insertNode(m2x, m2y);
            const n6 = insertNode(cx, cy);

            connect(n0, n1, NORTH);
            connect(n1, n6, EAST);
            connect(n6, n5, SOUTH);
            connect(n5, n0, WEST);

            connect(n1, n2, NORTH);
            connect(n2, n3, EAST);
            connect(n3, n6, SOUTH);
            connect(n6, n1, WEST);

            connect(n5, n6, NORTH);
            connect(n6, n3, EAST);
            connect(n3, n4, SOUTH);
            connect(n4, n5, WEST);

        }
        else
        {
            const x3 = faces[i + 6]
            const y3 = faces[i + 7]

            const m0x = (x0 + x1) / 2;
            const m0y = (y0 + y1) / 2;
            const m1x = (x1 + x2) / 2;
            const m1y = (y1 + y2) / 2;
            const m2x = (x2 + x3) / 2;
            const m2y = (y2 + y3) / 2;
            const m3x = (x3 + x0) / 2;
            const m3y = (y3 + y0) / 2;

            const cx = (x0 + x1 + x2 + x3) / 4
            const cy = (y0 + y1 + y2 + y3) / 4

            const n0 = insertNode(x0, y0);
            const n1 = insertNode(m0x, m0y);
            const n2 = insertNode(x1, y1);
            const n3 = insertNode(m1x, m1y);
            const n4 = insertNode(x2, y2);
            const n5 = insertNode(m2x, m2y);
            const n6 = insertNode(x3, y3);
            const n7 = insertNode(m3x, m3y);
            const n8 = insertNode(cx, cy);

            connect(n0, n1, NORTH);
            connect(n1, n2, NORTH);
            connect(n2, n3, EAST);
            connect(n3, n4, EAST);
            connect(n4, n5, SOUTH);
            connect(n5, n6, SOUTH);
            connect(n6, n7, WEST);
            connect(n7, n0, WEST);

            connect(n8, n3, NORTH);
            connect(n8, n5, EAST);
            connect(n8, n7, SOUTH);
            connect(n8, n1, WEST);
        }
    }

    console.log("SUBDIVIDED: limit = ", numNodes, ", fill rate = ", (pos / NODE_SIZE) / numNodes);

    return nodes.slice(0, pos);
}


const PULL_POWER = 0.1;
const PUSH_POWER = 0.1;

/**
 * Maximum power being applied by a force
 */
export const MAX_POWER = 10000;
function maxPower(power)
{
    return power < MAX_POWER ? power : MAX_POWER;
}

const SQRT_2 = Math.sqrt(2);

function ease(graph, targetLength, iterations = 1)
{
    const {length} = graph;

    const minDistance = targetLength * SQRT_2;


    function pullEdge(x0, y0, node, targetLength)
    {
        if (node >= 0)
        {
            const x1 = graph[node];
            const y1 = graph[node + 1];

            let dx = x1 - x0;
            let dy = y1 - y0;

            const len = Math.sqrt(dx * dx + dy * dy);

            if (len > targetLength)
            {
                const dDelta = PULL_POWER * (len - targetLength) / targetLength;
                const power = maxPower(dDelta * dDelta);


                if (len === 0)
                {
                    return;
                }

                const f = power / len;
                dx *= f;
                dy *= f;

                graph[node] -= dx;
                graph[node + 1] -= dy;
            }
        }
    }


    function push(x0, y0, node)
    {
        const x1 = graph[node];
        const y1 = graph[node + 1];
        
        let dx = x1 - x0;
        let dy = y1 - y0;

        const len = Math.sqrt(dx * dx + dy * dy);

        if (len < minDistance)
        {
            const delta = PUSH_POWER * (minDistance - len) / minDistance ;
            const power = maxPower(delta * delta);
            const f = power / len;
            dx *= f;
            dy *= f;

            graph[node] += dx;
            graph[node + 1] += dy;
        }

    }


    function pullAcross(x0, y0, n0, n1, targetLength)
    {
        if (n0 >= 0&& eastEdge)
        {
            const x0 = graph[eastEdge];
            const y0 = graph[eastEdge + 1];
            pullEdge(x0, y0, n0, targetLength * SQRT_2)
        }


    }


    for (let i = 0; i < iterations; i++)
    {
        for (let j = 0; j < length; j += NODE_SIZE)
        {
            const x0 = graph[j];
            const y0 = graph[j + 1];

            const northEdge = graph[j + 2];
            const eastEdge = graph[j + 3];
            const southEdge = graph[j + 4];
            const westEdge = graph[j + 5];

            pullEdge(x0, y0, northEdge, targetLength)
            pullEdge(x0, y0, eastEdge, targetLength)
            pullEdge(x0, y0, southEdge, targetLength)
            pullEdge(x0, y0, westEdge, targetLength)

            // pullAcross(x0, y0, northEdge, eastEdge, targetLength)
            // pullAcross(x0, y0, southEdge, eastEdge, targetLength)
            // pullAcross(x0, y0, southEdge, westEdge, targetLength)
            // pullAcross(x0, y0, northEdge, westEdge, targetLength)

            if (northEdge >= 0 && eastEdge >= 0)
            {
                const x0 = graph[northEdge];
                const y0 = graph[northEdge + 1];
                pullEdge(x0, y0, eastEdge , targetLength * SQRT_2)
            }

            if (southEdge >= 0 && eastEdge >= 0)
            {
                const x0 = graph[eastEdge];
                const y0 = graph[eastEdge + 1];
                pullEdge(x0, y0, southEdge, targetLength * SQRT_2)
            }


            if (southEdge >= 0 && westEdge >= 0)
            {
                const x0 = graph[southEdge];
                const y0 = graph[southEdge + 1];
                pullEdge(x0, y0, westEdge, targetLength * SQRT_2)
            }

            if (northEdge >= 0 && westEdge >= 0)
            {
                const x0 = graph[westEdge];
                const y0 = graph[westEdge + 1];
                pullEdge(x0, y0, northEdge, targetLength * SQRT_2)
            }

        }


        for (let j = 0; j < length; j += NODE_SIZE)
        {
            for (let k = length - NODE_SIZE; k > j; k -= NODE_SIZE)
            {
                const x0 = graph[j];
                const y0 = graph[j + 1];

                push(x0, y0, k)
            }
        }

    }
}


const faces = createHexagonalTiles(LIMIT);
removeRandomEdges(faces, NUM_EDGES * 0.9)
const graph = subdivide(faces);
ease(graph, EDGE_LENGTH / 4, 500);

console.log("GRAPH SIZE", graph.length / NODE_SIZE, graph);


function mainLoop()
{
    //ease(graph, EDGE_LENGTH / 4);

    // // draw original quads and tris
    //
    // ctx.strokeStyle = "#800";
    // ctx.lineWidth = 4;
    //
    //
    // for (let pos = 0; pos < LENGTH; pos += SIZE)
    // {
    //     const count = faces[pos + 8];
    //
    //     if (count >= 3)
    //     {
    //         const caseMask = faces[pos + 9];
    //         const targetIsOddFace = !!(caseMask & 1);
    //         const targetIsOutmostFace = !!(caseMask & 2);
    //
    //
    //         ctx.beginPath();
    //         ctx.moveTo(faces[pos ],faces[pos + 1]);
    //
    //         for (let i = 1; i < count; i++)
    //         {
    //             ctx.lineTo(faces[pos + i*2],faces[pos +  i*2 + 1]);
    //         }
    //
    //         ctx.closePath();
    //         ctx.stroke();
    //
    //     }
    // }

    ctx.strokeStyle = "#080";
    ctx.lineWidth = 1;

    const {length} = graph;


    ctx.fillStyle = "#000";

    const hw = config.width /2;
    const hh = config.height /2;

    ctx.fillRect(-hw,-hh, config.width, config.height)

    function drawEdge(x0, y0, node)
    {
        if (node >= 0)
        {
            const x1 = graph[node];
            const y1 = graph[node + 1];

            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            ctx.stroke();
        }
    }


    for (let i = 0; i < length; i += NODE_SIZE)
    {
        const x0 = graph[i];
        const y0 = graph[i + 1];

        const northEdge = graph[i + 2];
        const eastEdge = graph[i + 3];
        const southEdge = graph[i + 4];
        const westEdge = graph[i + 5];

        drawEdge(x0, y0, northEdge)
        drawEdge(x0, y0, eastEdge)
        drawEdge(x0, y0, southEdge)
        drawEdge(x0, y0, westEdge)

    }


    raf(mainLoop)
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
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "#888";
        ctx.strokeStyle = "#f00";
        ctx.translate(width >> 1, height >> 1)

        raf(mainLoop)
    }
);
