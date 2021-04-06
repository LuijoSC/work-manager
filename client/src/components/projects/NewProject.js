import React, {Fragment} from 'react';

const NewProject = () => {
    return(
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primary"
        >New Proyect</button>
        <form
            className="form-new-project"
        >
            <input
                type="text"
                className="input-text"
                placeholder="Project name"
                name="name"
            />

            <input
                type="submit"
                className="btn btn-primary btn-block"
                value="Create project"
            />

        </form>
        </Fragment>
    );
}

export default NewProject;