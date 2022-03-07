import cloasses from './CssModules.module.scss'

export const CssModules = () => {
    return (
        <div>
            <p>css modules</p>
            <button className={cloasses.container}>
                fight!!
            </button>
        </div>
    )
}
