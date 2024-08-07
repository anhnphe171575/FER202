import { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function EditSong(){
    const {eId} = useParams();
    const [song,setSongs]= useState({});
    const[categories,setCategories]=useState([]);
    const[album,setAlbum] = useState([]);
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [src, setSrc] = useState("");
    const [artist, setArtist] = useState();
    const [plays, setPlay] = useState(0);
    const [categoryId, setCatId] = useState('');
    const [ranking, setRank] = useState(0);
    const [albumId, setAlbumId] = useState('');
    
    useEffect(() => {
        fetch(`http://localhost:9999/listsongs/${eId}`)
        .then(res=>res.json())
        .then(data=>{
            setSongs(data)
            setTitle(data.title)
            setImg(data.imgSrc)
            setSrc(data.src)
            setArtist(data.artist)
            setPlay(data.plays)
            setCatId(data.categoryId)
            setRank(data.ranking)
            setAlbumId(data.AlbumID)
        })
        .catch(e => console.log(e))
        

        fetch("http://localhost:9999/categories")
            .then(res => res.json())
            .then(result => setCategories(result))
            .catch(error => console.log(error));

        fetch("http://localhost:9999/albums")
            .then(res => res.json())
            .then(result => setAlbum(result))

    }, [eId])

    function handleCreate(e){
        e.preventDefault();
        let message = "";
        let status = true;
        if (title.length === 0) {
            message += "Product name is required\n";
            status = false;
        }
        if (categoryId === '0') {
            message += "You must choose a category!";
            status = false;
        }if (status === false || message.length > 0) {
            alert(message);
        } else {
            const editSong = {
                title:title,
                imgSrc: img,
                src: src,
                artist: artist,
                plays:plays,
                ranking:ranking,
                AlbumID:albumId,
                categoryId: categoryId,
            };

            fetch(`http://localhost:9999/listsongs/${eId}`, {
                method: "PUT",
                body: JSON.stringify(editSong),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
                .then(resp => resp.json())
                .then(SONGCreated => {
                    alert("Update success! Id: " + SONGCreated.id);
                    window.location.href = "/admin";
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h3 style={{ textAlign: "center" }}>Edit Song</h3>
                </Col>
                <hr />
                <Row>
                    <Col>
                        <Link to={"/admin"}>Back to List</Link>
                    </Col>
                </Row>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <FormLabel>Id</FormLabel>
                        <FormControl value={song?.id} disabled />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Title</FormLabel>
                        <FormControl value={title} onChange={e => setTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Image</FormLabel>
                        <FormControl value={img} onChange={e => setImg(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Src Music</FormLabel>
                        <FormControl value={src} onChange={e => setSrc(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Artist</FormLabel>
                        <FormControl value={artist} onChange={e => setArtist(e.target.value)}></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Play</FormLabel>
                        <FormControl value={plays} type="number" min={0} max={100000000} onChange={e => setPlay(e.target.value)}></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Category</FormLabel>
                        <FormSelect 
                        value={categoryId}
                        onChange={e => setCatId((e.target.value))}>
                            <option value="0">-- Select a category --</option>
                            {categories?.map(c => (
                                <option value={c.id} key={c.id}>{c.name}</option>
                            ))
                            }
                        </FormSelect>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>ranking</FormLabel>
                        <FormControl value={ranking} onChange={e => setRank((e.target.value))} type="number" min={0} max={10}></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Album</FormLabel>
                        <FormSelect 
                        value={albumId}
                        onChange={e => setAlbumId((e.target.value))}>
                            <option value="0">-- Select a album --</option>
                            {album?.map(c => (
                                <option value={c.id} key={c.id}>{c.title}</option>
                            ))
                            }
                        </FormSelect>
                        </FormGroup>
                        <Form.Group className="mb-3">
                        <Button onClick={handleCreate}>Update</Button>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
}