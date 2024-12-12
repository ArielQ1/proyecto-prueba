import CardVertical from '../components/CardVertical';

const Galery = () => {
    return (
        <div>
            <h1 className="font-bold text-5xl text-center">Galery</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, ea hic? Accusantium quasi itaque excepturi dolorem labore voluptatum numquam tempora suscipit animi voluptates atque nulla impedit quia sunt, deleniti quod!</p>
            <CardVertical description={"kjacncdnsacs"} image={"https://cdn.bolivia.com/sdi/2018/09/26/7-curiosidades-de-santa-cruz-673897.jpg"} position={"left"} title={"Santa Cruz"} />
        </div>
    );
}

export default Galery;