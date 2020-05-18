import React, { useReducer, useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import cx from "classnames"

const SET_FIELD = "SET_FIELD";
const SET_ERROR = "SET_ERROR";

function reducer(state,action)
{
    const { type } = action;
    switch(type)
    {
        case SET_FIELD:
            const newState = {
                ... state,
                [action.name] : action.value,
                errors: {
                    ... state.errors,
                    [action.name] : ""
                }
            };
            newState.recreate(newState);
            return newState;

        case SET_ERROR:
            return {
                ... state,
                errors: {
                    ... state.errors,
                    [action.name] : action.error
                }
            };
    }

}


const Input = ({label, name, config, dispatch, placeholder, validate, disabled, error}) =>  {

    const errorForField = config.errors && config.errors[name];

    const [ debouncedInputValidation, cancelDebouncedInputValidation ] = useDebouncedCallback(value => {

        if (validate)
        {
            value = validate(value);
        }
        if (value !== null)
        {
            dispatch({
                type: SET_FIELD,
                name,
                value
            })
        }
        else
        {
            dispatch({
                type: SET_ERROR,
                name,
                error
            })
        }


    }, 350);
    return (
        <div>
            <label>
                {
                    label
                }
            <input
                className={ cx( !!errorForField && "error" )}
                type="text"
                defaultValue={ config[name] }
                placeholder={placeholder}
                title={ placeholder }
                size={4}
                disabled={disabled}
                onChange={ ev => {
                    let value = ev.target.value;

                    debouncedInputValidation(value);
                }}
            />
            </label>
            {
                errorForField && <div className="error">{ errorForField }</div>
            }
        </div>

    )
}

const Checkbox = ({label, name, config, dispatch, disabled}) =>  {

    return (
        <div>
            <label>
                {
                    label
                }
            <input
                type="checkbox"
                defaultChecked={ config[name] }
                size={4}
                disabled={disabled}
                onChange={ ev => {
                    let value = ev.target.checked;

                    dispatch({
                        type: SET_FIELD,
                        name,
                        value
                    })
                }}
            />
            </label>
        </div>
    )
}




const NumberInput = ({ min, max, ... rest}) =>  {
    return (
        <Input
            { ... rest }
            placeholder={ min + " to " + max }
            error={ "Must be number from " + min + " to " + max }
            validate={ v => {
                const n = +v;
                return !isNaN(n) && n >=min && n <= max ? n : null

            }}

        />
    )
}


const Settings = ({config: configFromProps, recreate}) => {

    const [config, dispatch] = useReducer(reducer, null, () => ({
        ... configFromProps,
        recreate
    }));

    //console.log("Render", config);

    return (
        <div>
            <NumberInput
                label="Number of Rings"
                name="numberOfRings"
                config={ config }
                dispatch={dispatch}
                min={1}
                max={30}

            />
            <Checkbox
                label="Animated Easing"
                name="animatedEasing"
                config={ config }
                dispatch={dispatch}
            />

            <NumberInput
                label="Percent of edges to remove"
                name="removeEdges"
                config={ config }
                dispatch={dispatch}
                min={0}
                max={200}
            />
            <button
                type="button"
                onClick={ () => recreate(config) }
            >
                Redraw
            </button>
        </div>
    );
};

export default Settings;
