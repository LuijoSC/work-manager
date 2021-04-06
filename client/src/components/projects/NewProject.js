import React, {Fragment, useState} from 'react';

const NewProject = () => {

    //Project state
    const [project, saveProject] = useState({
        nombre: ''
    });

    const {name} = project;

    //Get input content
    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    //User submitting a project
    const onSubmitProject = e => {
        e.prevent.Default();
    }

    return(
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primary"
        >New Proyect</button>
        <form
            className="form-new-project"
            onSubmit={onSubmitProject}
        >
            <input
                type="text"
                className="input-text"
                placeholder="Project name"
                name="name"
                value={name}
                onChange={onChangeProject}
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