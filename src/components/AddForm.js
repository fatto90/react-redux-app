import { Button } from 'react-bootstrap'
import { useState } from 'react'
import store from '../redux/store'
import { addVideo } from '../redux/videos/addVideo'

const AddForm = () => {
    const [url, setUrl] = useState('') 
    const [title, setTitle] = useState('')
    
    const onSubmit = async (e) => {
        e.preventDefault()
        if(!url || !title){
            alert('Inserisci tutte le info prima di proseguire')
            return
        }

        store.dispatch(addVideo(url, title));

        setUrl('')
        setTitle('')
    }

    return (
        <>
        <h2>Aggiungi un video</h2>
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="titleField">Titolo</label>
                <input type="text" id="titleField" className="form-control" placeholder="Inserisci il titolo del video" onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div className="mb-3">
                <label htmlFor="urlField">Url</label>
                <input type="text" id="urlField" className="form-control" placeholder="Inserisci l'Url del video" onChange={(e) => setUrl(e.target.value)} value={url}/>
            </div>
            <Button type="submit" variant="success" className="mt-5">Conferma</Button>
        </form>
        </>
    )
}

export default AddForm
