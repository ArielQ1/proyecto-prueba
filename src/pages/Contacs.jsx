import CardVertical from "../components/CardVertical";

const Contacts = () => {
    return (
        <div>
            <h1 className="font-bold text-5xl text-center">Contacts</h1>
            <div className="flex ">
                <div className="caja-1">
                    <CardVertical title={"priemrp"} />
                </div>
                <div className="caja-2">
                <CardVertical title={"segundo"} />
                </div>
                <div className="caja-3">
                <CardVertical title={"skadhya"} />
                </div>
            </div>
        </div>
    );
}

export default Contacts;