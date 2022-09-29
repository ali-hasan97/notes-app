import {MdCancel} from 'react-icons/md'

const Note = ({ note, toggleImportance, remove }) => {
    const checkImportance = () => {
        if (note.important === true) {
            return <input type="checkbox" onChange={toggleImportance} defaultChecked />
        } else {
            return <input type="checkbox" onChange={toggleImportance} />
        }
    }
    
    return (
        <tr className="note">
            <td>{checkImportance()}</td>
            <td>
                {note.content}
                <div className="note__delete" onClick={() => remove(note)}>
                    <MdCancel color='red' />
                </div>
            </td>
        </tr>
    )
}

export default Note