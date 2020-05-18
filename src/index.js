import domready from "domready"
import React from "react"
import ReactDOM from "react-dom"
import raf from "raf"
// noinspection ES6UnusedImports
import STYLE from "./style.css"
import Settings from "./Settings";
import OrganicQuads from "@fforw/organic-quads";


const PHI = (1 + Math.sqrt(5)) / 2;
const TAU = Math.PI * 2;
const DEG2RAD_FACTOR = TAU / 360;

let ctx, canvas;

const config = {
    numberOfRings: 10,
    removeEdges: 50,
    animatedEasing: true
};

let tiles;


function resize(cfg = null)
{
    Object.assign(config, cfg)

    const width = (window.innerWidth * 0.85) | 0;
    const height = (window.innerHeight) | 0;

    config.width = width;
    config.height = height;

    canvas.width = width;
    canvas.height = height;

    tiles = new OrganicQuads(config);

    //graph[6] = 1;

    raf(mainLoop);
}


function mainLoop()
{
    tiles.render(ctx);

    if (tiles.config.animating)
    {
        raf(mainLoop);
    }
}


domready(
    () => {

        canvas = document.getElementById("screen");
        ctx = canvas.getContext("2d");

        ctx.fillStyle = "#888";
        ctx.strokeStyle = "#f00";

        resize();

        ReactDOM.render(
            <Settings
                config={tiles.config}
                recreate={
                    cfg => {
                        resize(cfg);
                    }
                }

            />,
            document.getElementById("ui")
        )

        window.addEventListener("resize", ev => resize(), true);

    }
);
