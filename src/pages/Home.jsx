import CardHorizontal from "../components/CardHorizontal";
import CardVertical from "../components/CardVertical";


const Home = () => {
  return (
    <article className="flex flex-col my-3">
      <h1 className="font-bold text-5xl text-center">Inicio</h1>
      <section className="px-24">
        <h2 className="text-3xl font-semibold my-3">Altiplano Boliviano</h2>
        <p>El Altiplano es una vasta meseta ubicada en el oeste de Bolivia, a gran altura sobre el nivel del mar, que se extiende por más de 2,000 kilómetros. Este es un paisaje caracterizado por su terreno elevado, frío y seco, con una altitud promedio de 3,800 metros. Se encuentra entre las dos ramas principales de la Cordillera de los Andes, lo que le otorga una geografía montañosa con valles y lagunas. El Altiplano es conocido por su clima riguroso, con temperaturas que pueden llegar a bajo cero, especialmente durante la noche. En esta región se encuentra el Lago Titicaca, el lago navegable más alto del mundo, que es un importante centro cultural y turístico. Además, el Altiplano alberga a las principales ciudades como La Paz, que es la sede del gobierno, y El Alto, una ciudad vecina que es famosa por su crecimiento demográfico rápido y sus características urbanas. Esta zona es fundamentalmente agrícola y ganadera, con cultivos de quinua, papas y alfalfa, además de ser hogar de pueblos indígenas como los Aymaras.</p>
      </section>
      <section className="flex flex-wrap justify-center my-5">        
        <CardHorizontal titulo={"La Paz"} imagen={"https://i.redd.it/9ihcn6mp1t1c1.jpg"}>
          <p className="text-center">La Paz, en Bolivia, es la capital administrativa más alta del mundo, ubicada en la meseta del Altiplano de los Andes a más de 3,500 m sobre el nivel del mar. Se extiende hasta la ciudad de El Alto en las zonas altas, con el monte nevado Illimani de fondo, con 6,438 m de altura. Se puede acceder al espectacular entorno de la ciudad a través del sistema de teleférico de la ciudad llamado Mi Teleférico.</p>
        </CardHorizontal>
        <CardHorizontal titulo={"Oruro"} imagen={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPRdH4hjwnJQ7UrZpN06pS-9afKYX3QXxHQ&amp;s"}>
          <p className="text-center">Oruro es una ciudad y municipio de Bolivia, capital y ciudad más poblada del departamento de Oruro y de la provincia de Cercado. El municipio tiene una población de 264 683 habitantes, convirtiéndose de esa manera en la quinta ciudad más poblada de Bolivia. </p>
        </CardHorizontal>
        <CardHorizontal titulo={"Potosi"} imagen={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Vista_panor%C3%A1mica_de_Potos%C3%AD.jpg/1000px-Vista_panor%C3%A1mica_de_Potos%C3%AD.jpg"}>
          <p className="text-center">Potosí es una ciudad en el altiplano del sur de Bolivia. Su larga historia minera se exhibe en el Cerro Rico, una montaña y mina de plata en funcionamiento al sur de la ciudad. La antigua casa de la moneda ubicada en el centro de Potosí, la Casa Nacional de la Moneda, alberga un museo dedicado al arte y la historia de Bolivia. Junto a la casa de la moneda, está la Plaza 10 de Noviembre, una plaza bordeada con edificios coloniales adornados, incluida la catedral. </p>
        </CardHorizontal>
      </section>
      <section className="px-24 text-center">
        <h2 className="text-3xl font-semibold my-3">Valles Bolivianos</h2>
        <p>La región de los Valles se ubica en el centro del país y conecta el Altiplano con las Tierras Bajas. Esta zona es conocida por su geografía de montañas, valles y colinas, y su clima templado, que varía entre cálido y moderado. Los valles presentan una topografía que favorece la agricultura, lo que hace de esta región una de las más productivas de Bolivia, especialmente en lo que respecta al cultivo de frutas, hortalizas, y plantas como el café y la coca. Las principales ciudades de esta región son Cochabamba y Tarata, con Cochabamba destacándose como la &quot;Capital Gastronómica de Bolivia&quot; debido a su rica variedad culinaria. Además de la agricultura, los valles bolivianos también cuentan con industrias como la manufactura y el comercio, convirtiéndolos en un motor económico del país. Su clima más cálido y agradable ha favorecido una creciente población y un estilo de vida más relajado en comparación con el frío Altiplano.</p>
      </section>  
      <section className="flex flex-col items-center">
        <CardVertical position={"left"} title={"Cochabamba"} image={"https://unifranz.edu.bo/wp-content/uploads/2023/09/1-8.jpeg"} description={"Cochabamba es una ciudad del centro de Bolivia. En un cerro en el este, un teleférico asciende a la enorme estatua del Cristo de la Concordia con vista al área circundante. En el centro de la ciudad está la Plaza 14 de Septiembre, una plaza colonial rodeada de galerías y la catedral barroca andina de San Sebastián. En los alrededores, hay muchas iglesias coloniales, como la de Santo Domingo con su impresionante fachada de piedra tallada. "} />
        <CardVertical position={"rigth"} title={"Tarija"} image={"https://elpais.bo/img/images_1200/contents/2023/01/07/06a5c3c3-368d-495c-a7d5-5cce4e64a648.jpg"} description={"Tarija, ciudad fundada con el nombre de San Bernardo o con el extenso de Villa de San Bernardo de la Frontera de Tarija, ​ es un municipio y una ciudad localizada al sur de Bolivia, capital y ciudad más poblada de la provincia Cercado y del departamento homónimo. "} />
        <CardVertical position={"left"} title={"Chuquisaca"} image={"https://embajadadebolivia.eu/wp-content/uploads/2022/08/sucre-bolivia-1.jpg"} description={"Chuquisaca es un departamento de Bolivia situado en el centro-sur del país. Su capital es Sucre, que también es la capital constitucional de Bolivia. El departamento de Chuquisaca tiene una superficie de 51 524 km² y una población de 631 062 habitantes (según el Censo INE 2012)."} />
      </section>
    </article>
  );
}

export default Home;